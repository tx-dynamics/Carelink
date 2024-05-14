import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View, Alert} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import PlansComp from '../../../components/PlansComp';
import {useDispatch, useSelector} from 'react-redux';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {fontPixel, heightPixel} from '../../../Constants';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import Loader from '../../../components/Loader';
import {api} from '../../../network/Environment';
import {Method, callApi} from '../../../network/NetworkManger';
import {useStripe} from '@stripe/stripe-react-native';
import {useIsFocused} from '@react-navigation/native';
import {setUserData} from '../../../redux/Slices/userDataSlice';

let paymentIndentId = '';
const PaymentPlans = ({navigation}) => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const usertype = useSelector(state => state.splash.userType);
  const {initPaymentSheet, presentPaymentSheet} = useStripe();
  const [isLoading, setIsLoading] = useState(false);
  const [plansData, setPlansData] = useState([]);
  const [paymentId, setPaymentId] = useState('');
  const userData = useSelector(state => state?.userDataSlice);
  const [selectedPlan, setSelectedPlan] = useState(
    plansData[0]?.priceId ? plansData[0]?.priceId : 0,
  );

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      price: '$29.99',
      price1: `$${plansData[0]?.price}`,
      plans: '/month',
      description: `You will get 20 listing to post in a month with this monthly plan`,
      desc1:
        'You will get 20 Proposals to submit in a month with this monthly plan',
      priceId: plansData[0]?.priceId,
    },
    {
      id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
      price: '$59.99',
      price1: `$${plansData[1]?.price}`,
      plans: '/month',
      description:
        'You will get 50 listing to post in a month with this monthly plan',
      desc1:
        'You will get 50 Proposals to submit in a month with this monthly plan',
      priceId: plansData[1]?.priceId,
    },
    {
      id: 'bd7acbea-c1b1-46c23-aed5-3ad53abb28ba',
      price: '$99.99',
      price1: `$${plansData[2]?.price}`,
      plans: '/month',
      description:
        'You will get 100 listing to post in a month with this monthly plan',
      desc1:
        'You will get 100 Proposals to submit in a month with this monthly plan',
      priceId: plansData[2]?.priceId,
    },
  ];

  useEffect(() => {
    if (isFocused) {
      getSubscriptionDetails();
    }
    return () => {
      setIsLoading(false);
    };
  }, [isFocused]);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  const fetchPaymentSheetParams = async priceId => {
    try {
      const endPoint = api.createIntent;
      const data = {
        priceId: priceId, // Use the passed priceId or any default value
      };

      await callApi(
        Method.POST,
        endPoint,
        data,
        res => {
          if (res?.status === 200 || res?.status === 201) {
            initializePaymentSheet(
              res?.data?.clientSecret,
              res?.data?.subscriptionId,
            );
            paymentIndentId = res?.data?.subscriptionId;
            setPaymentId(res?.data?.subscriptionId);
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        },
        err => {
          setIsLoading(false);
          FlashAlert('E', 'Error', err?.message);
        },
      );
    } catch (error) {
      setIsLoading(false);
      FlashAlert('E', 'Error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const initializePaymentSheet = async clientSecret => {
    const {error} = await initPaymentSheet({
      merchantDisplayName: 'Carelink',
      paymentIntentClientSecret: clientSecret,
      defaultBillingDetails: {
        name: userData?.userData?.name,
      },
    });
    if (!error) {
      // setIsLoading(true);
      console.log('Error ', error);
    }
  };
  console.log('Payment intent id', paymentIndentId);

  const verifyPaymentSheetParams = async () => {
    try {
      const endPoint = `${api.createIntent}/${paymentIndentId}`;
      const data = {};

      await callApi(
        Method.POST,
        endPoint,
        data,
        res => {
          if (res?.status === 200 || res?.status === 201) {
            dispatch(setUserData(res?.data?.user));
            navigation.navigate('PaymentDone');
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        },
        err => {
          setIsLoading(false);
          FlashAlert('E', 'Error', err?.message);
        },
      );
    } catch (error) {
      setIsLoading(false);
      FlashAlert('E', 'Error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePayment = async item => {
    await fetchPaymentSheetParams(item?.priceId);
    openPaymentSheet();
  };

  const openPaymentSheet = async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      await verifyPaymentSheetParams(); // Pass the priceId to fetchPaymentSheetParams
    }
  };

  const getSubscriptionDetails = async () => {
    try {
      const endPoint = api.get_subscription;
      const data = {};

      await callApi(
        Method.GET,
        endPoint,
        data,
        res => {
          if (res?.status === 200 || res?.status === 201) {
            setPlansData(res?.data);
            setSelectedPlan(res?.data[0]?.priceId);
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        },
        err => {
          setIsLoading(false);
          console.log('Err is', err);
          // RedFlashMessage(err);
        },
      );
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <IconHeaderComp
        title={'Subscription'}
        onPress={() => navigation.goBack()}
        imgName={iconPath.leftArrow}
        heading={'Subscribe your plan to continue'}
      />
      <View style={styles.txtView}>
        <Apptext style={styles.submitTxt}>
          Subscribe Care Link to submit your rooms listings{' '}
        </Apptext>
        <Apptext style={[styles.submitTxt, {fontFamily: 'Poppins-Medium'}]}>
          Choose your plan and get started
        </Apptext>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View style={{marginBottom: heightPixel(20)}}></View>
        )}
        data={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <PlansComp
            btnTxt={'Subscribe'}
            price={usertype === 'ServiceSide' ? item.price : item.price1}
            plan={'/month'}
            desc={usertype === 'ServiceSide' ? item.description : item.desc1}
            onPress={() => handlePayment(item)}
          />
        )}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default PaymentPlans;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  createTxt: {
    marginTop: wp('8%'),
    color: DefaultStyles.colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: wp('6%'),
    marginHorizontal: wp('5%'),
  },
  txtView: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: heightPixel(10),
  },
  submitTxt: {
    fontSize: fontPixel(14),
    // fontSize: 11,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import DefaultStyles from '../../../../config/Styles';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import {appIcons} from '../../../../Constants/Utilities/assets';
import UserInfoComp from '../../../../components/UserInfoComp/UserInfoComp';
import ServiceProviderInfo from '../../../../components/ServiceProviderInfo/ServiceProviderInfo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {heightPixel, routes, widthPixel, wp} from '../../../../Constants';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {callApi, Method} from '../../../../network/NetworkManger';
import {api} from '../../../../network/Environment';
import Loader from '../../../../components/Loader';
import Apptext from '../../../../components/Apptext';

const ContractCompeleteDetails = ({navigation, route}) => {
  // states
  const [isLoading, setIsLoading] = useState(false);
  const [serviceUserProfile, setServiceUserProfile] = useState(null);
  const proposalUsers = useSelector(state => state?.proposalSlice);
  console.log('Proposal Users', proposalUsers?.proposalUsers[0]?.proposee);

  //   const {item} = useRoute()?.params;
  const item = useSelector(store => store?.proposalSlice?.itemListing);
  console.log('Item on Room Details', item);
  // listing id

  const proposalRawData = {
    listingId: item?._id,
    serviceProviderId: item?.user,
    agencyId: useSelector(state => state?.userDataSlice?.userData?._id),
  };

  var Startduration = moment.utc(
    moment.duration(item?.availabilityStart).asMilliseconds(),
  );
  var Endduration = moment.utc(
    moment.duration(item?.availabilityEnd).asMilliseconds(),
  );
  const availableDate = moment(item?.availabilityStart).format('MMMM DD YYYY');
  const availableEnd = moment(item?.availabilityEnd).format('MMMM DD YYYY');
  //   console.log('availableDate ', availableDate);

  const daysDifference = Endduration.diff(Startduration, 'days');

  const [liked, setLiked] = useState(false);

  const onHeartPress = async () => {
    console.log('LKiked =====>', item?.liked);
    try {
      const endPoint = item?.liked
        ? `${api?.likeList / item?._id}`
        : api.likeList;
      const bodyParams = item?.liked
        ? null
        : {
            listing: item?._id,
          };

      console.log('Endpoint of like system', endPoint);
      console.log('Body params of like system', bodyParams);
      const onSuccess = result => {
        SuccessFlashMessage(result?.message);
        setLiked(!liked);
      };
      const onError = error => {
        RedFlashMessage(error.message);
      };
      await callApi(
        item?.liked ? Method.DELETE : Method.POST,
        endPoint,
        bodyParams,
        onSuccess,
        onError,
      );
    } catch (error) {
      RedFlashMessage('Listing Not Saved');
    }
  };

  // hooks
  useEffect(() => {
    setLiked(item?.liked);
    // Room Details
    if (route?.params?.review !== 'Room Details') {
      getServiceUserData();
    }
  }, []);

  //  service data
  const getServiceUserData = async () => {
    try {
      setIsLoading(true);
      const bodyParams = {};
      const endPoint = `${api.getUserProfile}/${item?.user}`;
      const onSuccess = result => {
        setServiceUserProfile(result?.user);
        console.log('User data ---', result?.user);
        setIsLoading(false);
      };
      const onError = error => {
        RedFlashMessage(error);
        setIsLoading(false);
      };
      await callApi(Method.GET, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage('Something Went Wrong!');
    }
  };

  const createContract = async () => {
    try {
      setIsLoading(true);
      const endPoint = api.createContract;
      const data = {
        listing: item?._id,
        contracter: proposalUsers?.proposalUsers[0]?.proposer,
        contractee: proposalUsers?.proposalUsers[0]?.proposee,
        status: true,
        startTime: item?.availabilityStart,
        endTime: item?.availabilityEnd,
        // price: 0,
      };

      await callApi(
        Method.POST,
        endPoint,
        data,
        res => {
          if (res?.status === 200 || res?.status === 201) {
            setIsLoading(false);
            SuccessFlashMessage(res?.message);
            navigation.navigate('AgencyHome');
          } else {
            setIsLoading(false);
            RedFlashMessage(res?.message);
          }
        },
        err => {
          setIsLoading(false);
          RedFlashMessage(err);
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
      <Loader isVisible={isLoading} />
      <Header
        headerLabel={route?.params?.review ? 'Review Details' : 'Room Details'}
        leftImgName={appIcons.headerBack}
        onPressRight={onHeartPress}
        rightImgStyle={styles.rightIconStyle}
        onPressLeft={() => navigation.goBack()}
        rightImg={liked ? appIcons.heartRed : appIcons.heartBlank}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {!route?.params?.review && (
          <UserInfoComp
            onPress={() =>
              navigation.navigate(routes.clientProfile, {
                serviceUserProfile,
              })
            }
            pic={serviceUserProfile?.image}
            title={serviceUserProfile?.name}
          />
        )}
        <ServiceProviderInfo
          images={item?.photos}
          washRoom={item?.washRoom}
          days={daysDifference}
          floor={item?.rooms[0]?.floor}
          availableOn={availableDate + ' - ' + availableEnd}
          location={item?.location?.address}
          note={item?.notes}
        />
      </ScrollView>

      <FormButton
        buttonTitle={'Create Contract'}
        onPress={() => createContract()}
      />
    </AppGLobalView>
  );
};

export default ContractCompeleteDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    paddingBottom: heightPixel(20),
  },
  rightIconStyle: {
    width: widthPixel(30),
    height: widthPixel(30),
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: wp('3%'),
    marginHorizontal: wp('5%'),
  },
  rms: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  pinkBox: {
    backgroundColor: DefaultStyles.colors.primary,
    borderRadius: 5,
    padding: 3,
  },
  dtls: {
    color: DefaultStyles.colors.white,
    fontSize: 11,
  },
  marginView: {
    marginHorizontal: wp('5%'),
    marginTop: -5,
  },
  ltst: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  searchBar: {
    height: 47,
    width: wp('90%'),
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: wp('4%'),
    borderRadius: 9,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  directionView: {
    flexDirection: 'row',
    marginTop: wp('6%'),
  },
  jobsTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    marginLeft: wp('5%'),
  },
  pinkBox1: {
    backgroundColor: '#ffabff',
    marginTop: wp('5%'),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('23%'),
  },
  pinkboxTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  dummyTxt: {
    marginHorizontal: wp('5%'),
    marginTop: wp('6%'),
  },
});

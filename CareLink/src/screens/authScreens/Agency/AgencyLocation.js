import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Text,
  View,
  Keyboard,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import {useDispatch, useSelector} from 'react-redux';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {heightPixel, routes} from '../../../Constants';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../network/Environment';
import {callApi, Method} from '../../../network/NetworkManger';
import Loader from '../../../components/Loader';
import {setUserData} from '../../../redux/Slices/userDataSlice';
import {CommonActions} from '@react-navigation/native';
import {userSave} from '../../../redux/Slices/splashSlice';

const AgencyLocation = ({navigation, route}) => {
  // const {myUserLocation}=useRoute();
  const {myUserLocation, agencyData} = route?.params;
  //   console.log('agency location ', agencyData);

  // states
  const usertype = useSelector(state => state.splash.userType);
  const [street, setStreet] = useState('');
  const [apartment, setApartment] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isState, setState] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // hooks
  const dispatch = useDispatch();
  useEffect(() => {
    setStreet(myUserLocation.streetAddress);
    setZipCode(myUserLocation?.zipCode);
    setState(myUserLocation?.stateName);
  }, []);

  // functions
  const onNextPress = async () => {
    Keyboard.dismiss();
    if (apartment == '') {
      RedFlashMessage('Please Enter Apartement Number');
      setIsLoading(false);
      return;
    }
    try {
      setIsLoading(true);
      const endPoint = api.userProfile;
      const bodyParams = {
        name: agencyData?.agencyName,
        experience: agencyData?.experience,
        about: agencyData?.about,
        coverPhoto: agencyData?.agencyImg,
        profilePhoto: agencyData?.profileImg,
        streetAddress: myUserLocation?.streetAddress,
        apartmentNumber: apartment,
        zipCode: myUserLocation?.zipCode,
        stateName: myUserLocation?.stateName,
        country: myUserLocation?.country,
        profileCompleted: true,
      };
      //   console.log('data ', data);
      const onSuccess = result => {
        // console.log('result ', JSON.stringify(result," ",2));
        SuccessFlashMessage(result?.message);
        dispatch(setUserData(result?.data?.user));
        setIsLoading(false);
        dispatch(userSave(true));
        clearForm();
      };

      const onError = error => {
        // console.log("afasdfasd ",error)
        setIsLoading(false);
        RedFlashMessage(error.message);
      };

      await callApi(Method.PATCH, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage(error);
    }

    // navigation.navigate("AgencyMap")
    // navigation.navigate("PaymentPlans")
  };

  const clearForm = () => {
    setStreet('');
    setApartment('');
    setZipCode('');
    setState('');
  };
  return (
    <AppGLobalView style={styles.container}>
      <Loader isVisible={isLoading} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{}}>
        <IconHeaderComp
          title={'Location'}
          onPress={() => navigation.goBack()}
          imgName={iconPath.leftArrow}
          heading={
            usertype === 'ServiceSide'
              ? 'Your location where your listed rooms located?'
              : 'Your location where your agency located?'
          }
        />
        <View>
          <Apptext style={[styles.createTxt, {fontFamily: 'Poppins-Medium'}]}>
            Enter your location:{' '}
          </Apptext>
        </View>
        <View style={{marginBottom: heightPixel(50)}}>
          <AppTextInput
            value={street}
            editable={false}
            title={'Street Address'}
          />
          <AppTextInput
            value={apartment}
            onChangeText={setApartment}
            title={'Aparment Number'}
          />
          <AppTextInput value={zipCode} editable={false} title={'Zip Code'} />
          <AppTextInput value={isState} editable={false} title={'State'} />
        </View>
      </KeyboardAwareScrollView>
      <FormButton buttonTitle={'Next'} onPress={onNextPress} />
    </AppGLobalView>
  );
};

export default AgencyLocation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    paddingBottom: heightPixel(20),
  },
  createTxt: {
    marginTop: wp('8%'),
    color: DefaultStyles.colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: wp('6%'),
    marginHorizontal: wp('5%'),
  },
});

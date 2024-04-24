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
  const {myUserLocation, agencyData, ProviderData} = route?.params;
  // console.log('agency location ', myUserLocation, ProviderData);

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
    setStreet(myUserLocation?.streetAddress);
    setZipCode(myUserLocation?.zipCode);
    setState(myUserLocation?.stateName);
  }, []);

  // functions
  const onNextPress = async () => {
    // console.log('street ', street, typeof street);
    Keyboard.dismiss();
    Keyboard.dismiss();
    if (CheckLocationInput()) {
      if (usertype === 'ServiceSide') {
        MoveDataToListingScreen();
        clearForm();
      } else {
        saveAgencyProfile();
      }
    }

    // navigation.navigate("AgencyMap")
    // navigation.navigate("PaymentPlans")
  };

  // agencySideApiCall

  const saveAgencyProfile = async () => {
    try {
      setIsLoading(true);
      const endPoint = api.userProfile;
      const bodyParams = {
        name: agencyData?.agencyName,
        experience: agencyData?.experience,
        about: agencyData?.about,
        coverPhoto: agencyData?.agencyImg,
        profilePhoto: agencyData?.profileImg,
        streetAddress: street,
        apartmentNumber: apartment,
        zipCode: zipCode,
        stateName: isState,
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
  };

  // ProviderSideListingCall
  const MoveDataToListingScreen = () => {
    const myLocationData = {
      streetAddress: street,
      apartmentNumber: apartment,
      zipCode: zipCode,
      stateName: isState,
      country: myUserLocation?.country,
    };
    navigation.navigate(routes.listingSummary, {
      ProviderData,
      myLocationData,
    });
  };

  const clearForm = () => {
    setStreet('');
    setApartment('');
    setZipCode('');
    setState('');
  };

  // const checkMyDataBeforeMoviving
  const CheckLocationInput = () => {
    if (street === '' || street === null) {
      RedFlashMessage('Please Enter Street Address');
      setIsLoading(false);
      return false;
    }
    if (apartment === '' || apartment === null) {
      RedFlashMessage('Please Enter Apartement Number');
      setIsLoading(false);
      return false;
    }
    if (zipCode === '' || zipCode === null) {
      RedFlashMessage('Please Enter ZipCode');
      setIsLoading(false);
      return false;
    }
    if (isState === '' || isState === null) {
      RedFlashMessage('Please Enter State Name');
      setIsLoading(false);
      return false;
    }
    return true;
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
          {myUserLocation?.streetAddress == null ? (
            <AppTextInput
              value={street}
              onChangeText={setStreet}
              title={'Street Address'}
            />
          ) : (
            <AppTextInput
              value={street}
              // onChangeText={setStreet}
              editable={false}
              title={'Street Address'}
            />
          )}
          <AppTextInput
            value={apartment}
            onChangeText={setApartment}
            title={'Aparment Number'}
          />
          {myUserLocation?.zipCode == null ? (
            <AppTextInput
              value={zipCode}
              onChangeText={setZipCode}
              title={'Zip Code'}
            />
          ) : (
            <AppTextInput
              value={zipCode}
              // onChangeText={setZipCode}
              editable={false}
              title={'Zip Code'}
            />
          )}
          {myUserLocation?.country == null ? (
            <AppTextInput
              value={isState}
              onChangeText={setState}
              title={'State'}
            />
          ) : (
            <AppTextInput value={isState} editable={false} title={'State'} />
          )}
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

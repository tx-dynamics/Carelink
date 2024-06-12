import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Keyboard} from 'react-native';
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
import {setAgencyApartmentNumber} from '../../../redux/Slices/agencyInfoSlice';

const AgencyLocation = ({navigation, route}) => {
  const {myUserLocation, agencyData, ProviderData, address} = route?.params;
  // states
  var streetData = address.split(',');
  streetData = streetData[0] + ',' + streetData[1];
  const dispatch = useDispatch();
  const agencyProfileData = useSelector(store => store?.agencyInfoSlice);
  const usertype = useSelector(state => state.splash.userType);
  const [street, setStreet] = useState(streetData);
  const [apartment, setApartment] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [isState, setState] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // hooks
  useEffect(() => {
    setZipCode(myUserLocation?.zipCode);
    setState(myUserLocation?.stateName);

    return () => setIsLoading(false);
  }, []);

  // functions
  const onNextPress = async () => {
    Keyboard.dismiss();
    if (CheckLocationInput()) {
      if (usertype === 'ServiceSide') {
        MoveDataToListingScreen();
        clearForm();
      } else {
        saveAgencyProfile();
      }
    }
  };

  // agencySideApiCall

  const saveAgencyProfile = async () => {
    try {
      setIsLoading(true);
      const endPoint = api.userProfile;
      const bodyParams = {
        name: agencyProfileData?.agencyName,
        experience: agencyProfileData?.agencyExperience,
        about: agencyProfileData?.agencyAbout,
        coverPhoto: agencyProfileData?.agencyCoverPhoto,
        image: agencyProfileData?.agencyProfileImage,
        location: {
          type: 'Point',
          coordinates: [myUserLocation?.latitude, myUserLocation?.longitude],
        },
        agencyStreet: street,
        agencyApartment: apartment,
        agencyZipCode: zipCode,
        agencyState: isState + ' ' + myUserLocation?.country,
        address: address,
        profileCompleted: true,
      };
      const onSuccess = result => {
        SuccessFlashMessage(result?.message);
        dispatch(setUserData(result?.data?.user));
        setIsLoading(false);
        navigation.navigate('PaymentPlans');

        // dispatch(userSave(true));
        // clearForm();
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
      latitude: myUserLocation?.latitude,
      longitude: myUserLocation?.longitude,
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
    if (street === '') {
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
              value={street ? street : streetData}
              onChangeText={text => setStreet(text)}
              title={'Street Address'}
            />
          ) : (
            <AppTextInput
              value={street ? street : streetData}
              onChangeText={text => setStreet(text)}
              editable={false}
              title={'Street Address'}
            />
          )}
          <AppTextInput
            value={apartment}
            onChangeText={text => {
              setApartment(text);
              dispatch(setAgencyApartmentNumber(text));
            }}
            title={'Apartment Number'}
            keyboardType="numeric"
          />
          {myUserLocation?.zipCode == null ? (
            <AppTextInput
              value={zipCode}
              onChangeText={text => setZipCode(text)}
              title={'Zip Code'}
              keyboardType="numeric"
              maxLength={6}
            />
          ) : (
            <AppTextInput
              value={zipCode}
              onChangeText={text => setZipCode(text)}
              editable={false}
              title={'Zip Code'}
              keyboardType="numeric"
              maxLength={6}
            />
          )}
          {myUserLocation?.country == null ? (
            <AppTextInput
              value={isState}
              title={'State'}
              onChangeText={text => setState(text)}
            />
          ) : (
            <AppTextInput
              value={isState}
              editable={false}
              title={'State'}
              onChangeText={text => setState(text)}
            />
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

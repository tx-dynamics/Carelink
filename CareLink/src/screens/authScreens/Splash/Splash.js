import React, {useEffect} from 'react';
import {StyleSheet, Image, StatusBar} from 'react-native';
import DefaultStyles from '../../../config/Styles';
import {routes, widthPixel} from '../../../Constants';
import colors from '../../../config/colors';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {useDispatch, useSelector} from 'react-redux';
import {userSave} from '../../../redux/Slices/splashSlice';

const Splash = ({navigation}) => {
  // hooks
  const dispatch = useDispatch();
  const userData = useSelector(store => store?.userDataSlice);
  const signUpOTP = useSelector(store => store?.splash?.signUpOTP);
  const userType = useSelector(store => store?.splash?.userType);
  console.log('SignUp OTP', signUpOTP);
  console.log('User type', userData);

  useEffect(() => {
    setTimeout(() => {
      if (userType == undefined) {
        navigation.replace('AskRegister');
      } else {
        if (userData?.userType === 'ServiceSide') {
          if (res?.data?.user?.profileCompleted == false) {
            navigation.reset({
              index: 0,
              routes: [{name: routes.addDocuments}],
            });
          } else if (
            userData?.userData?.certificates[0] &&
            userData?.userData?.drivingAbstract &&
            userData?.userData?.selfie &&
            userData?.userData?.drivingLicense &&
            userData?.userData?.homePhoto
          ) {
            navigation.reset({
              index: 0,
              routes: [{name: routes.listingOptions}],
            });
          } else if (res?.data?.user?.subscriptionId == null) {
            navigation.reset({
              index: 0,
              routes: [{name: 'PaymentPlans'}],
            });
          } else {
            dispatch(userSave(true));
          }
        } else {
          if (
            userData?.userData?.profileCompleted &&
            userData?.userData?.subscriptionId
          ) {
            dispatch(userSave(true));
            navigation.reset({
              index: 0,
              routes: [{name: 'Drawer'}],
            });
          } else if (userData?.userData?.profileCompleted == false) {
            navigation.reset({
              index: 0,
              routes: [{name: routes.successAgency}],
            });
          } else if (
            !userData?.userData?.subscriptionId &&
            userData?.userData?.token
          ) {
            navigation.reset({
              index: 0,
              routes: [{name: 'PaymentPlans'}],
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [{name: 'AskRegister'}],
            });
          }
        }
      }
      // if (userType == 'ServiceSide') {
      //   if (isNewUser == false) {
      //     navigation.replace(routes.loginScreen);
      //   } else {
      //     if (
      //       userData?.userData?.certificates[0] &&
      //       userData?.userData?.drivingAbstract &&
      //       userData?.userData?.drivingLicense &&
      //       userData?.userData?.homePhoto &&
      //       userData?.userData?.selfie &&
      //       onboarding &&
      //       userData?.accessToken &&
      //       signUpOTP
      //     ) {
      //       navigation.navigate(routes.listingOptions);
      //     } else if (onboarding && userData?.accessToken && !signUpOTP) {
      //       navigation.replace('EmailVerification', {
      //         setTimer: true,
      //       });
      //     } else if (onboarding && userData?.accessToken) {
      //       navigation.replace(routes.addDocuments);
      //     } else if (onboarding) {
      //       navigation.replace('AskRegister');
      //     }
      //   }
      // } else {
      //   if (isNewUser == false) {
      //     navigation.replace(routes.loginScreen);
      //   } else {
      //     if (onboarding && userData?.accessToken) {
      //       navigation.replace(routes.successAgency);
      //     } else if (onboarding && userData?.accessToken && signUpOTP) {
      //       dispatch(userSave(true));
      //     } else if (onboarding && !signUpOTP) {
      //       navigation.replace('EmailVerification', {
      //         setTimer: true,
      //       });
      //     } else if (onboarding) {
      //       navigation.replace('AskRegister');
      //     } else {
      //       navigation.replace('Step1');
      //     }
      //   }
      // }
    }, 2000);
  }, []);

  return (
    <AppGLobalView style={styles.container}>
      <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
      <Image
        resizeMode="contain"
        source={require('../../../../assets/Care_Link_Logo.png')}
        style={{
          width: widthPixel(120),
          height: widthPixel(120),
        }}
      />
    </AppGLobalView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTxt: {
    color: DefaultStyles.colors.white,
    fontSize: 45,
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'italic',
    lineHeight: 68,
  },
});

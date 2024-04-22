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
  const onboarding = useSelector(store => store.splash?.onboarding);
  const userData = useSelector(store => store?.userDataSlice);
  const userType = useSelector(store => store?.appSlice?.userType);
  const isNewUser = useSelector(store => store?.appSlice?.isNewUser);
  const signUpOTP = useSelector(store => store?.splash?.signUpOTP);
  // const userType = userData?.userData?.userType;
  console.log('User data of splash screen', userType);

  useEffect(() => {
    setTimeout(() => {
      if (userType == 'ServiceType') {
        if (!isNewUser) {
          navigation.replace(routes.loginScreen);
        } else {
          if (onboarding && userData?.accessToken && signUpOTP) {
            dispatch(userSave(true));
          } else if (onboarding && userData?.accessToken && !signUpOTP) {
            navigation.replace('EmailVerification', {
              setTimer: true,
            });
          } else if (onboarding && userData?.accessToken) {
            navigation.replace(routes.addDocuments);
          } else if (onboarding) {
            navigation.replace('AskRegister');
          } else {
            navigation.replace('Step1');
          }
        }
      } else {
        if (!isNewUser) {
          navigation.replace(routes.loginScreen);
        } else {
          if (onboarding && userData?.accessToken && signUpOTP) {
            dispatch(userSave(true));
          } else if (onboarding && userData?.accessToken && !signUpOTP) {
            navigation.replace('EmailVerification', {
              setTimer: true,
            });
          } else if (onboarding && userData?.accessToken) {
            navigation.replace(routes.successAgency);
          } else if (onboarding) {
            navigation.replace('AskRegister');
          } else {
            navigation.replace('Step1');
          }
        }
      }
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

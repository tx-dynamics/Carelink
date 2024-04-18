import React, {useEffect} from 'react';
import {StyleSheet, Image, StatusBar} from 'react-native';
import DefaultStyles from '../../../config/Styles';
import {routes, widthPixel} from '../../../Constants';
import colors from '../../../config/colors';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const onboarding = useSelector(store => store.splash?.onboarding);
  const userData = useSelector(store => store?.userDataSlice);
  const signUpOTP = useSelector(store => store?.splash?.signUpOTP);

  useEffect(() => {
    setTimeout(() => {
      if (onboarding && userData?.accessToken && signUpOTP) {
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

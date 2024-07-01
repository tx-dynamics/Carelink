import React, {useState} from 'react';
import {StyleSheet, Text, View, Keyboard} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import {useDispatch, useSelector} from 'react-redux';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../../config/colors';
import {fontPixel, heightPixel, routes, widthPixel} from '../../../Constants';
import {appIcons} from '../../../Constants/Utilities/assets';
import {fonts} from '../../../Constants/Fonts';
import AlreadyText from '../../../components/AlreadyText/AlreadyText';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import {
  signUpOTPCheck,
  userSave,
  userType,
} from '../../../redux/Slices/splashSlice';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../network/Environment';
import {getDeviceId} from 'react-native-device-info';
import {getFCMToken} from '../../../Services/HelpingMethods';
import {useNavigation} from '@react-navigation/native';
import {
  accessToken,
  refreshToken,
  setUserData,
} from '../../../redux/Slices/userDataSlice';
import {Method, callApi} from '../../../network/NetworkManger';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../Constants/Utilities/assets/Snakbar';
import Loader from '../../../components/Loader';

const LoginScreen = () => {
  // hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isNewUser = useSelector(state => state?.splash?.isNewUser);
  // states
  const [email, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleResendOTP = async () => {
    try {
      const endPoint = api.resendOTP;
      const data = {
        email: email?.toLowerCase(),
      };

      await callApi(
        Method.POST,
        endPoint,
        data,
        res => {
          if (res?.status === 200 || res?.status === 201) {
            SuccessFlashMessage(res?.message);
          } else {
            RedFlashMessage(res?.message);
          }
        },
        err => {
          RedFlashMessage(err);
        },
      );
    } catch (error) {
      RedFlashMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    let fcm = await getFCMToken();
    Keyboard.dismiss();
    if (!email) {
      RedFlashMessage('Email is required');
    } else if (!isPassword) {
      RedFlashMessage('Password is required');
    } else {
      try {
        setIsLoading(true);
        const endPoint = api.login;
        const data = {
          email: email.toLowerCase(),
          password: isPassword,
          device: {id: getDeviceId(), deviceToken: fcm},
        };

        await callApi(
          Method.POST,
          endPoint,
          data,
          res => {
            if (res?.status === 200 || res?.status === 201) {
              if (res?.data?.user?.userType === 'ServiceSide') {
                dispatch(userType('ServiceSide'));
                if (
                  res?.data?.user?.verified &&
                  res?.data?.user?.profileCompleted &&
                  res?.data?.user?.subscriptionId != null
                ) {
                  console.log('1');
                  dispatch(userSave(true));
                  dispatch(signUpOTPCheck(false));
                } else if (res?.data?.user?.verified == false) {
                  navigation.navigate('EmailVerification', {
                    email: email?.toLowerCase(),
                    data: res?.data,
                    register: true,
                  });
                  handleResendOTP();
                  console.log('2');
                  dispatch(setUserData(res?.data?.user));
                } else if (res?.data?.user?.profileCompleted == false) {
                  navigation.navigate(routes.addDocuments);
                  dispatch(signUpOTPCheck(false));
                  dispatch(refreshToken(res?.data?.refreshToken));
                  dispatch(accessToken(res?.data?.token));
                  dispatch(setUserData(res?.data?.user));
                  console.log('3');
                } else if (
                  res?.data?.user?.certificates[0] &&
                  res?.data?.user?.drivingAbstract &&
                  res?.data?.user?.selfie &&
                  res?.data?.user?.drivingLicense &&
                  res?.data?.user?.homePhoto
                ) {
                  navigation.navigate(routes.listingOptions);
                  dispatch(signUpOTPCheck(false));
                  dispatch(refreshToken(res?.data?.refreshToken));
                  dispatch(accessToken(res?.data?.token));
                  dispatch(setUserData(res?.data?.user));
                  console.log('4');
                } else if (!res?.data?.user?.subscriptionId) {
                  navigation.navigate('PaymentPlans');
                  dispatch(signUpOTPCheck(false));
                  dispatch(refreshToken(res?.data?.refreshToken));
                  dispatch(accessToken(res?.data?.token));
                  dispatch(setUserData(res?.data?.user));
                  console.log('5');
                }
              } else {
                dispatch(userType('AgencySide'));
                if (
                  res?.data?.user?.profileCompleted &&
                  res?.data?.user?.verified &&
                  res?.data?.user?.subscriptionId
                ) {
                  dispatch(refreshToken(res?.data?.refreshToken));
                  dispatch(accessToken(res?.data?.token));
                  dispatch(setUserData(res?.data?.user));
                  dispatch(signUpOTPCheck(false));
                  dispatch(userSave(true));
                  setTimeout(() => {
                    navigation.reset({
                      index: 0,
                      routes: [{name: 'Drawer'}],
                    });
                  }, 1000);
                } else if (res?.data?.user?.verified == false) {
                  navigation.navigate('EmailVerification', {
                    email: email?.toLowerCase(),
                    data: res?.data,
                    register: true,
                  });
                } else if (res?.data?.user?.profileCompleted == false) {
                  setTimeout(() => {
                    navigation.reset({
                      index: 0,
                      routes: [{name: routes.successAgency}],
                    });
                  }, 1000);
                  dispatch(refreshToken(res?.data?.refreshToken));
                  dispatch(accessToken(res?.data?.token));
                  dispatch(setUserData(res?.data?.user));
                  dispatch(signUpOTPCheck(false));
                } else if (!res?.data?.user?.subscriptionId) {
                  setTimeout(() => {
                    navigation.reset({
                      index: 0,
                      routes: [{name: 'PaymentPlans'}],
                    });
                  }, 1000);
                  dispatch(signUpOTPCheck(false));
                  dispatch(refreshToken(res?.data?.refreshToken));
                  dispatch(accessToken(res?.data?.token));
                  dispatch(setUserData(res?.data?.user));
                }
              }

              SuccessFlashMessage(res?.message);
              setIsLoading(false);
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
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <IconHeaderComp
          title={'Sign In'}
          onPress={() => isNewUser && navigation.goBack()}
          imgName={isNewUser && iconPath.leftArrow}
          heading={'Sign in to continue to the care link'}
        />
        <View>
          <Apptext style={[styles.createTxt, {fontFamily: 'Poppins-Medium'}]}>
            Enter your Information:{' '}
          </Apptext>
        </View>
        <View style={{marginTop: heightPixel(1)}}>
          <AppTextInput
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
            title={'Email'}
            autoCapitalize={'none'}
          />
          <AppTextInput
            value={isPassword}
            onChangeText={text => setPassword(text)}
            title={'Password'}
            secureTextEntry={isSecure}
            right={isSecure ? appIcons.hide : appIcons.show}
            rightPress={() => setSecure(!isSecure)}
          />
          {/* <NewSimpleTextinput onChangeText={setEmail} value={email} title={"Email"} /> */}
          {/* <NewSimpleTextinput inputStyle={{}} title={"Password"} secureTextEntry={isSecure} rightPress={() => setSecure(!isSecure)} right={isSecure ? appIcons.hide : appIcons.show} /> */}
          <Text
            style={styles.forgetText}
            onPress={() => navigation.navigate(routes.forgetPasswordEmail)}>
            Forgot password?
          </Text>
        </View>
      </KeyboardAwareScrollView>
      <FormButton
        buttonTitle={'Sign In'}
        // onPress={() =>
        //   usertype === 'ServiceSide'
        //     ? navigation.navigate('PaymentPlans')
        //     : navigation.navigate('EmailVerification')
        // }
        // onPress={onPressLogin}
        onPress={handleSubmit}
      />
      <AlreadyText
        onPress={() => navigation.navigate('Register')}
        title={'I don’t have Account'}
        subtitle={' Sign Up'}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: heightPixel(20),
  },
  createTxt: {
    marginTop: heightPixel(10),
    color: DefaultStyles.colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: wp('6%'),
    marginHorizontal: wp('5%'),
  },
  createTxt1: {
    alignSelf: 'center',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  termsTxt: {
    width: wp('90%'),
    marginTop: 41,
    alignSelf: 'center',
  },
  hyperLink: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
    color: '#004cbe',
  },
  termsUse: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  forgetText: {
    marginTop: heightPixel(5),
    textAlign: 'right',
    fontSize: fontPixel(14),
    fontFamily: fonts.Poppins_Medium,
    color: colors.primary,
    paddingRight: widthPixel(20),
  },
});

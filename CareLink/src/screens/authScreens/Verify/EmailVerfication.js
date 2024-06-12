import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Keyboard} from 'react-native';
import DefaultStyles from '../../../config/Styles';
import FormButton from '../../../components/FormButton';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {fontPixel, heightPixel, routes, widthPixel} from '../../../Constants';
import {fonts} from '../../../Constants/Fonts';
import colors from '../../../config/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import EmailVerifiedModal from '../../../components/EmailVerifiedModal/EmailVerifiedModal';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../Constants/Utilities/assets/Snakbar';
import {useDispatch, useSelector} from 'react-redux';
import CountDownComponent from '../../../components/CountDownComponent/CountDownComponent';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../network/Environment';
import {callApi, Method} from '../../../network/NetworkManger';
import Loader from '../../../components/Loader';
import {signUpOTPCheck, userType} from '../../../redux/Slices/splashSlice';
import {useRoute} from '@react-navigation/native';
import {getDeviceId, getFCMToken} from '../../../Services/HelpingMethods';
import {
  accessToken,
  refreshToken,
  setUserData,
} from '../../../redux/Slices/userDataSlice';

const EmailVerification = ({navigation, route}) => {
  const params = useRoute();
  const dispatch = useDispatch();
  const [isOTP, setIsOTP] = useState('8634');
  const [visible, setVisible] = useState(false);
  const usertype = useSelector(state => state?.splash?.userType);
  const emailOnly = useSelector(state => state?.splash?.emailOnly);
  const [isLoading, setIsLoading] = useState(false);
  const [clearOtp, setClearedOtp] = useState(false);
  const userData = useSelector(store => store?.userDataSlice);

  useEffect(() => {
    if (!params?.params?.fromForgotPassword && !params?.params?.register) {
      handleResendOTP();
    }
  }, []);

  const handleSubmit = async () => {
    let fcm = await getFCMToken();
    let dtk = await getDeviceId();
    Keyboard.dismiss();
    if (!isOTP) {
      RedFlashMessage('Please enter OTP');
    } else {
      try {
        setIsLoading(true);
        const endPoint = api.verifyUserEmail;
        const data = {
          email: params?.params?.email?.toLowerCase()
            ? params?.params?.email?.toLowerCase()
            : userData?.userData?.email?.toLowerCase(),
          otp: isOTP,
          device: {id: dtk, deviceToken: fcm},
        };
        await callApi(
          Method.POST,
          endPoint,
          data,
          res => {
            if (res?.status === 200 || res?.status === 201) {
              SuccessFlashMessage(res?.message);
              setIsLoading(false);
              dispatch(signUpOTPCheck(false));
              if (usertype == 'ServiceSide') {
                setIsLoading(false);
                dispatch(userType('ServiceSide'));

                params.params?.register
                  ? console.log('Hit 1')
                  : // navigation.reset({
                    //     index: 1,
                    //     routes: [{name: routes.addDocuments}],
                    //   })
                    console.log('Hit 2');
                navigation.reset({
                  index: 1,
                  routes: [{name: routes.forgetPasswordUpdate}],
                });
              }
              if (usertype == 'AgencySide') {
                setIsLoading(false);
                dispatch(refreshToken(res?.data?.refreshToken));
                dispatch(accessToken(res?.data?.token));
                dispatch(setUserData(res?.data?.user));
                setTimeout(() => {
                  params.params?.register
                    ? navigation.reset({
                        index: 1,
                        routes: [{name: routes.successAgency}],
                      })
                    : navigation.reset({
                        index: 1,
                        routes: [{name: routes.forgetPasswordUpdate}],
                      });
                }, 1000);
              }
            } else {
              setIsLoading(false);
            }
          },
          err => {
            setIsLoading(false);
            RedFlashMessage(err ? err : 'Please enter correct otp');
          },
        );
      } catch (error) {
        setIsLoading(false);
        RedFlashMessage('Your Time is Expired');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleVerifyForgetOTP = async () => {
    let fcm = await getFCMToken();
    Keyboard.dismiss();
    if (isOTP === '') {
      RedFlashMessage('Please enter OTP');
      return;
    } else {
      try {
        setIsLoading(true);
        const data = {
          email: params?.params?.email?.toLowerCase(),
          otp: isOTP,
          device: {id: getDeviceId(), deviceToken: fcm},
        };
        const endPoint = api.verifyForgotPasswordOTP;

        await callApi(
          Method.POST,
          endPoint,
          data,
          res => {
            if (res?.status === 200 || res?.status === 201) {
              SuccessFlashMessage(res?.message);
              setIsLoading(false);
              if (usertype == 'ServiceSide') {
                route.params?.register
                  ? navigation.reset({
                      index: 1,
                      routes: [{name: routes.addDocuments}],
                    })
                  : navigation.navigate(routes.forgetPasswordUpdate, {
                      email: params?.params?.email?.toLowerCase(),
                      otp: isOTP,
                    });
              }
              if (usertype == 'AgencySide') {
                setTimeout(() => {
                  route.params?.register
                    ? navigation.replace(routes.successAgency)
                    : navigation.reset({
                        index: 0,
                        routes: [
                          {
                            name: 'forgetPasswordUpdate',
                            params: {
                              email: params?.params?.email?.toLowerCase(),
                              otp: isOTP,
                            },
                          },
                        ],
                      });
                }, 1000);
              }
            } else {
              setIsLoading(false);
            }
          },
          err => {
            setIsLoading(false);
            RedFlashMessage(err);
          },
        );
      } catch (error) {
        setIsLoading(false);
        setClearedOtp;
        RedFlashMessage('Otp Expired');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const goback = () => {
    setIsOTP('');
    navigation.goBack();
  };

  useEffect(() => {
    if (params?.params?.setTimer) {
      handleResendOTP();
    }
  }, []);

  // resend email verification process
  const handleResendOTP = async () => {
    setIsOTP('');
    try {
      setIsLoading(true);
      const endPoint = api.resendOTP;
      const data = {
        email: params?.params?.email?.toLowerCase()
          ? params?.params?.email?.toLowerCase()
          : userData?.userData?.email?.toLowerCase(),
      };

      await callApi(
        Method.POST,
        endPoint,
        data,
        res => {
          if (res?.status === 200 || res?.status === 201) {
            setIsLoading(false);
            SuccessFlashMessage(res?.message);
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
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{}}>
        <IconHeaderComp
          title={'Verify'}
          heading={'Enter the code we just sent to your email'}
          style={styles.headerTextStyle}
          onPress={() => {
            goback();
          }}
          imgName={iconPath.leftArrow}
        />
        <Text numberOfLines={1} style={styles.mailText}>
          {params?.params?.email?.toLowerCase()
            ? params?.params?.email?.toLowerCase()
            : userData?.userData?.email?.toLowerCase()
            ? userData?.userData?.email?.toLowerCase()
            : emailOnly}
        </Text>
        <OTPInputView
          pinCount={4}
          autoFocusOnLoad={false}
          style={styles.OTPView}
          onCodeChanged={setIsOTP}
          selectionColor={colors.primary}
          codeInputFieldStyle={styles.underlineStyleBase}
          keyboardType="number-pad"
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
        />
        <CountDownComponent
          email={
            params?.params?.email?.toLowerCase()
              ? params?.params?.email?.toLowerCase()
              : userData?.userData?.email?.toLowerCase()
          }
          setIsOTP={setIsOTP}
          isOTP={isOTP}
          fromForgotPassword={params?.params?.fromForgotPassword}
        />
      </KeyboardAwareScrollView>
      <FormButton
        onPress={
          params?.params?.fromForgotPassword
            ? handleVerifyForgetOTP
            : handleSubmit
        }
        buttonTitle={'Continue'}
      />
      <EmailVerifiedModal
        visible={visible}
        subtitle={'You have successfully verified your email'}
        title={'Email verified'}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default EmailVerification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    paddingBottom: heightPixel(20),
  },
  headerTextStyle: {
    fontSize: fontPixel(20),
    fontFamily: fonts.Poppins_Medium,
  },
  mailText: {
    fontSize: fontPixel(20),
    fontFamily: fonts.Poppins_Medium,
    color: colors.black12,
    marginTop: heightPixel(10),
    paddingHorizontal: widthPixel(20),
  },
  OTPView: {
    alignSelf: 'center',
    width: '72%',
    height: heightPixel(120),
  },
  underlineStyleBase: {
    color: colors.black,
    width: widthPixel(58),
    height: heightPixel(44),
    borderWidth: 1,
    borderRadius: widthPixel(15),
    borderColor: colors.black12,
  },
  underlineStyleHighLighted: {
    borderWidth: 2,
  },
  resendText: {
    textAlign: 'center',
    marginTop: heightPixel(50),
    fontSize: fontPixel(16),
    fontFamily: fonts.Poppins_Medium,
    color: colors.black12,
  },
});

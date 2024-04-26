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
import {store} from '../../../redux/store';
import Loader from '../../../components/Loader';
import {signUpOTPCheck, userType} from '../../../redux/Slices/splashSlice';
import {useRoute} from '@react-navigation/native';
import {getDeviceId, getFCMToken} from '../../../Services/HelpingMethods';

const EmailVerification = ({navigation, route}) => {
  const params = useRoute();
  console.log('params', params);
  const dispatch = useDispatch();
  const [isOTP, setIsOTP] = useState('');
  const [visible, setVisible] = useState(false);
  const usertype = useSelector(state => state?.splash?.userType);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDuration] = useState(59);
  const [clearOtp, setClearedOtp] = useState(false);
  const userData = useSelector(store => store?.userDataSlice);

  // console.log('User data', userData);

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
        // console.log('data', data);
        await callApi(
          Method.POST,
          endPoint,
          data,
          res => {
            if (res?.status === 200 || res?.status === 201) {
              SuccessFlashMessage(res?.message);
              setIsLoading(false);
              dispatch(signUpOTPCheck(true));
              if (usertype == 'ServiceSide') {
                dispatch(userType('ServiceSide'));
                // console.log('Inside service side');
                params.params?.register
                  ? navigation.reset({
                      index: 0,
                      routes: [{name: routes.addDocuments}],
                    })
                  : navigation.reset({
                      index: 0,
                      routes: [{name: routes.forgetPasswordUpdate}],
                    });
              }
              if (usertype == 'AgencySide') {
                dispatch(userType('AgencySide'));
                // console.log('Inside agency side');
                params.params?.register
                  ? navigation.reset({
                      index: 0,
                      routes: [{name: routes.successAgency}],
                    })
                  : navigation.reset({
                      index: 0,
                      routes: [{name: routes.forgetPasswordUpdate}],
                    });
              }
            } else {
              setIsLoading(false);
            }
          },
          err => {
            setIsLoading(false);
            // console.log("res => ",)

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
        console.log('data ', data);
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
                      index: 0,
                      routes: [{name: routes.addDocuments}],
                    })
                  : navigation.navigate(routes.forgetPasswordUpdate, {
                      email: params?.params?.email?.toLowerCase(),
                      otp: isOTP,
                    });
              }
              if (usertype == 'AgencySide') {
                route.params?.register
                  ? navigation.reset({
                      index: 0,
                      routes: [{name: routes.successAgency}],
                    })
                  : navigation.navigate(routes.forgetPasswordUpdate, {
                      email: params?.params?.email?.toLowerCase(),
                      otp: isOTP,
                    });
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
        email: userData?.userData?.email?.toLowerCase(),
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
            : userData?.userData?.email?.toLowerCase()}
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

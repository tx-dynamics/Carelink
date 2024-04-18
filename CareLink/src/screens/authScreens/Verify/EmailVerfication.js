import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text} from 'react-native';
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
import {useRoute} from '@react-navigation/native';
import {api} from '../../../network/Environment';
import {Method, callApi} from '../../../network/NetworkManger';
import {getDeviceId} from 'react-native-device-info';
import {getFCMToken} from '../../../Services/HelpingMethods';
import Loader from '../../../components/Loader';
import {signUpOTPCheck} from '../../../redux/Slices/splashSlice';

const EmailVerification = ({navigation, route}) => {
  const params = useRoute();
  const dispatch = useDispatch();
  const [isOTP, setIsOTP] = useState('');
  const [visible, setVisible] = useState(false);
  const usertype = useSelector(state => state?.splash?.userType);
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector(store => store?.userDataSlice);
  console.log('User data', userData);

  const handleSubmit = async () => {
    let fcm = await getFCMToken();
    Keyboard.dismiss();
    if (!isOTP) {
      RedFlashMessage('Please enter OTP');
    } else {
      try {
        setIsLoading(true);
        const endPoint = api.verifySignUpOTP;
        const data = {
          email: params?.params?.email?.toLowerCase()
            ? params?.params?.email?.toLowerCase()
            : userData?.userData?.email?.toLowerCase(),
          otp: isOTP,
          device: {id: getDeviceId(), deviceToken: fcm},
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
                console.log('Inside service side');
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
                console.log('Inside agency side');
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
            RedFlashMessage(err);
          },
        );
      } catch (error) {
        setIsLoading(false);
        RedFlashMessage();
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleVerifyForgetOTP = async () => {
    let fcm = await getFCMToken();
    Keyboard.dismiss();
    if (!isOTP) {
      RedFlashMessage('Please enter OTP');
    } else {
      try {
        setIsLoading(true);
        const endPoint = api.verifyForgotPasswordOTP;
        const data = {
          email: params?.params?.email?.toLowerCase(),
          otp: isOTP,
          device: {id: getDeviceId(), deviceToken: fcm},
        };

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
        RedFlashMessage();
      } finally {
        setIsLoading(false);
      }
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
            navigation.goBack();
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

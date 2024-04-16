import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import {useSelector} from 'react-redux';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../../config/colors';
import {fontPixel, heightPixel, routes, widthPixel} from '../../../Constants';
import {appIcons} from '../../../Constants/Utilities/assets';
import {fonts} from '../../../Constants/Fonts';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../network/Environment';
import {Method, callApi} from '../../../network/NetworkManger';
import {useRoute} from '@react-navigation/native';
import Loader from '../../../components/Loader';
import {getFCMToken} from '../../../Services/HelpingMethods';
import {getDeviceId} from 'react-native-device-info';

const ForgetUpdateScreen = ({navigation}) => {
  const params = useRoute();
  console.log('Params are', params);
  const usertype = useSelector(state => state.splash.userType);
  const [isPassword, setPassword] = useState('');
  const [isPasswordConfirm, setPasswordConfirm] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [isSecureConfirm, setSecureConfirm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassowrd = async () => {
    let fcm = await getFCMToken();
    if (!isPassword) {
      RedFlashMessage('Password is required');
    } else if (!isPasswordConfirm) {
      RedFlashMessage('Confirm Password is required');
    } else if (isPassword !== isPasswordConfirm) {
      RedFlashMessage('Password does not match');
    } else {
      try {
        setIsLoading(true);
        const endPoint = api.forgetResetPassword;
        const data = {
          email: params?.params?.email?.toLowerCase(),
          password: isPassword,
          otp: params?.params?.otp,
          device: {id: getDeviceId(), deviceToken: fcm},
        };

        await callApi(
          Method.PATCH,
          endPoint,
          data,
          res => {
            if (res?.status === 200 || res?.status === 201) {
              setIsLoading(false);
              SuccessFlashMessage(res?.message);
              navigation.reset({
                index: 0,
                routes: [{name: routes.loginScreen}],
              });
            } else {
              setIsLoading(false);
              RedFlashMessage(res?.message);
            }
          },
          err => {
            setIsLoading(false);
            RedFlashMessage(err);
            console.log('2');
          },
        );
      } catch (error) {
        setIsLoading(false);
        RedFlashMessage(error);
        console.log('3');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <IconHeaderComp
          title={'Update Password'}
          onPress={() => navigation.goBack()}
          imgName={iconPath.leftArrow}
          // heading={"Sign in to continue to the care link"}
        />
        <View>
          <Apptext style={[styles.createTxt, {fontFamily: 'Poppins-Medium'}]}>
            Enter new password
          </Apptext>
        </View>
        <View style={{marginTop: heightPixel(15)}}>
          <AppTextInput
            value={isPassword}
            onChangeText={setPassword}
            title={'Password'}
            secureTextEntry={isSecure}
            right={isSecure ? appIcons.hide : appIcons.show}
            rightPress={() => setSecure(!isSecure)}
          />
          <AppTextInput
            value={isPasswordConfirm}
            onChangeText={setPasswordConfirm}
            title={'Confirm Password'}
            secureTextEntry={isSecureConfirm}
            right={isSecureConfirm ? appIcons.hide : appIcons.show}
            rightPress={() => setSecureConfirm(!isSecureConfirm)}
          />
          {/* <NewSimpleTextinput onChangeText={setEmail} value={email} title={"Email"} /> */}
          {/* <NewSimpleTextinput inputStyle={{}} title={"Password"} secureTextEntry={isSecure} rightPress={() => setSecure(!isSecure)} right={isSecure ? appIcons.hide : appIcons.show} /> */}
        </View>
      </KeyboardAwareScrollView>
      <FormButton
        buttonTitle={'Update Password'}
        // onPress={() => usertype === "ServiceSide" ? navigation.navigate("PaymentPlans") : navigation.navigate("EmailVerification")}
        onPress={handleResetPassowrd}
      />
      {/* <AlreadyText onPress={() => navigation.navigate("Register")} title={"I don’t have Account."} subtitle={" Sign Up"} /> */}
      {/* <EmailVerifiedModal visible={isVisible} subtitle={"Password Updated"} title={"Password Updated"} /> */}
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default ForgetUpdateScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: heightPixel(20),
  },
  createTxt: {
    marginTop: heightPixel(0),
    color: DefaultStyles.colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: fontPixel(20),
    marginHorizontal: widthPixel(20),
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
    textAlign: 'right',
    fontSize: fontPixel(14),
    fontFamily: fonts.Poppins_Medium,
    color: colors.primary,
    paddingRight: widthPixel(20),
  },
});

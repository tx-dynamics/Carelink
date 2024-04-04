import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import {useSelector} from 'react-redux';

import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../../config/colors';
import {fontPixel, heightPixel, routes} from '../../../Constants';
import NewSimpleTextinput from '../../../components/NewSimpleTextinput/NewSimpleTextinput';
import {appIcons} from '../../../Constants/Utilities/assets';
import {fonts} from '../../../Constants/Fonts';
import AlreadyText from '../../../components/AlreadyText/AlreadyText';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import {isSignupValid} from '../../../Constants/Utilities/validations';
import AppStatusbar from '../../../components/AppStatusbar/AppStatusbar';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {callApi, Method} from '../../../network/NetworkManger';
import {api} from '../../../network/Environment';
import {getDeviceId, getFCMToken} from '../../../Services/HelpingMethods';
import {
  RedFlashMessage,
  RedSnackbar,
  SuccessFlashMessage,
} from '../../../Constants/Utilities/assets/Snakbar';
import {store} from '../../../redux/store';
import {
  accessToken,
  refreshToken,
  setUserData,
} from '../../../redux/Slices/userDataSlice';

const Register = ({navigation}) => {
  const usertype = useSelector(state => state.splash.userType);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isPasswordConfirm, setPasswordConfirm] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [isSecureConfirm, setSecureConfirm] = useState(true);
  const [deviceId, setDeviceId] = useState('');
  const [fcmToken, setFcmToken] = useState('');

  useEffect(() => {
    getDeviceId().then(res => {
      setDeviceId(res);
    });
    getFCMToken().then(res => {
      setFcmToken(res);
    });
  }, []);

  const onSignUp = async () => {
    try {
      if (
        !isSignupValid(
          firstName,
          lastName,
          email,
          isPassword,
          isPasswordConfirm,
        )
      ) {
        return true;
      }
      const bodyParams = {
        name: firstName + lastName,
        email: email,
        password: isPassword,
        userType: usertype,
        device: {id: deviceId, deviceToken: fcmToken},
      };
      console.log('bodyParams ', bodyParams);
      const onSuccess = result => {
        // console.log('user is signup => ', JSON.stringify(result, ' ', 2));
        store.dispatch(accessToken(result?.data?.token));
        store.dispatch(refreshToken(result?.data?.refreshToken));
        store.dispatch(setUserData(result?.data?.user));
        // console.log('')
        SuccessFlashMessage(result?.message);
        clearForm();
        navigation.navigate('EmailVerification', {register: true});
      };
      const onError = error => {
        if (error) {
          RedFlashMessage(error);
        }
      };
      await callApi(Method.POST, api.signUp, bodyParams, onSuccess, onError);
    } catch (error) {
      console.log('error while hitting sign up api ', error);
    }
  };

  const clearForm=async()=>{
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    setSecureConfirm(true);
    setSecure(true);
    setDeviceId('');
    setFcmToken('');
  };



  return (
    <AppGLobalView style={styles.container}>
      <AppStatusbar />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'never'}>
        <IconHeaderComp
          title={'Sign Up'}
          onPress={() => navigation.goBack()}
          imgName={iconPath.leftArrow}
          heading={
            usertype === 'ServiceSide'
              ? 'Create a free account to see your best match'
              : 'Create a free account to start your agency'
          }
        />
        <View>
          <Apptext style={[styles.createTxt, {fontFamily: 'Poppins-Medium'}]}>
            Enter your Information:{' '}
          </Apptext>
        </View>
        <View style={{marginTop: heightPixel(1)}}>
          <AppTextInput
            value={firstName}
            onChangeText={setFirstName}
            title={'First name'}
          />
          <AppTextInput
            mainViewStyle={styles.marginView}
            value={lastName}
            onChangeText={setLastName}
            title={'Last name'}
          />
          <AppTextInput
            mainViewStyle={styles.marginView}
            value={email}
            onChangeText={setEmail}
            title={'Email'}
          />
          <AppTextInput
            mainViewStyle={styles.marginView}
            value={isPassword}
            onChangeText={setPassword}
            title={'Password'}
            secureTextEntry={isSecure}
            right={isSecure ? appIcons.hide : appIcons.show}
            rightPress={() => setSecure(!isSecure)}
          />
          <AppTextInput
            mainViewStyle={styles.marginView}
            value={isPasswordConfirm}
            onChangeText={setPasswordConfirm}
            title={'Confirm password'}
            secureTextEntry={isSecureConfirm}
            right={isSecureConfirm ? appIcons.hide : appIcons.show}
            rightPress={() => setSecureConfirm(!isSecureConfirm)}
          />
        </View>
        <View style={styles.termsTxt}>
          <Apptext style={styles.createTxt1}>
            By clicking “ Join now,”you agree to our
          </Apptext>
          <View style={styles.termsUse}>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.termsAndCondition)}>
              <Apptext style={styles.hyperLink}>Terms of Use</Apptext>
            </TouchableOpacity>
            <Apptext style={styles.createTxt1}> and </Apptext>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.privacyPlicy)}>
              <Apptext style={styles.hyperLink}>Privacy Policy</Apptext>
            </TouchableOpacity>
            <Apptext style={styles.createTxt1}>.</Apptext>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <FormButton
        buttonTitle={'Join Now'}
        // onPress={() => usertype === "ServiceSide" ? navigation.navigate("PaymentPlans") : navigation.navigate("EmailVerification")}
        onPress={onSignUp}
      />
      <AlreadyText
        title={'Already Have an Account'}
        subtitle={' Sign In'}
        onPress={() => navigation.navigate(routes.loginScreen)}
      />
    </AppGLobalView>
  );
};

export default Register;
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
    marginBottom: heightPixel(20),
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
  marginView: {marginTop: heightPixel(30)},
});

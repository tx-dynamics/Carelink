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
  Keyboard,
  Alert,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import {useDispatch, useSelector} from 'react-redux';

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
import {api} from '../../../network/Environment';
import {Method, callApi} from '../../../network/NetworkManger';
import {
  accessToken,
  refreshToken,
  setUserData,
} from '../../../redux/Slices/userDataSlice';
import {getFCMToken} from '../../../Services/HelpingMethods';
import {getDeviceId} from 'react-native-device-info';
import {useNavigation} from '@react-navigation/native';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../Constants/Utilities/assets/Snakbar';
import Loader from '../../../components/Loader';

const Register = () => {
  const dispatch = useDispatch();
  const usertype = useSelector(state => state.splash.userType);
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isPasswordConfirm, setPasswordConfirm] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [isSecureConfirm, setSecureConfirm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    let fcm = await getFCMToken();
    Keyboard.dismiss();
    if (!firstName) {
      RedFlashMessage('Firstname is required');
    } else if (!isPassword) {
      RedFlashMessage('LastName is required');
    } else if (!email) {
      RedFlashMessage('Email is required');
    } else if (!isPasswordConfirm) {
      RedFlashMessage('Password is required');
    } else if (!isPasswordConfirm) {
      RedFlashMessage('Confirm Password is required');
    } else if (isPassword !== isPasswordConfirm) {
      RedFlashMessage('Password does not match');
    } else {
      try {
        setIsLoading(true);
        const endPoint = api.signUp;
        const data = {
          name: firstName + ' ' + lastName,
          email: email,
          password: isPassword,
          userType: usertype,
          device: {id: getDeviceId(), deviceToken: fcm},
        };

        await callApi(
          Method.POST,
          endPoint,
          data,
          res => {
            if (res?.status === 200 || res?.status === 201) {
              dispatch(refreshToken(res?.data?.refreshToken));
              dispatch(accessToken(res?.data?.token));
              dispatch(setUserData(res?.data?.user));
              setIsLoading(false);
              SuccessFlashMessage(res?.message);
              navigation.navigate('EmailVerification', {
                register: true,
                email: email,
              });
              console.log('Response is', res?.data);
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
        onPress={handleSubmit}
      />
      <AlreadyText
        title={'Already Have an Account'}
        subtitle={' Sign In'}
        onPress={() => navigation.navigate(routes.loginScreen)}
      />
      <Loader isVisible={isLoading} />
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

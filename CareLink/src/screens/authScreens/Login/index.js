import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
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
import {
  fontPixel,
  heightPixel,
  hp,
  routes,
  widthPixel,
} from '../../../Constants';
import NewSimpleTextinput from '../../../components/NewSimpleTextinput/NewSimpleTextinput';
import {appIcons} from '../../../Constants/Utilities/assets';
import {fonts} from '../../../Constants/Fonts';
import AlreadyText from '../../../components/AlreadyText/AlreadyText';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import {userSave} from '../../../redux/Slices/splashSlice';
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
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const usertype = useSelector(state => state.splash.userType);
  const [email, setEmail] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isSecure, setSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const onPressLogin = () => {
    dispatch(userSave(true));
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
              dispatch(refreshToken(res?.data?.refreshToken));
              dispatch(accessToken(res?.data?.token));
              dispatch(setUserData(res?.data?.user));
              // Handling User Type
              if (res?.data?.user?.userType === 'ServiceSide') {
                navigation.reset({
                  index: 0,
                  routes: [{name: routes?.addDocuments}],
                });
              } else {
                navigation.reset({
                  index: 0,
                  routes: [{name: routes.successAgency}],
                });
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
          onPress={() => navigation.goBack()}
          imgName={iconPath.leftArrow}
          heading={'Sign in to continue to the care link'}
        />
        <View>
          <Apptext style={[styles.createTxt, {fontFamily: 'Poppins-Medium'}]}>
            Enter your Information:{' '}
          </Apptext>
        </View>
        <View style={{marginTop: heightPixel(1)}}>
          <AppTextInput value={email} onChangeText={setEmail} title={'Email'} />
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
        title={'I don’t have Account.'}
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

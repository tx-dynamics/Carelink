import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import FormButton from '../../../components/FormButton';
import {useSelector} from 'react-redux';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../../config/colors';
import {fontPixel, heightPixel, hp, widthPixel} from '../../../Constants';
import {fonts} from '../../../Constants/Fonts';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../network/Environment';
import {Method, callApi} from '../../../network/NetworkManger';
import {useNavigation} from '@react-navigation/native';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../Constants/Utilities/assets/Snakbar';
import Loader from '../../../components/Loader';

const ForgetEmailScreen = () => {
  const navigation = useNavigation();
  const usertype = useSelector(state => state.splash.userType);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    Keyboard.dismiss();
    if (!email) {
      RedFlashMessage('Email is required');
    } else {
      try {
        setIsLoading(true);
        const endPoint = api.forgotPassword;
        const data = {
          email: email.toLowerCase(),
        };

        await callApi(
          Method.POST,
          endPoint,
          data,
          res => {
            if (res?.status === 200 || res?.status === 201) {
              console.log('Response is', res?.data);
              SuccessFlashMessage(res?.message);
              navigation.navigate('EmailVerification', {
                fromForgotPassword: true,
                email: email?.toLowerCase(),
              });
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
          title={'Forgot Password'}
          onPress={() => navigation.goBack()}
          imgName={iconPath.leftArrow}
          style={{fontSize: fontPixel(20), fontFamily: fonts.Poppins_Medium}}
          heading={
            'To reset your password, enter the email address you used to sign up'
          }
        />
        <View style={{marginTop: heightPixel(5)}}>
          <AppTextInput value={email} onChangeText={setEmail} title={'Email'} />
          {/* <NewSimpleTextinput onChangeText={setEmail} value={email} title={"Email"} /> */}
        </View>
      </KeyboardAwareScrollView>
      <FormButton
        buttonTitle={'Continue'}
        // onPress={() => usertype === "ServiceSide" ? navigation.navigate("PaymentPlans") : navigation.navigate("EmailVerification")}
        // onPress={() => navigation.navigate('EmailVerification')}
        onPress={handleSubmit}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default ForgetEmailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: heightPixel(20),
  },
  createTxt: {
    marginTop: wp('8%'),
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
    textAlign: 'right',
    fontSize: fontPixel(14),
    fontFamily: fonts.Poppins_Medium,
    color: colors.primary,
    paddingRight: widthPixel(20),
  },
});

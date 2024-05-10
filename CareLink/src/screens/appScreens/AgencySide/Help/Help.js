import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DefaultStyles from '../../../../config/Styles';
import FormButton from '../../../../components/FormButton';
import {useDispatch, useSelector} from 'react-redux';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import {fontPixel, heightPixel} from '../../../../Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../../Constants/Utilities/assets/Snakbar';
import AppTextInput from '../../../../components/AppTextInput/AppTextInput';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../../network/Environment';
import {setUserData} from '../../../../redux/Slices/userDataSlice';
import Loader from '../../../../components/Loader';
import {Method, callApi} from '../../../../network/NetworkManger';

const Help = ({navigation}) => {
  const usertype = useSelector(state => state.splash.userType);
  const [helpName, setHelpName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [problem, setProblem] = useState('');
  const dispatch = useDispatch();

  const uploadHelpCenter = async () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (helpName == '') {
      RedFlashMessage('Name is required');
    } else if (email == '') {
      RedFlashMessage('Email is required');
    } else if (!reg.test(email)) {
      RedFlashMessage('Email is not valid');
    } else if (problem == '') {
      RedFlashMessage('Problem is required');
    } else {
      setIsLoading(true);
      try {
        const endPoint = api.userProfile;
        const bodyParams = {
          helpName: helpName,
          helpEmail: email,
          problem: problem,
        };
        const onSuccess = result => {
          SuccessFlashMessage('Problem submitted successfully');
          dispatch(setUserData(result?.data?.user));
          navigation.goBack();
          setIsLoading(false);
        };

        const onError = error => {
          setIsLoading(false);
          RedFlashMessage(error.message);
        };

        await callApi(Method.PATCH, endPoint, bodyParams, onSuccess, onError);
      } catch (error) {
        setIsLoading(false);
        RedFlashMessage(error);
      }
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <IconHeaderComp
          title={'Help Center'}
          onPress={() => navigation.goBack()}
          imgName={iconPath.leftArrow}
          style={usertype === 'ServiceSide' ? {} : styles.createTxt}
          heading={
            usertype === 'ServiceSide'
              ? 'This is Care Link Help center. Proceed your query with us.'
              : 'This is a help center of CARE LINK .Submit your problems here'
          }
        />
        <AppTextInput title={'Name'} onChangeText={text => setHelpName(text)} />
        <AppTextInput title={'Email'} onChangeText={text => setEmail(text)} />
        <AppTextInput
          multiline
          mainViewStyle={{
            marginBottom: heightPixel(50),
            textAlignVertical: 'top',
          }}
          title={'Your Problem'}
          containerStyle={styles.descriptionStyle}
          onChangeText={text => setProblem(text)}
        />
      </KeyboardAwareScrollView>
      <FormButton
        onPress={uploadHelpCenter}
        buttonTitle={usertype === 'ServiceSide' ? 'Submit ' : 'Submit Now'}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    paddingBottom: heightPixel(20),
  },
  createTxt: {
    marginTop: heightPixel(20),
    color: DefaultStyles.colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: fontPixel(15),
  },
  descriptionStyle: {
    height: null,
    minHeight: heightPixel(90),
    maxHeight: heightPixel(210),
  },
});

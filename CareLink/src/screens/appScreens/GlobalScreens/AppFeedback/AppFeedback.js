import {Keyboard, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../../config/colors';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {fontPixel, heightPixel, widthPixel} from '../../../../Constants';
import {fonts} from '../../../../Constants/Fonts';
import NewAppTextInput from '../../../../components/NewAppTextInput/NewAppTextInput';
import FormButton from '../../../../components/FormButton';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../../network/Environment';
import {callApi, Method} from '../../../../network/NetworkManger';
import Loader from '../../../../components/Loader';

const AppFeedback = ({navigation, route}) => {
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    Keyboard.dismiss();
    if (!feedback) {
      RedFlashMessage('Feedback is required');
    } else {
      try {
        setIsLoading(true);
        const endPoint = api.feedback;
        const data = {
          text: feedback,
        };

        await callApi(
          Method.POST,
          endPoint,
          data,
          res => {
            if (res?.status === 200 || res?.status === 201) {
              console.log('------------------->', res?.data);
              SuccessFlashMessage(res?.message);
              navigation.goBack();
              setIsLoading(false);
            } else {
              setIsLoading(false);
              RedFlashMessage(res?.message);
            }
          },
          err => {
            console.log('Error on response', err);
            setIsLoading(false);
            RedFlashMessage(err);
          },
        );
      } catch (error) {
        setIsLoading(false);
        RedFlashMessage(error);
        console.log('Error on response 2', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <IconHeaderComp
        title={'Feedback'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{}}>
        <Text style={styles.descText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pulvinar bibendum magna Lorem ipsum dolor sit a
        </Text>
        <NewAppTextInput
          multiline
          placeholder={'Your feedback'}
          inputStyle={styles.inputStyle}
          onChangeText={text => setFeedback(text)}
        />
      </KeyboardAwareScrollView>
      <FormButton buttonTitle={'Send'} onPress={handleSubmit} />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default AppFeedback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: heightPixel(20),
  },
  inputStyle: {
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputBackground,
  },
  descText: {
    paddingHorizontal: widthPixel(20),
    marginVertical: heightPixel(20),
    textAlign: 'left',
    fontSize: fontPixel(16),
    fontFamily: fonts.Poppins_Light,
    color: colors.leftDescription,
  },
});

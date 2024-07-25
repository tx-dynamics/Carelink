import {Keyboard, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../../config/colors';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import AppTextInput from '../../../../components/AppTextInput/AppTextInput';
import {heightPixel} from '../../../../Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormButton from '../../../../components/FormButton';
import VerificationModal from '../../../../components/VerificationModal/VerificationModal';
import {appIcons} from '../../../../Constants/Utilities/assets';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../../network/Environment';
import {callApi, Method} from '../../../../network/NetworkManger';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../../Constants/Utilities/assets/Snakbar';
import Loader from '../../../../components/Loader';
import {getDeviceId, getFCMToken} from '../../../../Services/HelpingMethods';

const ChangePassword = ({navigation, route}) => {
  const [isVisible, setVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldSecure, setOldSecure] = useState(true);
  const [newSecure, setNewSecure] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmSecure, setConfirmSecure] = useState(true);

  const onPressUpdate = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      navigation.goBack();
    }, 1500);
  };

  const handleSubmit = async () => {
    let fcm = await getFCMToken();
    let dtk = await getDeviceId();
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

    Keyboard.dismiss();
    if (!oldPassword) {
      RedFlashMessage('Old Password is required');
    } else if (!newPassword) {
      RedFlashMessage('New Password is required');
    } else if (newPassword.length < 8) {
      RedFlashMessage('Password must be at least 8 characters');
    } else if (!passwordRegex.test(newPassword)) {
      RedFlashMessage(
        'Password must contain one lowercase, one uppercase, one number and one special character',
      );
    } else if (!confirmPassword) {
      RedFlashMessage('Confirm Password is required');
    } else if (newPassword !== confirmPassword) {
      RedFlashMessage('Password does not match');
    } else {
      try {
        setIsLoading(true);
        const endPoint = api.updatePassword;
        const data = {
          currentPassword: oldPassword,
          password: newPassword,
          device: {id: dtk, deviceToken: fcm},
        };

        await callApi(
          Method.PATCH,
          endPoint,
          data,
          res => {
            if (res?.status === 200 || res?.status === 201) {
              console.log('Password has been changed');
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
        title={'Change Password'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AppTextInput
          secureTextEntry={oldSecure}
          right={oldSecure ? appIcons.hide : appIcons.show}
          rightPress={() => setOldSecure(!oldSecure)}
          title={'Old password'}
          mainViewStyle={{marginTop: heightPixel(60)}}
          onChangeText={text => setOldPassword(text)}
        />
        <AppTextInput
          secureTextEntry={newSecure}
          right={newSecure ? appIcons.hide : appIcons.show}
          rightPress={() => setNewSecure(!newSecure)}
          title={'New password'}
          onChangeText={text => setNewPassword(text)}
        />
        <AppTextInput
          secureTextEntry={confirmSecure}
          right={confirmSecure ? appIcons.hide : appIcons.show}
          rightPress={() => setConfirmSecure(!confirmSecure)}
          title={'Confirm New password'}
          onChangeText={text => setConfirmPassword(text)}
        />
      </KeyboardAwareScrollView>
      <FormButton onPress={handleSubmit} buttonTitle={'Update'} />
      <VerificationModal
        visible={isVisible}
        title={'Password Updated'}
        subtitle={'You have successfully update  your password'}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: heightPixel(20),
  },
});

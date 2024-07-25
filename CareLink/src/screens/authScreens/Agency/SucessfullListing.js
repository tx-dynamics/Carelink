import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {appIcons} from '../../../Constants/Utilities/assets';
import {fontPixel, heightPixel, widthPixel} from '../../../Constants';
import FormButton from '../../../components/FormButton';
import {fonts} from '../../../Constants/Fonts';
import colors from '../../../config/colors';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../network/Environment';
import {userSave} from '../../../redux/Slices/splashSlice';
import {callApi, Method} from '../../../network/NetworkManger';
import Loader from '../../../components/Loader';
import {RedFlashMessage} from '../../../Constants/Utilities/assets/Snakbar';
import {useDispatch} from 'react-redux';

const SuccessfullListing = ({navigation, route}) => {
  console.log('Login', route?.params?.location);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const updateProfile = async () => {
    try {
      setIsLoading(true);
      const bodyParams = {user1stListing: true};
      const endPoint = api.userProfile;
      const onSuccess = result => {
        console.log('Resilt is', result);
        setIsLoading(false);
        dispatch(userSave(true));
        // setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeNavigator'}],
        });
        // }, 1000);
      };
      const onError = error => {
        RedFlashMessage('Something Went Wrong!', error.message);
      };
      await callApi(Method.PATCH, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <View style={styles.subView}>
        <Image
          resizeMode="contain"
          source={appIcons.successTick}
          style={styles.imageStyle}
        />
        <Text style={styles.successTitle}>Successfully Listed</Text>
        <Text style={styles.midText}>
          You have listed Successfully your listing of
        </Text>
        <Text style={styles.location}>{route?.params?.location}</Text>
      </View>
      <FormButton buttonTitle={'Go to Home'} onPress={() => updateProfile()} />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default SuccessfullListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: heightPixel(20),
  },
  subView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: widthPixel(93),
    height: widthPixel(93),
  },
  successTitle: {
    fontSize: fontPixel(25),
    fontFamily: fonts.Poppins_Regular,
    color: colors.black,
    marginTop: heightPixel(10),
  },
  midText: {
    fontSize: fontPixel(14),
    fontFamily: fonts.Poppins_Regular,
    color: colors.black,
    marginTop: heightPixel(10),
  },
  location: {
    fontSize: fontPixel(14),
    fontFamily: fonts.Poppins_Medium,
    color: colors.black,
  },
});

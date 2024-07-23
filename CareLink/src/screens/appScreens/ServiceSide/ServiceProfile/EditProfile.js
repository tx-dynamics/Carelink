import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
  Text,
  View,
  Keyboard,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import FormInput from '../../../../components/FormInput';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import {heightPixel, widthPixel} from '../../../../Constants';
import {appIcons} from '../../../../Constants/Utilities/assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppTextInput from '../../../../components/AppTextInput/AppTextInput';
import ImageUploadModal from '../../../../components/ImageUploadModal/ImageUploadModal';
import {
  uploadImageOnS3,
  uploadmageCamState,
  uploadmageState,
} from '../../../../Services/HelpingMethods';
import {SuccessFlashMessage} from '../../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../../network/Environment';
import {callApi, Method} from '../../../../network/NetworkManger';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../../../components/Loader';
import {setUserData} from '../../../../redux/Slices/userDataSlice';
const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(store => store?.userDataSlice);
  const [isVisible, setVisible] = useState(false);
  const [isUpload, setUpload] = useState(false);
  const [img, setImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  //   const onPressSave = () => {
  //     SuccessFlashMessage('Profile has been updated');
  //     navigation.goBack();
  //   };

  const onPressSave = async () => {
    console.log('Image', img);

    setIsLoading(true);
    if (img) {
      Keyboard.dismiss();
      const str = img;
      const imageObj = {
        path: str,
        name: str?.substring(str?.lastIndexOf('/')),
      };
      await uploadImageOnS3(imageObj, res => {
        updateProfile(res);
      });
    } else {
      Keyboard.dismiss();
      await updateProfile();
    }
  };

  const updateProfile = async image => {
    try {
      setIsLoading(true);
      const endPoint = api.userProfile;
      const bodyParams = {
        image: image,
      };
      const onSuccess = result => {
        setIsLoading(false);
        console.log('Rews', result);
        // setUserData({...userData, image: img});
        dispatch(setUserData(result?.data?.user));
        SuccessFlashMessage('Profile has been updated');
        navigation.goBack();
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
      <Header
        headerLabel={'Edit Profile'}
        leftImgName={require('../../../../../assets/headerBack.png')}
        onPressLeft={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.imgView}>
          <Image
            style={styles.imgStl}
            source={
              !isUpload
                ? userData?.userData?.image
                  ? {uri: userData?.userData?.image}
                  : appIcons.dummyPic1
                : {uri: img}
            }
          />
        </View>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={{alignSelf: 'center'}}>
          <Apptext style={styles.upldTxt}>Upload photo</Apptext>
        </TouchableOpacity>
        <AppTextInput
          mainViewStyle={styles.firstNameStyle}
          title={'First name'}
        />
        <AppTextInput
          mainViewStyle={styles.lastNameStyle}
          title={'Last name'}
        />
      </KeyboardAwareScrollView>
      <FormButton onPress={onPressSave} buttonTitle={'Save Update'} />
      <ImageUploadModal
        crossPress={() => setVisible(false)}
        onRequestClose={() => setVisible(false)}
        visible={isVisible}
        cameraPress={() => uploadmageCamState(setImg, setUpload, setVisible)}
        mediaPress={() => uploadmageState(setImg, setUpload, setVisible)}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    paddingBottom: heightPixel(20),
  },
  directionView: {
    flexDirection: 'row',
    marginTop: wp('6%'),
  },
  imgView: {
    width: wp('30%'),
    marginTop: wp('7%'),
    height: wp('30%'),
    alignSelf: 'center',
    borderRadius: 60,
  },
  imgStl: {
    width: widthPixel(118),
    height: widthPixel(118),
    borderRadius: widthPixel(100),
  },
  upldTxt: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: wp('3%'),
    color: '#407fb9',
  },
  jmsTxt: {
    marginTop: wp('4%'),
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
  },
  dcTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    alignSelf: 'center',
  },
  pinkBox: {
    width: 200,
    borderRadius: 10,
    backgroundColor: DefaultStyles.colors.lightPrimary,
    alignSelf: 'center',
    marginTop: wp('3%'),
  },
  mmbrTxt: {
    fontSize: 12,
    alignSelf: 'center',
    marginTop: wp('1%'),
  },
  btn: {
    backgroundColor: DefaultStyles.colors.primary,
    borderRadius: 30,
    width: 103,
    alignSelf: 'center',
    padding: 5,
    marginTop: wp('13%'),
  },
  acntTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    alignSelf: 'center',
    color: DefaultStyles.colors.white,
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: wp('1%'),
    marginHorizontal: wp('5%'),
  },
  rms: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 17,
  },
  dtls: {
    color: DefaultStyles.colors.black,
    textDecorationLine: 'underline',
  },
  firstNameStyle: {
    marginTop: heightPixel(40),
  },
  lastNameStyle: {
    marginTop: heightPixel(40),
    marginBottom: heightPixel(20),
  },
});

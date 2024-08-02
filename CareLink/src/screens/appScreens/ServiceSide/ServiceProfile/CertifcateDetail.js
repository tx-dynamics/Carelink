import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../../config/colors';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import {heightPixel} from '../../../../Constants';
import FormButton from '../../../../components/FormButton';
import {appIcons} from '../../../../Constants/Utilities/assets';
import CertificateComp from '../../../../components/CertificateComp/CertificateComp';
import ImageUploadModal from '../../../../components/ImageUploadModal/ImageUploadModal';
import {
  uploadImageOnS3,
  uploadmageCamState,
  uploadmageState,
} from '../../../../Services/HelpingMethods';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../../network/Environment';
import {callApi, Method} from '../../../../network/NetworkManger';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../../Constants/Utilities/assets/Snakbar';
import {setUserData} from '../../../../redux/Slices/userDataSlice';
import {useDispatch} from 'react-redux';
import Loader from '../../../../components/Loader';

const CertifcateDetail = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [isUpload, setUpload] = useState(false);
  const [img, setImg] = useState('');
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onPressSave = async () => {
    setIsLoading(true);
    if (img) {
      const str = img;
      const imageObj = {
        path: str,
        name: str?.substring(str?.lastIndexOf('/')),
      };
      await uploadImageOnS3(imageObj, res => {
        updateProfile(res);
      });
    } else {
      await updateProfile();
    }
  };

  const updateProfile = async image => {
    try {
      setIsLoading(true);
      const endPoint = api.userProfile;
      const bodyParams2 = {
        drivingAbstract: image,
      };
      const bodyParams = {
        certifcates: image,
      };
      const bodyParams3 = {
        drivingLicense: image,
      };
      const onSuccess = result => {
        setIsLoading(false);
        // setUserData({...userData, image: img});
        dispatch(setUserData(result?.data?.user));
        SuccessFlashMessage('Profile has been updated');
        navigation.goBack();
      };
      const onError = error => {
        RedFlashMessage('Something Went Wrong!', error.message);
      };
      await callApi(
        Method.PATCH,
        endPoint,
        route.params?.item?.id == 1
          ? bodyParams
          : route.params?.item?.id == 2
          ? bodyParams2
          : bodyParams3,
        onSuccess,
        onError,
      );
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <IconHeaderComp
        title={route?.params?.item?.title}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <View>
        <CertificateComp
          imgStyle={{
            height:
              route.params?.item?.id == 1
                ? heightPixel(360)
                : route.params?.item?.id == 2
                ? heightPixel(318)
                : heightPixel(399),
          }}
          pic={!isUpload && route.params?.item?.pic}
          uploadedPic={isUpload && img}
          onPress={() => setVisible(true)}
        />
      </View>
      <FormButton onPress={() => onPressSave()} buttonTitle={'Continue'} />
      <ImageUploadModal
        crossPress={() => setVisible(false)}
        visible={isVisible}
        onRequestClose={() => setVisible(false)}
        cameraPress={() =>
          uploadmageCamState(
            setImg,
            setUpload,
            setVisible,
            route.params?.item?.id == 1
              ? heightPixel(360)
              : route.params?.item?.id == 2
              ? heightPixel(318)
              : heightPixel(399),
          )
        }
        mediaPress={() =>
          uploadmageState(
            setImg,
            setUpload,
            setVisible,
            route.params?.item?.id == 1
              ? heightPixel(360)
              : route.params?.item?.id == 2
              ? heightPixel(318)
              : heightPixel(399),
          )
        }
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default CertifcateDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingBottom: heightPixel(20),
  },
});

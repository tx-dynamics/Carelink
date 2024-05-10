import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../../config/colors';
import {appIcons} from '../../../../Constants/Utilities/assets';
import BrochureUploadComp from '../../../../components/BrochureUploadComp/BrochureUploadComp';
import Header from '../../../../components/Header';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import Loader from '../../../../components/Loader';
import {uploadImageOnS3} from '../../../../Services/HelpingMethods';
import {api} from '../../../../network/Environment';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../../../redux/Slices/userDataSlice';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../../Constants/Utilities/assets/Snakbar';
import {Method, callApi} from '../../../../network/NetworkManger';

const BrochureScreen = ({navigation}) => {
  const [upload, setUpload] = useState(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (upload) {
      const str = upload;
      const imageObj = {
        path: str,
        name: str?.substring(str?.lastIndexOf('/')),
      };
      await uploadImageOnS3(imageObj, res => {
        console.log('Response is', res);
        updateProfile(res);
      });
    } else {
      // await updateProfile();
      console.log('Else condition');
    }
  };

  const updateProfile = async brochure => {
    try {
      const endPoint = api.userProfile;
      const bodyParams = {
        brochure: brochure,
      };
      //   console.log('data ', data);   vbgy7
      const onSuccess = result => {
        console.log('result ', JSON.stringify(result, ' ', 2));
        SuccessFlashMessage(result?.message);
        dispatch(setUserData(result?.data?.user));
        navigation.goBack();
        setIsLoading(false);
      };

      const onError = error => {
        // console.log("afasdfasd ",error)
        setIsLoading(false);
        RedFlashMessage(error.message);
      };

      await callApi(Method.PATCH, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage(error);
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <Header
        headerLabel={'Brochure'}
        leftImgName={appIcons.headerBack}
        onPressLeft={() => navigation.goBack()}
      />
      <BrochureUploadComp
        upload={upload}
        setUpload={setUpload}
        onPress={handleSubmit}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default BrochureScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../config/colors';
import {heightPixel, routes, widthPixel} from '../../../Constants';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import UploadDocumentComp from '../../../components/UploadDocumentComp/UploadDocumentComp';
import DocumentComponent from '../../../components/DocumentComponent/DocumentComponent';
import FormButton from '../../../components/FormButton';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImageUploadModal from '../../../components/ImageUploadModal/ImageUploadModal';
import {RedFlashMessage} from '../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {uploadImageOnS3} from '../../../Services/HelpingMethods';

const AddDocuments = ({navigation}) => {
  const [isIndex, setIndex] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const [isData, setData] = useState([
    {
      id: 0,
      heading: 'Upload Certificate',
      title: 'Certificate',
      subtitle:
        'You have to upload your certificates to continue with verification',
      media: null,
    },
    {
      id: 1,
      heading: 'Driving Abstract',
      title: 'Driving Abstract',
      subtitle:
        'You have to upload your driving abstract to continue with verification',
      media: null,
    },
    {
      id: 2,
      heading: 'Upload Selfie',
      title: 'Upload Selfie',
      subtitle: 'You have to upload your selfie to continue with verification',
      media: null,
    },
    {
      id: 3,
      title: 'Driving License',
      heading: 'Driving License',
      subtitle:
        'You have to upload your driving license to continue with verification',
      media: null,
    },
    {
      id: 4,
      heading: 'Upload Home Photo',
      title: 'Home Photo',
      subtitle:
        'You have to upload your home’s photo to continue with verification',
      media: null,
    },
  ]);

  const mediaValues = isData.map(item => item.media).slice(0, 5);

  console.log(mediaValues);

  const uploadImage = () => {
    setVisible(false);
    ImageCropPicker.openPicker({
      width: widthPixel(374),
      height: heightPixel(200),
      cropping: true,
    })
      .then(image => {
        setData([...isData, (isData[isIndex].media = image.path)]);
      })
      .catch(err => RedFlashMessage(err.message));
  };
  const openCamera = () => {
    setVisible(false);
    ImageCropPicker.openCamera({
      width: widthPixel(374),
      height: heightPixel(200),
      cropping: true,
    })
      .then(image => setData([...isData, (isData[isIndex].media = image.path)]))
      .catch(err => RedFlashMessage(err.message));
  };
  const removeImage = () => {
    setData([...isData, (isData[isIndex].media = null)]);
  };

  const uploadImageData = async () => {
    console.log('data', isData[isIndex]);
    const str = isData[isIndex]?.media;
    const imageObj = {
      path: str,
      name: str?.substring(str?.lastIndexOf('/')),
    };
    await uploadImageOnS3(imageObj, res => {
      console.log('Response is', res);
      setData([...isData, (isData[isIndex].media = res)]);
      setIndex(isIndex + 1);
    });
    if (isIndex == 4) {
      navigation.navigate(routes.addInformation, {
        imagesData: mediaValues,
      });
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <View>
        <IconHeaderComp
          title={'Verification Process'}
          heading={isData[isIndex].heading}
          onPress={() => {
            isIndex > 0 ? setIndex(isIndex - 1) : navigation.goBack();
          }}
          imgName={iconPath.leftArrow}
        />
        {isData[isIndex].media ? (
          <DocumentComponent
            onPress={removeImage}
            pic={isData[isIndex].media}
          />
        ) : (
          <UploadDocumentComp
            title={isData[isIndex].title}
            subTitle={isData[isIndex].subtitle}
            onPress={() => setVisible(true)}
          />
        )}
      </View>
      <FormButton
        //APK // disabled={isData[isIndex].media == null ? true : false}
        backgroundColor={
          isData[isIndex].media == null ? colors.gray : colors.primary
        }
        buttonTitle={'Continue'}
        onPress={async () => await uploadImageData()}
      />
      <ImageUploadModal
        crossPress={() => setVisible(false)}
        cameraPress={openCamera}
        mediaPress={uploadImage}
        visible={isVisible}
      />
    </AppGLobalView>
  );
};

export default AddDocuments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: heightPixel(20),
    justifyContent: 'space-between',
  },
});

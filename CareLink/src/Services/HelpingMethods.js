import ImageCropPicker from 'react-native-image-crop-picker';
import {heightPixel, widthPixel} from '../Constants';
import messaging from '@react-native-firebase/messaging';
import {decode} from 'base64-arraybuffer';
import {S3} from 'aws-sdk';
var fs = require('react-native-fs');
import {store} from '../redux/store';
import {setFcmToken} from '../redux/Slices/userDataSlice';
import {
  ACCESS_KEY_ID,
  BUCKET_NAME,
  BUCKET_REGION,
  SECRET_ACCESS_KEY,
  signatureVersion,
} from './constants';

export const uploadmageMultiPle = (setPicData, picData) => {
  let temp = [...picData];
  temp.pop();
  ImageCropPicker.openPicker({
    width: widthPixel(140),
    height: widthPixel(140),
    cropping: true,
  })
    .then(
      // image => setPicData([...picData, { image: image?.path, add: false }]))
      // image => setPicData([...picData, { image: image?.path, add: false }]))
      image => {
        temp.push({image: image?.path, add: false});
        temp.push({image: '', add: true});
        setPicData(temp);
      },
    )
    .catch(err => console.log(err.message));
};
export const removePic = (index, setPicData, picData) => {
  picData.splice(index, 1);
  setPicData([...picData]);
  console.log(picData.length);
};
export const uploadmageState = (setPic, setUpload, setVisible, height) => {
  ImageCropPicker.openPicker({
    width: widthPixel(414),
    height: height ? height : heightPixel(360),
    cropping: true,
  })
    .then(image => {
      setUpload(true);
      setVisible(false);
      setPic(image?.path);
    })
    .catch(e => console.log(e));
};
export const uploadmageCamState = (setPic, setUpload, setVisible, height) => {
  ImageCropPicker.openCamera({
    width: widthPixel(414),
    height: height ? height : heightPixel(360),
    cropping: true,
  })
    .then(image => {
      setUpload(true);
      setVisible(false);
      setPic(image?.path);
    })
    .catch(e => console.log(e));
};
export const uploadmage = setPic => {
  ImageCropPicker.openPicker({
    width: 600,
    height: 600,
    cropping: true,
  })
    .then(image => {
      setPic(image?.path);
    })
    .catch(e => console.log(e));
};

export const getFCMToken = async () => {
  const fcmtoken = await messaging().getToken();
  //   console.log('Fcm is', fcmToken);
  // const fcmToken = await messaging().getToken();
  if (fcmtoken) {
    store.dispatch(setFcmToken(fcmtoken));
    return fcmtoken;
  } else {
    return null;
  }
};

export const uploadImageOnS3 = async (file, successPath) => {
  const s3bucket = new S3({
    region: BUCKET_REGION,
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    Bucket: BUCKET_NAME,
    signatureVersion: signatureVersion,
  });
  let contentType = 'image/jpeg';
  let contentDeposition = 'inline;filename="' + file.name + '"';
  const base64 = await fs.readFile(file.path, 'base64');
  const arrayBuffer = decode(base64);
  s3bucket.createBucket(async () => {
    const params = {
      Bucket: BUCKET_NAME,
      Key: file.name,
      Body: arrayBuffer,
      ContentDisposition: contentDeposition,
      ContentType: contentType,
    };
    await s3bucket
      .upload(params)
      .promise()
      .then(data => {
        successPath(data.Location);
      })
      .catch(err => {
        console.log('Upload on S3 error', err);
      });
  });
};

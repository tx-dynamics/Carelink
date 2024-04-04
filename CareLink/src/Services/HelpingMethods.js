import ImageCropPicker from 'react-native-image-crop-picker';
import {heightPixel, widthPixel} from '../Constants';
import messaging from '@react-native-firebase/messaging';
import DeviceInfo from 'react-native-device-info';
import { store } from '../redux/store';
import { deviceToken,fcmToken } from '../redux/Slices/userDataSlice';

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
  const fcmToken = await messaging().getToken();
//   console.log('Fcm is', fcmToken);
  if (fcmToken) {
    store.dispatch(fcmToken(fcmToken))
    return fcmToken;
  } else {
    return null;
  }
};

// get device
export const getDeviceId = async () => {
    const deviceToken = DeviceInfo.getDeviceId();
    // console.log("deviceToken ", deviceToken)
    if (deviceToken) {
        store.dispatch(deviceToken(deviceToken))
      return deviceToken;
    } else {
      return null;
    }
  };

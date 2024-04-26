import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';

import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import AddAgencyPhotoComp from '../../../components/AddAgencyPhotoComp/AddAgencyPhotoComp';
import AddAgencyProfilePhoto from '../../../components/AddAgencyProfilePhoto/AddAgencyProfilePhoto';
import {fontPixel, heightPixel} from '../../../Constants';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {RedFlashMessage} from '../../../Constants/Utilities/assets/Snakbar';
import {uploadImageOnS3} from '../../../Services/HelpingMethods';
import Loader from '../../../components/Loader';

const AgencyPhotos = ({navigation, route}) => {
  // console.log("routes", route?.params)
  const [agencyImg, setAgencyImg] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImagesArray = async () => {
    try {
      setIsLoading(true);
      const tempUrl = [];
      const str = agencyImg;
      const agencyObj = {
        path: str,
        name: str?.substring(str?.lastIndexOf('/')),
      };
      const profileStr = profileImg;
      const ProfileObj = {
        path: profileStr,
        name: profileStr?.substring(profileStr?.lastIndexOf('/')),
      };
      const myImageData = [agencyObj, ProfileObj];

      // Create an array of promises using map
      const uploadPromises = myImageData.map(item => {
        return new Promise((resolve, reject) => {
          uploadImageOnS3(item, res => {
            tempUrl.push(res); // Push the result to the tempUrl array
            // console.log('res ', res);
            resolve(res); // Resolve this promise with the result
          });
        });
      });
      // Wait for all promises to resolve using Promise.all
      await Promise.all(uploadPromises);
      setIsLoading(false);
      // Return the tempUrl array after all promises are resolved
      return tempUrl;
    } catch (error) {
      console.error('Error uploading images:', error);
      throw error; // Propagate the error
    }
  };

  const submitProfilePhotos = async () => {
    try {
      if (checkProfileData()) {
        const imagesUrl = await uploadImagesArray();
        setIsLoading(false);
        // AgencyMap   AgencyLocation
        navigation.navigate('AgencyMap', {
          agencyData: route?.params,
          agencyImg: imagesUrl[0],
          profileImg: imagesUrl[1],
        });
      }
    } catch (error) {
      console.log('error while submitting photos to agency location');
    }
  };

  const skipForNow = () => {
    try {
      navigation.navigate('AgencyMap', {
        agencyName: route?.params?.agencyName,
        agencyExperience: route?.params?.experience,
        agencyAbout: route?.params?.about,
        agencyImg: '',
        profileImg: '',
      });
    } catch (error) {}
  };

  // verification function
  const checkProfileData = () => {
    if (agencyImg == null) {
      RedFlashMessage('Upload Agency Cover Photo');
      return false;
    }
    if (profileImg == null) {
      RedFlashMessage('Upload Agency Profile Photo');
      return false;
    }
    return true;
  };
  return (
    <AppGLobalView style={styles.container}>
      <Loader isVisible={isLoading} />
      <View>
        <IconHeaderComp
          title={'Add Photo'}
          onPress={() => {
            navigation.goBack();
          }}
          imgName={iconPath.leftArrow}
          heading={'Add your agency cover and profile photo'}
        />
        <AddAgencyPhotoComp img={agencyImg} setImg={setAgencyImg} />
        <AddAgencyProfilePhoto img={profileImg} setImg={setProfileImg} />
      </View>
      <View>
        <FormButton
          buttonTitle={'Next'}
          onPress={() => submitProfilePhotos()}
        />
        <TouchableOpacity onPress={() => skipForNow()}>
          <Apptext style={styles.skipTxt}>Skip for now</Apptext>
        </TouchableOpacity>
      </View>
    </AppGLobalView>
  );
};

export default AgencyPhotos;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: heightPixel(20),
  },
  createTxt: {
    marginTop: wp('8%'),
    color: DefaultStyles.colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: wp('6%'),
    marginHorizontal: wp('5%'),
  },
  skipTxt: {
    alignSelf: 'center',
    marginTop: heightPixel(5),
    fontSize: fontPixel(18),
    fontFamily: 'Poppins-Regular',
    color: DefaultStyles.colors.primary,
  },
  cover: {
    marginTop: wp('7%'),
    width: wp('100%'),
    height: wp('77%'),
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cvrTxt: {
    marginTop: wp('3%'),
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: DefaultStyles.colors.gray,
  },
  profileView: {
    width: wp('36%'),
    height: wp('36%'),
    marginTop: -65,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c4c4c4',
    borderRadius: 8,
  },
  addTxt: {
    alignSelf: 'center',
    marginTop: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
  },
});

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import FormButton from '../../../components/FormButton';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {heightPixel, routes} from '../../../Constants';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../Constants/Utilities/assets/Snakbar';
import {useDispatch, useSelector} from 'react-redux';
import {fromProfile} from '../../../redux/Slices/appSlice';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

const AgencyBasic = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [agencyName, setAgencyName] = useState('');
  const [isExperience, setExperience] = useState('');
  const [about, setAbout] = useState('');
  const isFromProfile = useSelector(state => state.appSlice.fromProfile);

  const onPressButton = () => {
    if (isFromProfile) {
      navigation.goBack();
      // SuccessFlashMessage("Information Changed")
      dispatch(fromProfile(false));
    } else {
      if (isDetailNull()) {
        // console.log('hello');
        navigation.navigate(routes.agencyPhotos, {
          agencyName: agencyName,
          experience: isExperience,
          about: about,
        });
      }
    }
  };

  const isDetailNull = () => {
    if (agencyName == '') {
      RedFlashMessage('Agency Name is Required');
      return false;
    } else if (agencyName.length < 3) {
      RedFlashMessage('Agency Name Required 3 Characters');
      return false;
    }
    if (isExperience == '') {
      RedFlashMessage('Agency Experience is Required');
      return false;
    } else if (isExperience.length < 7) {
      RedFlashMessage('Agency Experience Required minimum 7 Characters');
      return false;
    }
    if (about == '') {
      RedFlashMessage('Agency About is Required');
      return false;
    } else if (about.length < 20) {
      RedFlashMessage('Agency about Required minimum 20 Characters');
      return false;
    }
    return true;
  };

  return (
    <AppGLobalView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <IconHeaderComp
          title={isFromProfile ? 'About' : 'Enter Information'}
          onPress={() => {
            navigation.goBack();
          }}
          imgName={iconPath.leftArrow}
          heading={
            isFromProfile ? 'About Us' : 'Enter your agency name and about'
          }
        />
        <AppTextInput
          value={agencyName}
          title={'Agency name'}
          onChangeText={setAgencyName}
          mainViewStyle={styles.agencyStyle}
        />
        <AppTextInput
          value={isExperience}
          title={'Experience'}
          onChangeText={setExperience}
        />
        <AppTextInput
          multiline
          value={about}
          title={'About'}
          onChangeText={setAbout}
          containerStyle={styles.aboutHeight}
          mainViewStyle={styles.aboutMainStyle}
        />
      </KeyboardAwareScrollView>
      <FormButton
        buttonTitle={isFromProfile ? 'Change' : 'Next'}
        onPress={onPressButton}
      />
    </AppGLobalView>
  );
};

export default AgencyBasic;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    paddingBottom: heightPixel(20),
  },
  createTxt: {
    marginTop: wp('8%'),
    color: DefaultStyles.colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: wp('6%'),
    marginHorizontal: wp('5%'),
  },
  createTxt1: {
    alignSelf: 'center',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
  },
  termsTxt: {
    width: wp('90%'),
    marginTop: 41,
    alignSelf: 'center',
  },
  hyperLink: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
    color: '#004cbe',
  },
  agencyStyle: {
    marginTop: heightPixel(40),
  },
  aboutMainStyle: {
    marginBottom: heightPixel(20),
  },
  aboutHeight: {
    height: null,
    maxHeight: heightPixel(300),
    minHeight: heightPixel(80),
  },
});

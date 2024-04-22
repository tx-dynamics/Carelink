import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import {useSelector} from 'react-redux';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {heightPixel} from '../../../Constants';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import {RedFlashMessage} from '../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

const AgencyLocation = ({navigation, route}) => {
  console.log('agency location ', JSON.stringify(route?.params));
  const usertype = useSelector(state => state.splash.userType);
  const [street, setStreet] = useState('qwr');
  const [apartment, setApartment] = useState('qwe');
  const [zipCode, setZipCode] = useState('212');
  const [isState, setState] = useState('a');
  const onNextPress = () => {
    //APK  // if (street == "" || apartment == "" || zipCode == "" || isState == "") {
    // RedFlashMessage("Details required")
    //     return
    // }
    if (!street || !apartment || !zipCode || !isState) {
      RedFlashMessage('All fields are required');
      return;
    } else {
      navigation.navigate('AgencyMap', {
        data: route?.params,
        street: street,
        apartment: apartment,
        zipCode: zipCode,
        isState: isState,
      });
    }
  };
  return (
    <AppGLobalView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{}}>
        <IconHeaderComp
          title={'Location'}
          onPress={() => navigation.goBack()}
          imgName={iconPath.leftArrow}
          heading={
            usertype === 'ServiceSide'
              ? 'Your location where your listed rooms located?'
              : 'Your location where your agency located?'
          }
        />
        <View>
          <Apptext style={[styles.createTxt, {fontFamily: 'Poppins-Medium'}]}>
            Enter your location:
          </Apptext>
        </View>
        <View style={{marginBottom: heightPixel(50)}}>
          <AppTextInput
            value={street}
            onChangeText={setStreet}
            title={'Street Address'}
          />
          <AppTextInput
            value={apartment}
            onChangeText={setApartment}
            title={'Aparment Number'}
          />
          <AppTextInput
            value={zipCode}
            onChangeText={setZipCode}
            title={'Zip Code'}
            keyboardType="numeric"
            maxLength={6}
          />
          <AppTextInput
            value={isState}
            onChangeText={setState}
            title={'State'}
          />
        </View>
      </KeyboardAwareScrollView>
      <FormButton buttonTitle={'Next'} onPress={onNextPress} />
    </AppGLobalView>
  );
};

export default AgencyLocation;

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
});

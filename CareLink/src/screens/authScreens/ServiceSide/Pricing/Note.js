import React, {useState} from 'react';
import {Keyboard, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Apptext from '../../../../components/Apptext';
import DefaultStyles from '../../../../config/Styles';
import FormButton from '../../../../components/FormButton';
import FormInput from '../../../../components/FormInput';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import NewAppTextInput from '../../../../components/NewAppTextInput/NewAppTextInput';
import colors from '../../../../config/colors';
import {heightPixel} from '../../../../Constants';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useRoute} from '@react-navigation/native';
import {RedFlashMessage} from '../../../../Constants/Utilities/assets/Snakbar';

const Note = ({navigation}) => {
  const params = useRoute();
  // console.log('params ', JSON.stringify(params, ' ', 2));
  const [note, setNote] = useState('');

  // handling note from provider
  const addNoteInData = buttonAction => {
    //AgencyLocation
    Keyboard.dismiss();
    try {
      if (buttonAction === 'Skip') {
        navigation.navigate('AgencyMap', {
          data: params?.params,
          fromSkip: true,
        });
      } else {
        if (note.length == '') {
          RedFlashMessage('Note Required');
        } else {
          navigation.navigate('AgencyMap', {
            data: params?.params,
            note: note,
            fromSkip: false,
          });
        }
      }
    } catch (error) {
      console.log(
        'error while data adding in routed data in Notes folder Pricing',
      );
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        showsVerticalScrollIndicator={false}
        style={{}}>
        <IconHeaderComp
          title={'Write Note'}
          onPress={() => navigation.goBack()}
          imgName={iconPath.leftArrow}
          heading={'Write your note if you want any?'}
        />
        <Apptext style={styles.bkTxt}>Click to write:</Apptext>
        <NewAppTextInput
          multiline
          value={note}
          inputStyle={{marginBottom: heightPixel(30)}}
          onChangeText={text => setNote(text)}
        />
      </KeyboardAwareScrollView>
      <FormButton
        backgroundColor={colors.skipButtonColor}
        buttonTitle={'Skip'}
        color={colors.black}
        onPress={() => addNoteInData('Skip')}
      />
      <FormButton buttonTitle={'Next'} onPress={() => addNoteInData('Next')} />
    </AppGLobalView>
  );
};

export default Note;

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
  bkTxt: {
    fontSize: 23,
    fontFamily: 'Poppins-Medium',
    marginHorizontal: wp('5%'),
    marginTop: heightPixel(10),
  },
  hyperLink: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textDecorationLine: 'underline',
    color: '#004cbe',
  },
  priceTxt: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: wp('6%'),
    marginTop: wp('10%'),
  },
});

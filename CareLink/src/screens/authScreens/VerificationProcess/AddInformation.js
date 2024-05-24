import {Keyboard, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../config/colors';
import {heightPixel, routes, widthPixel} from '../../../Constants';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import LeftBoldTitle from '../../../components/LeftBoldTitle/LeftBoldTitle';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';
import AppDropDownPicker from '../../../components/AppDropDownPicker/AppDropDownPicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormButton from '../../../components/FormButton';
import VerificationModal from '../../../components/VerificationModal/VerificationModal';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {useRoute} from '@react-navigation/native';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../Constants/Utilities/assets/Snakbar';
import {Method, callApi} from '../../../network/NetworkManger';
import {api} from '../../../network/Environment';
import Loader from '../../../components/Loader';
import {useDispatch} from 'react-redux';
import {setUserData} from '../../../redux/Slices/userDataSlice';

const AddInformation = ({navigation}) => {
  const params = useRoute();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [age, setAge] = useState('');
  const [exp, setExp] = useState('');
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([
    {
      id: 0,
      label: 'Single',
      value: 'Single',
    },
    {
      id: 1,
      label: 'Married',
      value: 'Married',
    },
    {
      id: 2,
      label: 'Divorced',
      value: 'Divorced',
    },
  ]);

  const handleSubmit = async () => {
    Keyboard.dismiss();
    if (!age) {
      RedFlashMessage('Age is required');
    } else if (!value) {
      RedFlashMessage('Matial Status is required');
    } else {
      try {
        setIsLoading(true);
        const endPoint = api.userProfile;
        const data = {
          certificates: params?.params?.imagesData[0],
          drivingAbstract: params?.params?.imagesData[1],
          selfie: params?.params?.imagesData[2],
          drivingLicense: params?.params?.imagesData[3],
          homePhoto: params?.params?.imagesData[4],
          age: age,
          maritalStatus: value,
          experience: exp || '',
          profileCompleted: true,
        };

        await callApi(
          Method.PATCH,
          endPoint,
          data,
          res => {
            if (res?.status === 200 || res?.status === 201) {
              setIsLoading(false);
              dispatch(setUserData(res?.data?.user));
              SuccessFlashMessage(res?.message);
              navigation.navigate(routes.listingOptions);
            } else {
              setIsLoading(false);
              RedFlashMessage(res?.message);
            }
          },
          err => {
            setIsLoading(false);
            RedFlashMessage(err);
          },
        );
      } catch (error) {
        setIsLoading(false);
        RedFlashMessage(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <IconHeaderComp
          title={'Verification Process'}
          onPress={() => {
            navigation.goBack();
          }}
          imgName={iconPath.leftArrow}
        />
        <LeftBoldTitle title={'Enter your Information'} />
        <View>
          <AppTextInput
            title={'Your Age'}
            value={age}
            onChangeText={setAge}
            keyboardType="number-pad"
            maxLength={3}
          />
        </View>
        <View style={styles.marginView}>
          <AppDropDownPicker
            title={'Marital Status'}
            open={open}
            setOpen={setOpen}
            items={items}
            setItems={setItems}
            value={value}
            setValue={setValue}
            mainStyle={styles.dropDownStyle}
            onChangeValue={v => setValue(v)}
          />
        </View>
        <View style={styles.marginVertical}>
          <AppTextInput
            value={exp}
            onChangeText={setExp}
            title={'Experience (Optional)'}
            keyboardType="number-pad"
          />
        </View>
      </KeyboardAwareScrollView>
      <FormButton
        buttonTitle={'Complete Verification'}
        onPress={handleSubmit}
      />
      <VerificationModal
        visible={visible}
        title={'Verification Submitted'}
        midText={'Your are successfully submitted your verification'}
        subtitle={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis mauris at at nullam. Risus enim tellus pretium faucibus.'
        }
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default AddInformation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: heightPixel(20),
  },
  marginView: {
    marginTop: heightPixel(25),
  },
  marginVertical: {
    marginTop: heightPixel(25),
    marginBottom: heightPixel(60),
  },
  dropDownStyle: {
    paddingHorizontal: widthPixel(15),
  },
});

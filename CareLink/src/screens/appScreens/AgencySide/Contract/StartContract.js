import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DefaultStyles from '../../../../config/Styles';
import Header from '../../../../components/Header';
import FormButton from '../../../../components/FormButton';
import {appIcons} from '../../../../Constants/Utilities/assets';
import {heightPixel, widthPixel} from '../../../../Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppTextInput from '../../../../components/AppTextInput/AppTextInput';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import AppDropDownPicker from '../../../../components/AppDropDownPicker/AppDropDownPicker';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useSelector} from 'react-redux';

const StartContract = ({navigation, route}) => {
  const userAgency = useSelector(store => store?.agencyInfoSlice);
  console.log('Routes are', route?.params?.serviceUserProfile);
  const [agency, setAgency] = useState(userAgency?.agencyName || '');
  const [provider, setProviderName] = useState(route?.params?.item?.name || '');
  const [open, setOpen] = useState(false);
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [isStart, setStart] = useState(true);
  const [openType, setOpenType] = useState(false);
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {
      id: 0,
      label: 'General',
      value: 'General',
    },
    {
      id: 1,
      label: 'Primary',
      value: 'Primary',
    },
    {
      id: 2,
      label: 'XYZ Contract',
      value: 'XYZ Contract',
    },
  ]);

  console.log('Date start', dateStart);

  const onStartOpen = () => {
    setOpen(true);
    setStart(true);
  };
  const onEndOpen = () => {
    setOpen(true);
    setStart(false);
  };
  return (
    <AppGLobalView style={styles.container}>
      <Header
        headerLabel={'Create Contract'}
        leftImgName={appIcons.headerBack}
        onPressLeft={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AppTextInput
          title={'Agency'}
          value={agency}
          onChangeText={text => setAgency(text)}
        />
        <AppTextInput
          title={'Provider'}
          value={provider ? provider : route?.params?.serviceUserProfile?.name}
          onChangeText={text => setProviderName(text)}
        />
        <AppTextInput
          right={appIcons.datePciker}
          value={moment(dateStart).format('DD-MM-YYYY')}
          editable={false}
          title={'Start Date'}
          onPress={onStartOpen}
        />
        <AppTextInput
          right={appIcons.datePciker}
          value={moment(dateEnd).format('DD-MM-YYYY')}
          editable={false}
          title={'End Date'}
          onPress={onEndOpen}
        />
        <AppDropDownPicker
          mainViewStyle={styles.dropDownStyle}
          mainStyle={styles.dropDownMainStyle}
          title={'Contract Type'}
          open={openType}
          setOpen={setOpenType}
          items={items}
          setItems={setItems}
          value={value}
          setValue={setValue}
          onChangeValue={v => setValue(v)}
        />
      </KeyboardAwareScrollView>
      <FormButton
        buttonTitle={'Continue'}
        // onPress={() => navigation.navigate(routes.roomDetails, { review: true })}
        onPress={() => navigation.navigate('ProposalTerms')}
      />
      <DatePicker
        minimumDate={moment(Date.now())}
        mode="date"
        modal
        open={open}
        date={isStart ? dateStart : dateEnd}
        onConfirm={date => {
          setOpen(false);
          isStart ? setDateStart(date) : setDateEnd(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </AppGLobalView>
  );
};

export default StartContract;
const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    paddingBottom: heightPixel(20),
  },
  dropDownStyle: {
    marginVertical: heightPixel(20),
  },
  dropDownMainStyle: {paddingLeft: widthPixel(20)},
});

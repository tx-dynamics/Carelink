import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import DefaultStyles from '../../../config/Styles';
import FormButton from '../../../components/FormButton';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import AppStatusbar from '../../../components/AppStatusbar/AppStatusbar';
import AddRoomComponent from '../../../components/AddRoomComponent/AddRoomComponent';
import BasicEntitiesComp from '../../../components/BasicEntitiesComp/BasicEntitiesComp';
import colors from '../../../config/colors';
import {heightPixel, widthPixel} from '../../../Constants';
import CalendarComponent from '../../../components/CalendarComponent/CalendarComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import AvailableComponent from '../../../components/AvailableComponent/AvailableComponent';
import AddPhotoComponent, {
  AddButtonComponent,
  PhotoComponent,
} from '../../../components/AddPhotoComponent/AddPhotoComponent';
import {removePic, uploadmageMultiPle} from '../../../Services/HelpingMethods';
import AppDropDownPicker from '../../../components/AppDropDownPicker/AppDropDownPicker';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

const ListingOptions = ({navigation}) => {
  const [basicData, setBasicData] = useState([
    {
      id: 1,
      name: 'Car Parking',
      selected: false,
    },
    {
      id: 2,
      name: 'Terrace',
      selected: false,
    },
    {
      id: 3,
      name: 'Wheelchair',
      selected: false,
    },
  ]);
  const [picData, setPicData] = useState([{image: '', add: true}]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: 0,
      label: 'Basement',
      value: 'Basement',
    },
    {
      id: 1,
      label: 'Ground Floor',
      value: 'Ground Floor',
    },
    {
      id: 2,
      label: 'First Floor',
      value: 'First Floor',
    },
    {
      id: 3,
      label: 'Second Floor',
      value: 'Second Floor',
    },
  ]);
  const minDate = new Date();
  const maxDate = new Date(2025, 6, 3);

  console.log('Select space', basicData);

  const onDateChange = (date, type) => {
    if (type == 'START_DATE') {
      setEndDate(null);
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };
  return (
    <AppGLobalView style={styles.container}>
      <AppStatusbar />
      <IconHeaderComp
        title={'Add Listing'}
        onPress={() => navigation.goBack()}
        imgName={iconPath.leftArrow}
        heading={'Add Listing Information'}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AddRoomComponent />
        <AppDropDownPicker
          title={'Select Space'}
          open={open}
          setOpen={setOpen}
          items={items}
          setItems={setItems}
          value={value}
          setValue={setValue}
          onChangeValue={v => setValue(v)}
        />
        <BasicEntitiesComp basicData={basicData} setBasicData={setBasicData} />
        <CalendarComponent
          maxDate={maxDate}
          minDate={minDate}
          onDateChange={onDateChange}
        />
        <AvailableComponent
          monthStart={`${
            startDate !== null
              ? 'From ' + moment(startDate).format('MMMM')
              : 'Select date'
          }`}
          dateStart={`${
            startDate !== null ? moment(startDate).format('DD') : ''
          }`}
          dateEnd={`${
            endDate !== null ? 'to ' + moment(endDate).format('DD') : ''
          }`}
          montEnd={
            endDate !== null
              ? ` ${endDate !== null ? moment(endDate).format('MMMM') : ''}`
              : ''
          }
        />
        <AddPhotoComponent />
        <View style={styles.flatlistStyle}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            numColumns={3}
            data={picData}
            renderItem={({item, index}) =>
              item.add ? (
                <AddButtonComponent
                  onPress={() => uploadmageMultiPle(setPicData, picData)}
                />
              ) : (
                <PhotoComponent
                  pic={item.image}
                  crossPress={() => removePic(index, setPicData, picData)}
                />
              )
            }
          />
        </View>
        <FormButton
          onPress={() =>
            navigation.navigate('Note', {
              space: value,
              entitles: basicData,
              dateDuration: startDate + ' - ' + endDate,
              picturesData: picData,
            })
          }
          containerStyle={styles.btnStyle}
          buttonTitle={'Next'}
        />
      </KeyboardAwareScrollView>
    </AppGLobalView>
  );
};

export default ListingOptions;
const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  customHeaderWrapper: {
    backgroundColor: colors.calendarColor,
    width: '95%',
  },
  flatlistStyle: {
    // alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: widthPixel(20),
  },
  btnStyle: {
    marginVertical: heightPixel(40),
  },
});

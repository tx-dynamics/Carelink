import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Keyboard} from 'react-native';
import DefaultStyles from '../../../config/Styles';
import FormButton from '../../../components/FormButton';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import AppStatusbar from '../../../components/AppStatusbar/AppStatusbar';
import AddRoomComponent from '../../../components/AddRoomComponent/AddRoomComponent';
import BasicEntitiesComp from '../../../components/BasicEntitiesComp/BasicEntitiesComp';
import colors from '../../../config/colors';
import {heightPixel, widthPixel, wp} from '../../../Constants';
import CalendarComponent from '../../../components/CalendarComponent/CalendarComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import AvailableComponent from '../../../components/AvailableComponent/AvailableComponent';
import AddPhotoComponent, {
  AddButtonComponent,
  PhotoComponent,
} from '../../../components/AddPhotoComponent/AddPhotoComponent';
import {
  removePic,
  uploadImageOnS3,
  uploadmageMultiPle,
} from '../../../Services/HelpingMethods';
import AppDropDownPicker from '../../../components/AppDropDownPicker/AppDropDownPicker';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {RedFlashMessage} from '../../../Constants/Utilities/assets/Snakbar';
import AddMoreComp from '../../../components/AddMoreComp/AddMoreComp';
import AddMoreModal from '../../../components/AddMoreModal/AddMoreModal';
import Loader from '../../../components/Loader';

const ListingOptions = ({navigation}) => {
  const [basicData, setBasicData] = useState([
    {
      id: 0,
      name: 'Car Parking',
      selected: false,
    },
    {
      id: 1,
      name: 'Terrace',
      selected: false,
    },
    {
      id: 2,
      name: 'Wheelchair',
      selected: false,
    },
  ]);
  // const [picData, setPicData] = useState([]);
  const [picData, setPicData] = useState([{image: '', add: true}]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [value, setValue] = useState('');
  const [roomValue, setRoomValue] = useState('');
  const [open, setOpen] = useState(false);
  const [openRoom, setOpenRoom] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [add, setAdd] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
  const [room, setRoom] = useState([
    {
      id: 0,
      label: 'Room 1',
      value: 'Room1',
    },
    {
      id: 1,
      label: 'Room 2',
      value: 'Room2',
    },
    {
      id: 2,
      label: 'Room 3',
      value: 'Room3',
    },
  ]);
  const minDate = new Date();
  const maxDate = new Date(2025, 6, 3);

  // console.log('Select space', basicData);

  const onDateChange = (date, type) => {
    if (type == 'START_DATE') {
      setEndDate(null);
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  // add more rooms
  const addMorePress = () => {
    Keyboard.dismiss();
    let data = {
      id: room?.length,
      label: add,
      value: add + room?.length,
    };
    setRoom([...room, data]);
    setVisible(false);
    setAdd('');
  };

  // uploading media and navigation on next screen
  const ListingImages = async () => {
    // console.log("picDataimages lenthg", picData.length)
    try {
      if (checkListingInfo()) {
        const basicDataList = [];

        for (let value of basicData) {
          if (value.selected) {
            basicDataList.push(value);
          }
        }
        if (picData[0]?.image) {
          if (picData.length > 1 && picData.length <= 8) {
            // upload images on S3 then navigate
            const listedImagesUrl = await uploadSelectedImages();
            console.log('listedImagesUrl ', listedImagesUrl);
            if (listedImagesUrl?.length > 0) {
              navigation.navigate('Note', {
                rooms: roomValue,
                space: value,
                entitles: basicDataList,
                dateDuration: startDate + ' - ' + endDate,
                picturesData: listedImagesUrl,
              });
            }
          } else {
            RedFlashMessage('You Can Select Only 7 Images');
          }
        } else {
          navigation.navigate('Note', {
            rooms: roomValue,
            space: value,
            entitles: basicDataList,
            dateDuration: startDate + ' - ' + endDate,
            picturesData: picData,
          });
        }
      }
    } catch (error) {
      console.log(
        'Error in listing images file in ListingOptions Service Side File',
      );
    }
  };

  const uploadSelectedImages = async () => {
    try {
      setIsLoading(true);
      const tempUrl = [];
      const myImageData = [];
      for (let imageData of picData) {
        if (imageData.image !== '') {
          myImageData.push({
            path: imageData?.image,
            name: imageData?.image?.substring(
              imageData?.image?.lastIndexOf('/'),
            ),
          });
        }
      }

      // Create an array of promises using map
      const uploadPromises = myImageData.map(item => {
        return new Promise((resolve, reject) => {
          // console.log("item ", item)
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
      console.log(
        'Error while uploading images in listing screen on Service Side',
      );
    }
  };

  // checking Listing Information
  const checkListingInfo = () => {
    if (roomValue === '') {
      RedFlashMessage('Select Room For Listing');
      return false;
    }
    if (value === '') {
      RedFlashMessage('Select Room Floor');
      return false;
    }
    if (startDate === null) {
      RedFlashMessage('Start Date Required');
      return false;
    }
    if (endDate === null) {
      RedFlashMessage('End Date Required');
      return false;
    }
    return true;
  };

  return (
    <AppGLobalView style={styles.container}>
      <AppStatusbar />
      <Loader isVisible={isLoading} />
      <IconHeaderComp
        title={'Add Listing'}
        onPress={() => navigation.goBack()}
        imgName={iconPath.leftArrow}
        heading={'Add Listing Information'}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {/* <AddRoomComponent /> */}

        <AppDropDownPicker
          title={'Select Room'}
          open={openRoom}
          setOpen={setOpenRoom}
          items={room}
          setItems={setRoom}
          value={roomValue}
          setValue={setRoomValue}
          mainViewStyle={{marginBottom: wp(3)}}
          onChangeValue={v => setRoomValue(v)}
        />
        <View style={{width: wp(90), alignSelf: 'center'}}>
          <AddMoreComp
            onPress={() => {
              setVisible(true);
            }}
          />
        </View>
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
          onPress={
            () => ListingImages()
            // navigation.navigate('Note', {
            //   space: value,
            //   entitles: basicData,
            //   dateDuration: startDate + ' - ' + endDate,
            //   picturesData: picData,
            // })
          }
          containerStyle={styles.btnStyle}
          buttonTitle={'Next'}
        />

        <AddMoreModal
          onRequestClose={() => setVisible(false)}
          title={'Add Room'}
          visible={isVisible}
          cancelPress={() => setVisible(false)}
          value={add}
          onChangeText={setAdd}
          continuePress={addMorePress}
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

import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import colors from '../../../config/colors';
import AppStatusbar from '../../../components/AppStatusbar/AppStatusbar';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {heightPixel, routes} from '../../../Constants';
import ServiceProviderInfo from '../../../components/ServiceProviderInfo/ServiceProviderInfo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormButton from '../../../components/FormButton';
import SuccessfullListedModal from '../../../components/SuccessfullListedModal/SuccessfullListedModal';
import {useDispatch} from 'react-redux';
import {userSave} from '../../../redux/Slices/splashSlice';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import {api} from '../../../network/Environment';
import Loader from '../../../components/Loader';
import {Method, callApi} from '../../../network/NetworkManger';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../Constants/Utilities/assets/Snakbar';
import {uploadImageOnS3} from '../../../Services/HelpingMethods';

const ListingSummary = ({navigation}) => {
  const {ProviderData, myLocationData} = useRoute()?.params;
  console.log(
    'Days are',
    JSON.stringify(ProviderData?.data?.dateDuration, ' ', 2),
  );
  // console.log('Days are', JSON.stringify(myLocationData, ' ', 2));
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');

  const dateSeperator = ProviderData?.data?.dateDuration?.split('-');
  console.log('dateSeperator ', dateSeperator);
  const parsedStartDate = moment(
    dateSeperator[0],
    'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ',
  );
  const parsedEndDate = moment(
    dateSeperator[1],
    'ddd MMM DD YYYY HH:mm:ss [GMT]ZZ',
  );
  // Format the parsed date to DD MM YYYY
  const formattedStartDate = parsedStartDate.format('DD MMM YYYY');
  const formattedEndDate = parsedEndDate.format('DD MMM YYYY');

  const daysDifference = parsedEndDate.diff(parsedStartDate, 'days');

  // const imagesData = ProviderData?.data?.picturesData;
  const filterEntitles = ProviderData?.data?.entitles?.filter(
    item => item.selected,
  );

  const entities = filterEntitles.map(item => ({
    name: item?.name,
    selected: item?.selected, // Or you can set it to item.selected if needed
  }));
  // console.log('filterEntitles', filterEntitles);

  const onPressGoTo = () => {
    setVisible(false);
    // dispatch(userSave(true));
    navigation.navigate('HomeNavigator');
  };
  const onPressListNow = () => {
    setVisible(true);
  };

  // const uploadImageData = async () => {
  //   console.log('hello data ');
  //   // setIsLoading(true);
  //   // if (imagesData[0]?.image) {
  //   //   const str = imagesData[0]?.image;
  //   //   const imageObj = {
  //   //     path: str,
  //   //     name: str?.substring(str?.lastIndexOf('/')),
  //   //   };
  //   //   console.log('Image obj', imageObj);
  //   //   await uploadImageOnS3(imageObj, res => {
  //   //     console.log('response is', res);
  //   //   setImage(res);
  //   //   setIsLoading(false);
  //   // handleSubmit(res);
  //   //   });
  //   // } else {
  //   // }
  // };

  const handleSubmit = async () => {
    try {
      // Convert formatted dates back to moment objects
      const startDateMoment = moment(
        formattedStartDate,
        'DD MMM YYYY',
      )?.valueOf();
      const endDateMoment = moment(formattedEndDate, 'DD MMM YYYY')?.valueOf();

      setIsLoading(true);
      const endPoint = api.createListing;
      const data = {
        rooms: [
          {
            room: ProviderData?.data?.rooms,
            floor: ProviderData?.data?.space,
          },
        ],
        entities: entities,
        availabilityStart: startDateMoment,
        availabilityEnd: endDateMoment,
        photos: ProviderData?.data?.picturesData,
        notes: ProviderData?.note ? ProviderData?.note : '',
        status: 'active',
        location:
          myLocationData?.streetAddress +
          ' ' +
          myLocationData?.apartmentNumber +
          ' ' +
          myLocationData?.zipCode +
          ' ' +
          myLocationData?.stateName,
      };

      await callApi(
        Method.POST,
        endPoint,
        data,
        res => {
          if (res?.status === 200 || res?.status === 201) {
            setIsLoading(false);
            onPressListNow();
            SuccessFlashMessage(res?.message);
          } else {
            setIsLoading(false);
            RedFlashMessage(res?.message);
          }
        },
        err => {
          setIsLoading(false);
          console.log('Error is', err);
          RedFlashMessage(err);
        },
      );
    } catch (error) {
      setIsLoading(false);
      console.log('2. Error is', err);
      RedFlashMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <AppStatusbar />
      <IconHeaderComp
        title={'Summary'}
        heading={'Listing Summary'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ServiceProviderInfo
          entitlesData={ProviderData?.data?.entitles}
          washRoom={ProviderData?.data?.washrooom}
          days={daysDifference}
          note={ProviderData?.note}
          floor={ProviderData?.data?.space}
          availableOn={formattedStartDate + ' - ' + formattedEndDate}
          images={ProviderData?.data?.picturesData}
          location={
            myLocationData?.streetAddress +
            ' ' +
            myLocationData?.apartmentNumber +
            ', ' +
            myLocationData?.zipCode +
            ', ' +
            myLocationData?.stateName
          }
        />
      </KeyboardAwareScrollView>
      <FormButton buttonTitle={'List Now'} onPress={handleSubmit} />
      <SuccessfullListedModal
        visible={isVisible}
        onPress={onPressGoTo}
        locationTitle={
          myLocationData?.streetAddress + ' ' + myLocationData?.stateName
        }
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default ListingSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: heightPixel(20),
  },
});

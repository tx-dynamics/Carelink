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
  const params = useRoute();
  console.log('Days are', params?.params?.data?.data?.data?.picturesData);
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState('');

  const dateSeperator =
    params?.params?.data?.data?.data?.dateDuration?.split('-');
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

  const imagesData = params?.params?.data?.data?.data?.picturesData;
  const filterEntitles = params?.params?.data?.data?.data?.entitles?.filter(
    item => item.selected,
  );

  const entities = filterEntitles.map(item => ({
    name: item?.name,
    selected: item?.selected, // Or you can set it to item.selected if needed
  }));
  console.log('filterEntitles', filterEntitles);

  const onPressGoTo = () => {
    setVisible(false);
    dispatch(userSave(true));
    navigation.navigate('HomeNavigator');
  };
  const onPressListNow = () => {
    setVisible(true);
  };

  const uploadImageData = async () => {
    setIsLoading(true);
    const str = imagesData[0]?.image;
    const imageObj = {
      path: str,
      name: str?.substring(str?.lastIndexOf('/')),
    };
    console.log('Image obj', imageObj);
    await uploadImageOnS3(imageObj, res => {
      console.log('response is', res);
      //   setImage(res);
      //   setIsLoading(false);
      handleSubmit(res);
    });
  };

  const handleSubmit = async image => {
    try {
      setIsLoading(true);
      const endPoint = api.listing;
      const data = {
        rooms: [
          {
            room: 1,
            floor: params?.params?.data?.data?.data?.space,
          },
        ],
        entities: entities,
        availabilityStart: moment(formattedStartDate).milliseconds(),
        availabilityEnd: moment(formattedEndDate).milliseconds(),
        photos: [image],
        notes: params?.params?.data?.data?.note,
        status: 'active',
        location:
          params?.params?.data?.street +
          ' ' +
          params?.params?.data?.apartment +
          ', ' +
          params?.params?.data?.zipCode +
          ' ' +
          params?.params?.data?.isState,
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
        // heading={'Listing Summary'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <ServiceProviderInfo
          entitlesData={params?.params?.data?.data?.data?.entitles}
          days={daysDifference}
          floor={params?.params?.data?.data?.data?.space}
          availableOn={formattedStartDate + ' - ' + formattedEndDate}
          images={imagesData}
          location={
            params?.params?.data?.street +
            ' ' +
            params?.params?.data?.apartment +
            ', ' +
            params?.params?.data?.zipCode +
            ' ' +
            params?.params?.data?.isState
          }
          note={params?.params?.data?.data?.note}
        />
      </KeyboardAwareScrollView>
      <FormButton buttonTitle={'List Now'} onPress={uploadImageData} />
      <SuccessfullListedModal visible={isVisible} onPress={onPressGoTo} />
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

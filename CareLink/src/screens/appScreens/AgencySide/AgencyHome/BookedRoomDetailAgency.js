import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DefaultStyles from '../../../../config/Styles';
import Header from '../../../../components/Header';
import {appIcons} from '../../../../Constants/Utilities/assets';
import UserInfoComp from '../../../../components/UserInfoComp/UserInfoComp';
import ServiceProviderInfo from '../../../../components/ServiceProviderInfo/ServiceProviderInfo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {heightPixel, routes, widthPixel} from '../../../../Constants';
import {SuccessFlashMessage} from '../../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import moment from 'moment';

const BookedRoomDetailAgency = ({navigation, route}) => {
  const [liked, setLiked] = useState(false);
  console.log('PAramas are', route?.params?.params?.item?.photos);
  const onPressMark = () => {
    SuccessFlashMessage('Room marked completed');
    navigation.navigate('HomeNavigator');
  };

  var Startduration = moment.utc(
    moment
      .duration(route?.params?.params?.item?.availabilityStart)
      .asMilliseconds(),
  );
  var Endduration = moment.utc(
    moment
      .duration(route?.params?.params?.item?.availabilityEnd)
      .asMilliseconds(),
  );
  const availableDate = moment(
    route?.params?.params?.item?.availabilityStart,
  ).format('MMMM DD YYYY');
  const availableDateEnd = moment(
    route?.params?.params?.item?.availabilityEnd,
  ).format('MMMM DD YYYY');

  const daysDifference = Endduration.diff(Startduration, 'days');

  return (
    <AppGLobalView style={styles.container}>
      <Header
        headerLabel={'Booked Room'}
        leftImgName={appIcons.headerBack}
        // onPressRight={onHeartPress}
        // rightImgStyle={styles.rightIconStyle}
        onPressLeft={() => navigation.goBack()}
        // rightImg={liked ? appIcons.heartRed : appIcons.heartBlank}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {!route?.params?.review && (
          <UserInfoComp
            onPress={() => navigation.navigate(routes.clientProfile)}
            pic={route?.params?.params?.item?.user?.image}
            title={route?.params?.params?.item?.user?.name}
          />
        )}
        <ServiceProviderInfo
          images={route?.params?.params?.item?.photos}
          days={daysDifference}
          floor={route?.params?.params?.item?.rooms[0]?.floor}
          availableOn={availableDate + ' - ' + availableDateEnd}
          location={route?.params?.params?.item?.address}
          note={route?.params?.params?.item?.notes}
        />
      </KeyboardAwareScrollView>
      {/* <FormButton buttonTitle={'Mark to Completfe'} onPress={onPressMark} /> */}
    </AppGLobalView>
  );
};

export default BookedRoomDetailAgency;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    paddingBottom: heightPixel(20),
  },
  rightIconStyle: {
    width: widthPixel(30),
    height: widthPixel(30),
  },
});

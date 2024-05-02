import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DefaultStyles from '../../../../config/Styles';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import {appIcons} from '../../../../Constants/Utilities/assets';
import UserInfoComp from '../../../../components/UserInfoComp/UserInfoComp';
import ServiceProviderInfo from '../../../../components/ServiceProviderInfo/ServiceProviderInfo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {heightPixel, routes, widthPixel} from '../../../../Constants';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useFocusEffect, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {callApi, Method} from '../../../../network/NetworkManger';
import {api} from '../../../../network/Environment';
import Loader from '../../../../components/Loader';

const RoomsDetails = ({navigation, route}) => {
  // states
  const [isLoading, setIsLoading] = useState(false);
  const [serviceUserProfile, setServiceUserProfile] = useState(null);

  const {item} = useRoute()?.params;
  // listing id

  const userName = useSelector(state => state?.userDataSlice?.userData?.name);
  const proposalRawData = {
    listingId: item?._id,
    serviceProviderId: item?.user,
    agencyId: useSelector(state => state?.userDataSlice?.userData?._id),
  };

  var Startduration = moment.utc(
    moment.duration(item?.availabilityStart).asMilliseconds(),
  );
  var Endduration = moment.utc(
    moment.duration(item?.availabilityEnd).asMilliseconds(),
  );
  const availableDate = moment(item?.availabilityStart).format('MMMM DD YYYY');
  //   console.log('availableDate ', availableDate);

  const daysDifference = Endduration.diff(Startduration, 'days');

  const [liked, setLiked] = useState(false);

  const onHeartPress = async () => {
    try {
      const endPoint = api.likeList;
      const bodyParams = {
        listing: item?._id,
      };
      const onSuccess = result => {
        console.log('🚀 ~ onSuccess ~ result:', result);
        SuccessFlashMessage(result?.message);
        setLiked(!liked);
      };
      const onError = error => {
        console.log('🚀 ~ onError ~ error:', error);
      };
      await callApi(Method.POST, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      console.log('🚀 ~ onHeartPress ~ error:', error);
      RedFlashMessage('Listing Not Saved');
    }
  };

  // hooks
  useEffect(() => {
    setLiked(item?.liked);
    // Room Details
    // get user profile data when come from agency side.
    if (route?.params?.review !== 'Room Details') {
      getServiceUserData();
    }
  }, []);

  //  service data
  const getServiceUserData = async () => {
    try {
      setIsLoading(true);
      const bodyParams = {};
      const endPoint = `${api.getUserProfile}/${item?.user}`;
      const onSuccess = result => {
        // console.log('🚀 ~ onSuccess ~ result:', JSON.stringify(result, ' ', 3));
        setServiceUserProfile(result?.user);
        setIsLoading(false);
      };
      const onError = error => {
        setIsLoading(false);
        RedFlashMessage('Something Went Wrong', error);
      };
      await callApi(Method.GET, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage('Something Went Wrong!');
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <Loader isVisible={isLoading} />
      <Header
        headerLabel={route?.params?.review ? 'Review Details' : 'Room Details'}
        leftImgName={appIcons.headerBack}
        onPressRight={onHeartPress}
        rightImgStyle={styles.rightIconStyle}
        onPressLeft={() => navigation.goBack()}
        rightImg={liked ? appIcons.heartRed : appIcons.heartBlank}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {!route?.params?.review && (
          <UserInfoComp
            onPress={() =>
              navigation.navigate(routes.clientProfile, {
                serviceUserProfile,
              })
            }
            pic={serviceUserProfile?.image}
            title={userName}
          />
        )}
        <ServiceProviderInfo
          images={item?.photos}
          washRoom={item?.washRoom}
          days={daysDifference}
          floor={item?.rooms[0]?.floor}
          availableOn={availableDate}
          location={item?.location?.address}
          note={item?.notes}
        />
      </KeyboardAwareScrollView>
      <FormButton
        buttonTitle={
          route?.params?.review ? 'Review & Continue' : 'Submit Proposal'
        }
        onPress={() => {
          navigation.navigate(routes.sendProposal, {proposalRawData});
        }}
      />
    </AppGLobalView>
  );
};

export default RoomsDetails;

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

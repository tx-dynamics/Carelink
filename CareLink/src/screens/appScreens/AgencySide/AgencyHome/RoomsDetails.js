import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
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
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {callApi, Method} from '../../../../network/NetworkManger';
import {api} from '../../../../network/Environment';
import Loader from '../../../../components/Loader';
import Apptext from '../../../../components/Apptext';
import colors from '../../../../config/colors';
import DeleteModal from '../../../../components/DeleteModal/DeleteModal';

const RoomsDetails = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [serviceUserProfile, setServiceUserProfile] = useState(null);
  const [liked, setLiked] = useState(false);
  const [visible, setVisible] = useState(false);

  const {item, fromBookedRooms} = useRoute()?.params;
  const proposalRawData = {
    listingId: item?._id,
    serviceProviderId: item?.user?._id,
    agencyId: useSelector(state => state?.userDataSlice?.userData?._id),
  };

  var Startduration = moment?.utc(
    moment?.duration(item?.availabilityStart)?.asMilliseconds(),
  );
  var Endduration = moment.utc(
    moment?.duration(item?.availabilityEnd)?.asMilliseconds(),
  );
  const availableDate = moment(item?.availabilityStart)?.format('MMMM DD YYYY');
  const availableEnd = moment(item?.availabilityEnd)?.format('MMMM DD YYYY');
  const daysDifference = Endduration?.diff(Startduration, 'days');

  useEffect(() => {
    setLiked(item?.liked);
    if (route?.params?.review !== 'Room Details') {
      getServiceUserData();
    }
  }, []);

  const onHeartPress = async () => {
    try {
      const endPoint = item?.liked
        ? `${api?.likeList / item?._id}`
        : api.likeList;
      const bodyParams = item?.liked
        ? null
        : {
            listing: item?._id,
          };

      const onSuccess = result => {
        SuccessFlashMessage(result?.message);
        setLiked(!liked);
      };
      const onError = error => {
        RedFlashMessage(error.message);
      };
      await callApi(
        item?.liked ? Method.DELETE : Method.POST,
        endPoint,
        bodyParams,
        onSuccess,
        onError,
      );
    } catch (error) {
      RedFlashMessage('Listing Not Saved');
    } finally {
      setIsLoading(false);
    }
  };

  const getServiceUserData = async () => {
    const id = item?._id ? item?._id : item?.user?._id;
    try {
      setIsLoading(true);
      const bodyParams = {};
      const endPoint = `${api.getUserProfile}/${id}`;
      const onSuccess = result => {
        setServiceUserProfile(result?.user);
        setIsLoading(false);
      };
      const onError = error => {
        // RedFlashMessage(error);
        setIsLoading(false);
      };
      await callApi(Method.GET, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage('Something Went Wrong!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleActiveOrInactive = async () => {
    try {
      setIsLoading(true);
      const endPoint = `${api?.createListing}/${item?._id}`;
      const data = {
        status: item?.status == 'inactive' ? 'active' : 'inactive',
      };

      await callApi(
        Method.PATCH,
        endPoint,
        data,
        res => {
          if (res?.status === 200 || res?.status === 201) {
            setIsLoading(false);
            SuccessFlashMessage(res?.message);
            navigation.navigate('HomeNavigator');
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
  };

  const onDeleteListing = async () => {
    try {
      const endPoint = `${api?.createListing}/${item?._id}`;
      const bodyParams = {};
      console.log('End point', endPoint);

      const onSuccess = result => {
        SuccessFlashMessage(result?.message);
        setVisible(false);
        navigation.navigate('HomeNavigator');
      };
      const onError = error => {
        RedFlashMessage(error.message);
      };
      await callApi(Method.DELETE, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      RedFlashMessage('Listing Not Saved');
    } finally {
      setIsLoading(false);
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
        {!route?.params?.review && serviceUserProfile && (
          <UserInfoComp
            onPress={() =>
              navigation.navigate(routes.clientProfile, {
                serviceUserProfile,
              })
            }
            pic={serviceUserProfile?.image}
            title={serviceUserProfile?.name}
          />
        )}
        <ServiceProviderInfo
          images={item?.photos}
          washRoom={item?.rooms[0]?.washroom}
          days={daysDifference}
          floor={item?.rooms[0]?.floor}
          availableOn={availableDate + ' - ' + availableEnd}
          location={item?.location?.address}
          note={item?.notes}
        />
      </KeyboardAwareScrollView>
      {(!route?.params?.fromSubmitAcceptProposal ||
        fromBookedRooms ||
        route?.params?.fromAgencyHome) && (
        <FormButton
          buttonTitle={
            route?.params?.review ? 'Review & Continue' : 'Submit Proposal'
          }
          onPress={() => {
            navigation.navigate(
              route?.params?.review
                ? routes?.createContract
                : routes.sendProposal,
              {
                proposalRawData,
                serviceUserProfile,
              },
            );
          }}
        />
      )}
      {route?.params?.fromInactiveStatus && (
        <TouchableOpacity activeOpacity={0.5} onPress={() => setVisible(true)}>
          <Apptext
            style={{
              color: colors.primary,
              textAlign: 'center',
              marginBottom: 10,
            }}>
            Delete Lisitng
          </Apptext>
        </TouchableOpacity>
      )}

      {(route?.params?.fromAvailableRooms ||
        route?.params?.fromInactiveStatus) && (
        <FormButton
          buttonTitle={item?.status !== 'inactive' ? 'Inactive' : 'Active'}
          onPress={() => handleActiveOrInactive()}
        />
      )}
      {route?.params?.fromInactiveStatus && (
        <DeleteModal
          visible={visible}
          cancelPress={() => setVisible(false)}
          deletePress={() => onDeleteListing()}
        />
      )}
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

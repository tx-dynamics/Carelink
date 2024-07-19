import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading';
import {heightPixel, routes} from '../../../../Constants';
import ServiceListingComp from '../../../../components/ServiceListingComp';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../../network/Environment';
import {Method, callApi} from '../../../../network/NetworkManger';
import Loader from '../../../../components/Loader';

const BookedList = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookedData, setBookedData] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const endPoint = `${api.listingStatus}?listingCount=false&status=booked`;
      const bodyParams = {};
      const onSuccess = result => {
        setIsLoading(false);
        setBookedData(result?.data?.data);
      };
      const onError = error => {
        setIsLoading(false);
      };
      await callApi(Method.GET, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <AppGLobalView>
      <IconHeaderComp
        title={'Booked'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <LeftSideBoldHeading title={'Booked'} number={bookedData?.length} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          paddingVertical: heightPixel(10),
        }}
        ListHeaderComponent={() => (
          <View style={{marginTop: heightPixel(1)}}></View>
        )}
        data={bookedData}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <ServiceListingComp
            onPress={() =>
              navigation.navigate('withoutBottomTabnavigator', {
                screen: routes.roomDetails,
                params: {
                  item,
                  fromBookedRooms: true,
                },
              })
            }
            facilityData={item?.entities}
            pic={item?.photos[0]}
            detail={item?.notes}
            showProposals={true}
            labelValue={[item?.availabilityStart, item?.availabilityEnd]}
            name={item?.rooms[0]?.room}
          />
        )}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default BookedList;

const styles = StyleSheet.create({});

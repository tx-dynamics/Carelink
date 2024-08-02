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
import colors from '../../../../config/colors';

const ListedList = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [listedData, setListedData] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const endPoint = `${api.listingStatus}?listingCount=false&status=list`;
      const bodyParams = {};
      const onSuccess = result => {
        setIsLoading(false);
        setListedData(result?.data?.data);
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
        title={'Listed'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <LeftSideBoldHeading title={'Listed'} number={listedData?.length} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          paddingVertical: heightPixel(10),
        }}
        ListHeaderComponent={() => (
          <View style={{marginTop: heightPixel(1)}}></View>
        )}
        data={listedData}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          console.log('Item data', item),
          (
            <ServiceListingComp
              rightTexPress={() =>
                navigation.navigate('withoutBottomTabnavigator', {
                  screen: routes.roomDetails,
                  params: {
                    item,
                  },
                })
              }
              // onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.availableRoom })}
              facilityData={item.entities}
              pic={item.photos[0]}
              detail={item?.notes}
              showProposals={true}
              labelValue={[item?.availabilityStart, item?.availabilityEnd]}
              name={item?.rooms[0]?.room}
              statusStyle={{
                backgroundColor:
                  item?.status == 'active'
                    ? colors.primary
                    : item?.status == 'approved'
                    ? colors.primary
                    : item?.status == 'inactive'
                    ? colors.black
                    : colors.green,
              }}
              statusTab={
                item?.status == 'active'
                  ? 'Available'
                  : item?.status == 'approved'
                  ? 'Booked'
                  : item?.status == 'inactive'
                  ? 'Inactive'
                  : 'Completed'
              }
              // onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "ReceivedProposal" })}
            />
          )
        )}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default ListedList;

const styles = StyleSheet.create({});

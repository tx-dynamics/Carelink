import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading';
import {heightPixel, routes} from '../../../../Constants';
import ServiceListingComp from '../../../../components/ServiceListingComp';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useRoute} from '@react-navigation/native';
import {api} from '../../../../network/Environment';
import {Method, callApi} from '../../../../network/NetworkManger';
import Loader from '../../../../components/Loader';

const InactiveList = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inActiveData, setInActiveData] = useState(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const endPoint = `${api.listingStatus}?listingCount=false&status=inactive`;
      const bodyParams = {};
      const onSuccess = result => {
        setIsLoading(false);
        setInActiveData(result?.data?.data);
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
        title={'Inactive'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <LeftSideBoldHeading title={'Inactive'} number={inActiveData?.length} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          paddingVertical: heightPixel(10),
        }}
        ListHeaderComponent={() => (
          <View style={{marginTop: heightPixel(1)}}></View>
        )}
        data={inActiveData}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <ServiceListingComp
            rightTexPress={() =>
              navigation.navigate('withoutBottomTabnavigator', {
                screen: routes.roomDetails,
                params: {
                  item,
                  fromInactiveStatus: true,
                },
              })
            }
            // onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.availableRoom })}
            facilityData={item.entities}
            pic={item.photos[0]}
            rightTxt={'Edit'}
            detail={item?.notes}
            showProposals={true}
            labelValue={[item?.availabilityStart, item?.availabilityEnd]}
            name={item?.rooms[0]?.room}
            // onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "ReceivedProposal" })}
          />
        )}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default InactiveList;

const styles = StyleSheet.create({});

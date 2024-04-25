import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar';
import {heightPixel, routes} from '../../../../Constants';
import colors from '../../../../config/colors';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import {appIcons} from '../../../../Constants/Utilities/assets';
import Header from '../../../../components/Header';
import {agencyData} from '../AgencyHome/AgencyHome';
import CustomerListingComp from '../../../../components/CustomerListingComp/CustomerListingComp';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useRoute} from '@react-navigation/native';

const CustomerListing = ({navigation, route}) => {
  const {listingDetails} = useRoute()?.params;
  //   console.log('my data ', data11);
  return (
    <AppGLobalView>
      <AppStatusbar />
      <Header
        headerLabel={'Customer Listing'}
        height={heightPixel(80)}
        leftImgName={appIcons.headerBack}
        onPressLeft={() => navigation.goBack()}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listingDetails}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <CustomerListingComp
            title={item?.location?.address}
            durationData={[item?.availabilityStart, item?.availabilityEnd]}
            facilityData={item.entities}
            onPress={() =>
              navigation.navigate('withoutBottomTabnavigator', {
                screen: routes.roomDetails,
                params: {
                  item,
                },
              })
            }
          />
        )}
      />
    </AppGLobalView>
  );
};

export default CustomerListing;

const styles = StyleSheet.create({});

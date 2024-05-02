import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import colors from '../../../../config/colors';
import {iconPath} from '../../../../config/icon';
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading';
import {appIcons} from '../../../../Constants/Utilities/assets';
import {heightPixel, routes} from '../../../../Constants';
import ServiceListingComp from '../../../../components/ServiceListingComp';
import {ListedData} from './AvailableList';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';

const BookedList = ({navigation}) => {
  return (
    <AppGLobalView>
      <IconHeaderComp
        title={'Booked'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <LeftSideBoldHeading title={'Booked'} number={ListedData?.length} />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          paddingVertical: heightPixel(10),
        }}
        ListHeaderComponent={() => (
          <View style={{marginTop: heightPixel(1)}}></View>
        )}
        data={ListedData}
        // keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <ServiceListingComp
            onPress={() =>
              navigation.navigate('withoutBottomTabnavigator', {
                screen: routes.bookedRoom,
              })
            }
            facilityData={item.facility}
            pic={item.pic}
            detail={
              'Lorem ipsum dolor sit amet, c amet, c Lorem ipsum dolor sit amet, c '
            }
            showProposals={true}
            labelValue={'For 20 days'}
            name={'ABC Rental Agency'}
          />
        )}
      />
    </AppGLobalView>
  );
};

export default BookedList;

const styles = StyleSheet.create({});

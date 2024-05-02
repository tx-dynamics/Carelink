import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading';
import {heightPixel, routes} from '../../../../Constants';
import colors from '../../../../config/colors';
import AgencyListingComp from '../../../../components/AgencyListingComp/AgencyListingComp';
import {appIcons} from '../../../../Constants/Utilities/assets';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useRoute} from '@react-navigation/native';

export const BookedDataAgency = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'James Clear',
    location: 'abc Town , Washington, DC',
    pic: appIcons.dummyUser,
    title: 'Riverside Retreat',
    duration: '20',
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
      {
        id: 2,
        title: 'Car parking',
      },
    ],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'James Hype',
    location: 'abc Town , Washington, DC',
    pic: appIcons.dummyPic1,
    title: 'Riverside Retreat',
    duration: '7',
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
      {
        id: 2,
        title: 'Car parking',
      },
    ],
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'James Clear',
    location: 'ABC, New york',
    pic: appIcons.dummyPic2,
    title: 'Riverside Retreat',
    duration: '14',
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
    ],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Brown David',
    location: 'abc Town , Washington, DC',
    pic: appIcons.dummyUser,
    title: 'Riverside Retreat',
    duration: '20',
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
    ],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Jack',
    location: 'abc Town , Washington, DC',
    pic: appIcons.dummyUser,
    title: 'Riverside Retreat',
    duration: '4',
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
    ],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'James Clear',
    location: 'abc Town , Washington, DC',
    pic: appIcons.dummyUser,
    title: 'Riverside Retreat',
    duration: '20',
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
    ],
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'James Clear',
    location: 'abc Town , Washington, DC',
    pic: appIcons.dummyUser,
    title: 'Riverside Retreat',
    duration: '20',
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
    ],
  },
];
const BookedRoomsAgencySide = ({navigation}) => {
  const route = useRoute();
  console.log('Routse are', JSON.stringify(route?.params?.listingDetails));

  return (
    <AppGLobalView>
      <IconHeaderComp
        title={'Rooms'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <LeftSideBoldHeading
        title={'Booked'}
        number={route?.params?.listingDetails?.length}
      />
      <FlatList
        ListFooterComponent={() => (
          <View style={{marginBottom: heightPixel(20)}}></View>
        )}
        data={route?.params?.listingDetails}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <AgencyListingComp
            rightIconPress={() =>
              navigation.navigate(routes.bookedRoomDetailAgency)
            }
            item={item}
            facilityData={item.entities}
          />
        )}
      />
    </AppGLobalView>
  );
};

export default BookedRoomsAgencySide;

const styles = StyleSheet.create({});

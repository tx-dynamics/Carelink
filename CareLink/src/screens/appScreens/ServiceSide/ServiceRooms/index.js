import React from 'react';
import {StyleSheet, ScrollView, FlatList, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import {DrawerActions} from '@react-navigation/native';
import ServiceListingComp from '../../../../components/ServiceListingComp';
import {heightPixel, routes, widthPixel} from '../../../../Constants';
import {appIcons} from '../../../../Constants/Utilities/assets';
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useSelector} from 'react-redux';

const ServiceRooms = ({navigation}) => {
  const availableListData = useSelector(
    store => store?.roomListingSlice?.availableListing,
  );
  const bookedListData = useSelector(
    store => store?.roomListingSlice?.bookedListing,
  );

  return (
    <AppGLobalView style={styles.container}>
      <AppStatusbar />
      <Header
        headerLabel={'Rooms Details'}
        height={heightPixel(80)}
        leftImgStyle={styles.leftImgStyle}
        rightImg={appIcons.thirdTab}
        leftImgName={require('../../../../../assets/drawerIcon.png')}
        rightImgStyle={styles.rightImgStyle}
        onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.marginView}>
          <Apptext style={[styles.rms, {marginTop: wp('6%')}]}>
            Available ({availableListData?.length})
          </Apptext>
          <View style={{marginTop: wp('5%')}}>
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={() => (
                <View style={{marginTop: heightPixel(1)}}></View>
              )}
              data={availableListData}
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) => (
                <ServiceListingComp
                  onPress={() =>
                    navigation.navigate('withoutBottomTabnavigator', {
                      screen: routes.roomDetails,
                      params: {
                        item,
                        fromAvailableRooms: true,
                      },
                    })
                  }
                  facilityData={item.entities}
                  pic={item.photos[0]}
                  rightTxt={'Edit'}
                  detail={item?.notes}
                  showProposals={true}
                  labelValue={[item?.availabilityStart, item?.availabilityEnd]}
                  name={item?.rooms[0]?.room}
                />
              )}
            />
          </View>
          <Apptext style={styles.rms}>
            Booked ({bookedListData?.length})
          </Apptext>
          <View style={{marginTop: wp('5%')}}>
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={() => (
                <View style={{marginTop: heightPixel(1)}}></View>
              )}
              data={bookedListData}
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
          </View>
        </View>
      </ScrollView>
    </AppGLobalView>
  );
};

export default ServiceRooms;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: wp('5%'),
    marginHorizontal: wp('5%'),
  },
  rms: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  dtls: {
    color: DefaultStyles.colors.primary,
    textDecorationLine: 'underline',
  },
  marginView: {
    paddingHorizontal: wp('4.4%'),
  },
  ltst: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  searchBar: {
    height: 47,
    width: wp('90%'),
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 9,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  direcView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftImgStyle: {
    width: widthPixel(23),
    height: heightPixel(16),
  },
  rightImgStyle: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
});

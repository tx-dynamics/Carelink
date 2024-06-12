import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  View,
  RefreshControl,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import AgencyHomeComp from '../../../../components/AgencyHomeComp';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar';
import {heightPixel, routes, widthPixel} from '../../../../Constants';
import {appIcons} from '../../../../Constants/Utilities/assets';
import CustomerListingComp from '../../../../components/CustomerListingComp/CustomerListingComp';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../../network/Environment';
import {RedFlashMessage} from '../../../../Constants/Utilities/assets/Snakbar';
import {callApi, Method} from '../../../../network/NetworkManger';
import Loader from '../../../../components/Loader';
import {useSelector} from 'react-redux';

export const agencyData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5sdqwe-3ad53abb28ba',
    adress: 'Brookside Place',
    duation: 20,
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
      {
        id: 2,
        title: 'Car parking available',
      },
    ],
  },
  {
    id: 'bd7acbea-c1b1qweqw23e-46c2-aed5-3ad53abb28b1',
    duation: 3,
    adress: 'Hillcrest Heights',
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
      {
        id: 2,
        title: 'Car parking available',
      },
    ],
  },
  {
    id: 'bd7ac4bea-c1b1-46c2-aed5-3567567ad53abb28ba',
    duation: 14,
    adress: 'Magnolia Meadows',
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
    ],
  },
  {
    id: 'bd7ac4bea-c1b1-46c2-aed5-3ad32ddd53abb28ba',
    duation: 29,
    adress: 'Magnolia Meadows',
    facility: [
      {
        id: 1,
        title: 'Wheelchair',
      },
    ],
  },
];

const AgencyHome = ({}) => {
  const userData = useSelector(store => store?.userDataSlice);
  const [listingDetails, setListingDetails] = useState([]);
  const [pending, setPending] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [proposalData, setPropsalData] = useState({
    countsData: {},
    proposalList: [],
    acceptedProposals: '',
  });

  // hooks
  useEffect(() => {
    fetchListingDetails();
  }, []);

  // functions
  const fetchListingDetails = async () => {
    try {
      setIsLoading(true);
      //   api?query=${encodeURIComponent(JSON.stringify({ user: id }))}
      const endPoint = `${api.getListing}?query=${encodeURIComponent(
        JSON.stringify({}),
      )}`;
      const bodyParams = {};
      const onSuccess = result => {
        setListingDetails(result?.data?.listing);
        console.log('Listing count is', result?.data?.listing[0]?.address);
        setIsLoading(false);
        fetchProposalDetails();
      };

      const onError = error => {
        console.log('🚀 ~ onError ~ error:', error);
        setIsLoading(false);
        RedFlashMessage(error);
      };

      await callApi(Method.GET, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage(error);
    }
  };

  const fetchProposalDetails = async () => {
    try {
      setIsLoading(true);

      const endPoint = `${api.getProposal}?query=${encodeURIComponent(
        JSON.stringify({user: userData?.userData?._id}),
      )}`;
      const bodyParams = {};
      //   console.log('data ', endPoint);
      const onSuccess = result => {
        setPropsalData({
          countsData: result?.data?.counts,
          proposalList: result?.data?.proposal,
          acceptedProposals: result?.data?.counts?.accepted,
        });
        setPending(result?.data?.counts?.pending);
        setIsLoading(false);
      };

      const onError = error => {
        console.log('🚀 ~ onError ~ error:', error);
        setIsLoading(false);
        RedFlashMessage(error);
      };

      await callApi(Method.GET, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetchListingDetails();
    }, 2000);
  }, []);

  const navigation = useNavigation();
  return (
    <AppGLobalView style={styles.container}>
      <AppStatusbar />
      <Loader isVisible={isLoading} />
      <Header
        headerLabel={'Home'}
        rightImg={appIcons.messageIcon}
        leftImgStyle={styles.leftImgStyle}
        rightImgStyle={styles.rightImgStyle}
        leftImgName={require('../../../../../assets/drawerIcon.png')}
        onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        onPressRight={() =>
          navigation.navigate('withoutBottomTabnavigator', {
            screen: routes.messages,
          })
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.txtView}>
          <Apptext style={styles.rms}>Rooms & Proposals</Apptext>
        </View>
        <AgencyHomeComp
          onPress={() =>
            navigation.navigate('withoutBottomTabnavigator', {
              screen: routes.bookedRoomAgency,
              params: {
                listingDetails,
              },
            })
          }
          labelValue={'Rooms'}
          BookedRooms={listingDetails?.length}
          scndTxt={'Booked'}
        />
        <AgencyHomeComp
          onPress={() =>
            navigation.navigate('withoutBottomTabnavigator', {
              screen: routes.agencyProposalList,
              params: {
                proposalData,
              },
            })
          }
          labelValue={'Proposals'}
          BookedRooms={proposalData?.proposalList?.length}
          scndTxt={'Submitted'}
          AvailableRooms={proposalData?.acceptedProposals?.toString()}
          firstTxt={'Accepted'}
        />
        <View style={styles.listingView}>
          <Apptext style={styles.rms}>Customer Listings</Apptext>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('withoutBottomTabnavigator', {
                screen: routes.customerListing,
                params: {
                  listingDetails,
                },
              })
            }>
            <Apptext style={styles.dtls}>See All</Apptext>
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          data={listingDetails}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <CustomerListingComp
              onPress={() =>
                navigation.navigate('withoutBottomTabnavigator', {
                  screen: routes.roomDetails,
                  params: {
                    item,
                  },
                })
              }
              title={
                item?.address
                  ? item?.address?.slice(0, item?.address?.indexOf(','))
                  : item?.location?.address?.slice(
                      0,
                      item?.address?.indexOf(','),
                    )
              }
              durationData={[item?.availabilityStart, item?.availabilityEnd]}
              facilityData={item?.entities}
              allData={item}
            />
          )}
        />
      </ScrollView>
    </AppGLobalView>
  );
};

export default AgencyHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    zIndex: 999,
  },
  leftImgStyle: {
    width: widthPixel(23),
    height: heightPixel(16),
  },
  rightImgStyle: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: wp('3%'),
    marginHorizontal: wp('5%'),
  },
  listingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(20),
    marginVertical: heightPixel(10),
  },
  rms: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },
  dtls: {
    color: DefaultStyles.colors.primary,
    textDecorationLine: 'underline',
  },
});

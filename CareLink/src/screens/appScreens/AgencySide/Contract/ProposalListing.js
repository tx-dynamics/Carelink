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
import {useDispatch} from 'react-redux';
import {setItemListing} from '../../../../redux/Slices/proposalSlice';

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

const ProposalListing = ({route}) => {
  const [listingDetails, setListingDetails] = useState([]);
  const dispatch = useDispatch();
  const [pending, setPending] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [proposalData, setPropsalData] = useState({
    countsData: {},
    proposalList: [],
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
      //   api?query=${encodeURIComponent(JSON.stringify({ user: id }))}
      const endPoint = api.getProposal;
      const bodyParams = {};
      //   console.log('data ', endPoint);
      const onSuccess = result => {
        let filterData = result?.data?.proposal?.filter(
          item => item?._id === route?.params?.proposalData[0]?._id,
        );
        setPropsalData({
          countsData: filterData?.length,
          proposalList: filterData,
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
        headerLabel={'Select a proposal'}
        leftImgName={require('../../../../../assets/headerBack.png')}
        onPressLeft={() => navigation.goBack()}
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
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          data={proposalData?.proposalList}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <CustomerListingComp
              onPress={() => {
                dispatch(setItemListing(item?.listing));
                navigation.navigate('withoutBottomTabnavigator', {
                  screen: routes.roomDetails,
                  params: {
                    item: item?.listing,
                    review: true,
                    proposalData: route?.params?.proposalData,
                  },
                });
              }}
              title={
                item?.listing?.address
                  ? item?.listing?.address?.slice(
                      0,
                      item?.listing?.address?.indexOf(','),
                    )
                  : item?.listing?.location?.address?.slice(
                      0,
                      item?.listing?.address?.indexOf(','),
                    )
              }
              durationData={[
                item?.listing?.availabilityStart,
                item?.listing?.availabilityEnd,
              ]}
              facilityData={item?.listing?.entities}
              allData={item}
            />
          )}
        />
      </ScrollView>
    </AppGLobalView>
  );
};

export default ProposalListing;

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

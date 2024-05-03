import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import {DrawerActions, useIsFocused} from '@react-navigation/native';
import Header from '../../../../components/Header';
import {appIcons} from '../../../../Constants/Utilities/assets';
import {
  fontPixel,
  heightPixel,
  routes,
  widthPixel,
} from '../../../../Constants';
import SearchComponent from '../../../../components/SearchComponent/SearchComponent';
import CustomerListingComp from '../../../../components/CustomerListingComp/CustomerListingComp';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import Loader from '../../../../components/Loader';
import {RedFlashMessage} from '../../../../Constants/Utilities/assets/Snakbar';
import {api} from '../../../../network/Environment';
import {Method, callApi} from '../../../../network/NetworkManger';
import {useSelector} from 'react-redux';

const AgencySearch = ({navigation}) => {
  const [isSearch, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [listingData, setListingData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const userId = useSelector(state => state?.userDataSlice?.userData?._id);
  const DATA = [
    {
      id: 1,
      title: 'James Clear',
      duration: 20,
      liked: true,
      posted: '12 mins ago',
      facility: [
        {
          id: 1,
          title: 'Wheelchair',
        },
        {
          id: 2,
          title: 'Attach bathroom',
        },
      ],
    },
    {
      id: 1,
      title: 'James Hype',
      duration: 23,
      liked: false,
      posted: '2 mins ago',
      facility: [
        {
          id: 1,
          title: 'Terres',
        },
        {
          id: 2,
          title: 'Wheelchair',
        },
      ],
    },
  ];
  useEffect(() => {
    fetchListingDetails();
  }, [isFocused]);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefreshList = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
    fetchListingDetails();
  }, []);

  const fetchListingDetails = async () => {
    try {
      setIsLoading(true);
      //   api?query=${encodeURIComponent(JSON.stringify({ user: id }))}
      const endPoint = `${api.getListing}?query=${encodeURIComponent(
        JSON.stringify({}),
      )}`;
      const bodyParams = {};
      const onSuccess = result => {
        setListingData(result?.data?.listing);
        console.log('Listing count is', JSON.stringify(result?.data?.listing));
        setIsLoading(false);
      };

      const onError = error => {
        console.log('🚀 ~ onError ~ error:', error);
        setIsLoading(false);
      };

      await callApi(Method.GET, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <Header
        headerLabel={'Find Listing'}
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
      <SearchComponent
        onChangeText={setSearch}
        containerStyle={{marginVertical: heightPixel(20)}}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <Apptext style={styles.rms}>Latest Listings</Apptext>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          data={listingData?.filter(data =>
            data?.user?.name?.toLowerCase()?.includes(isSearch.toLowerCase()),
          )}
          refreshing={isRefreshing}
          onRefresh={onRefreshList}
          // ListFooterComponent={() => <View style={{ marginBottom: heightPixel(70) }}></View>}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            console.log('Data of item is', item),
            (
              <CustomerListingComp
                title={item?.user?.name}
                rightDisable={true}
                posted={'11 Dec'}
                durationData={[item?.availabilityStart, item?.availabilityEnd]}
                facilityData={item.entities}
                rightIcon={
                  item?.liked ? appIcons.heartRed : appIcons.heartBlank
                }
                item={item}
                onPress={() =>
                  navigation.navigate('withoutBottomTabnavigator', {
                    screen: routes.roomDetails,
                    params: {
                      item,
                    },
                  })
                }
              />
            )
          )}
        />
      </KeyboardAwareScrollView>
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default AgencySearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DefaultStyles.colors.white,
  },
  rms: {
    paddingHorizontal: widthPixel(20),
    fontFamily: 'Poppins-Medium',
    fontSize: fontPixel(20),
    marginBottom: heightPixel(10),
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
  leftImgStyle: {
    width: widthPixel(23),
    height: heightPixel(16),
  },
  rightImgStyle: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
});

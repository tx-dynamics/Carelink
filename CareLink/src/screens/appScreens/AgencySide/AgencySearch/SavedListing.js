import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import DefaultStyles from '../../../../config/Styles';
import Header from '../../../../components/Header';
import {appIcons} from '../../../../Constants/Utilities/assets';
import SearchComponent from '../../../../components/SearchComponent/SearchComponent';
import {
  fontPixel,
  heightPixel,
  routes,
  widthPixel,
} from '../../../../Constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {fonts} from '../../../../Constants/Fonts';
import CustomerListingComp from '../../../../components/CustomerListingComp/CustomerListingComp';
import DeleteModal from '../../../../components/DeleteModal/DeleteModal';
import {RedFlashMessage} from '../../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../../network/Environment';
import {Method, callApi} from '../../../../network/NetworkManger';
import Loader from '../../../../components/Loader';
import {useSelector} from 'react-redux';

const SavedListing = ({navigation}) => {
  const [isSearch, setSearch] = useState('');
  const [visible, setVisible] = useState(false);
  const [isIndex, setIndex] = useState(0);
  const [listingDetails, setListingDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector(store => store?.userDataSlice);
  console.log('User data is ', userData);
  const [DATA, setData] = useState([
    {
      id: 1,
      title: 'Camron',
      duration: 21,
      liked: true,
      posted: '29 mins ago',
      facility: [
        {
          id: 1,
          title: 'Swimming Pool',
        },
        {
          id: 2,
          title: 'Attach bathroom',
        },
      ],
    },
  ]);

  useEffect(() => {
    fetchListingDetails();
  }, []);

  const fetchListingDetails = async () => {
    try {
      setIsLoading(true);
      const endPoint = `${api.likeList}?query=${encodeURIComponent(
        JSON.stringify({
          user: userData?.userData?._id,
        }),
      )}`;
      const bodyParams = {};
      const onSuccess = result => {
        setListingDetails(result?.data?.listingLike);
        setIsLoading(false);
      };

      const onError = error => {
        setIsLoading(false);
        RedFlashMessage(error);
      };

      await callApi(Method.GET, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage(error);
    }
  };

  const heartPress = index => {
    setIndex(index);
    setVisible(true);
  };
  const onRemovePress = () => {
    DATA.splice(isIndex, 1);
    setData([...DATA]);
    RedFlashMessage('Listing Removed');
    setVisible(false);
  };
  return (
    <AppGLobalView style={styles.container}>
      <Header
        headerLabel={'Saved Listings'}
        leftImgName={appIcons.headerBack}
        onPressLeft={() => navigation.goBack()}
      />
      <SearchComponent
        onChangeText={setSearch}
        containerStyle={{marginBottom: heightPixel(15)}}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {/* <Apptext style={styles.rms}>Saved Listings</Apptext>
        <FlatList
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          data={listingDetails?.filter(data =>
            data?.title?.toLowerCase()?.includes(isSearch.toLowerCase()),
          )}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <CustomerListingComp
              title={item.title}
              posted={item.posted}
              rightPress={heartPress}
              duration={[1715239877000, 1715239877000]}
              facilityData={item.facility}
              rightIcon={appIcons.heartRed}
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
        /> */}
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
      </KeyboardAwareScrollView>
      <DeleteModal
        cancelPress={() => setVisible(false)}
        deletePress={onRemovePress}
        rightButtonTitle={'Remove'}
        visible={visible}
        title={'Are you sure you want to remove from saved listing'}
      />
      {/* <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.marginView}>
                    <View style={{ flexDirection: 'row', marginTop: -25, justifyContent: 'space-between' }}>
                        <Apptext style={styles.rms} >Saved Listings</Apptext>
                    </View>
                    <View style={{ marginTop: 21 }}>
                        <FlatList showsVerticalScrollIndicator={false}
                            data={DATA}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => (
                                <LatestListingsComp
                                    labelValue={"3 Room on 2nd Floor"}
                                    when={"Right Now"}
                                    rightImg={require('../../../../../assets/fillHeart.png')}
                                    showHrt={true}
                                    fors={"For 20 days"}
                                    hourly={"$20 - 70 Hourly"}
                                    onPress={() => navigation.navigate("withoutBottomTabnavigator",
                                        { screen: "ListingDetails" })}
                                />
                            )}
                        />
                    </View>
                </View>
            </ScrollView> */}
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default SavedListing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  rms: {
    paddingHorizontal: widthPixel(20),
    fontFamily: fonts.Poppins_Medium,
    fontSize: fontPixel(17),
    marginBottom: heightPixel(10),
  },
});

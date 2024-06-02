import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  UIManager,
  Text,
  PermissionsAndroid,
  Platform,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import BackgroundHeader from '../../../../components/BackgroundHeader';
import ReviewsComp from '../../../../components/ReviewsComp';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../../../config/colors';
import {appIcons} from '../../../../Constants/Utilities/assets';
import {
  fontPixel,
  heightPixel,
  routes,
  widthPixel,
} from '../../../../Constants';
import {uploadImageOnS3, uploadmage} from '../../../../Services/HelpingMethods';
import {fonts} from '../../../../Constants/Fonts';
import {fromProfile} from '../../../../redux/Slices/appSlice';
import {api} from '../../../../network/Environment';
import {Method, callApi} from '../../../../network/NetworkManger';
import moment from 'moment';
import Loader from '../../../../components/Loader';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {useIsFocused} from '@react-navigation/native';
import {RedFlashMessage} from '../../../../Constants/Utilities/assets/Snakbar';
import {iconPath} from '../../../../config/icon';

const Profile = ({navigation}) => {
  let currentLocation = {
    latitude: 31.449590774585772,
    longitude: 74.28036404773593,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const usertype = useSelector(state => state.splash.userType);
  const [isCover, setCover] = useState(null);
  const [isProfile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState();
  const [reviews, setReviews] = useState();
  const [coordinates, setCoordinates] = useState(currentLocation);
  const [isRefreshing, setIsRefreshing] = useState(false);
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

  const handleSubmit = async () => {
    if (isProfile) {
      const str = isProfile;
      const imageObj = {
        path: str,
        name: str?.substring(str?.lastIndexOf('/')),
      };
      await uploadImageOnS3(imageObj, res => {
        updateProfile(res);
      });
    } else {
      // await updateProfile();
      console.log('Else condition');
    }
  };

  const handleCoverSubmit = async () => {
    setIsLoading(true);
    if (isCover) {
      const str = isCover;
      const imageObj = {
        path: str,
        name: str?.substring(str?.lastIndexOf('/')),
      };
      await uploadImageOnS3(imageObj, res => {
        updateCoverPhoto(res);
      });
    } else {
      await updateProfile();
      setIsLoading(false);
      console.log('Else condition');
    }
  };

  const updateProfile = async image => {
    try {
      setIsLoading(true);
      const endPoint = api.userProfile;
      const bodyParams = {
        image: image,
      };
      const onSuccess = result => {
        setIsLoading(false);
        setUserData({...userData, image: image});
        dispatch(setUserData(result?.data?.user));
        fetchUserData();
      };
      const onError = error => {
        RedFlashMessage('Something Went Wrong!', error.message);
      };
      await callApi(Method.PATCH, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCoverPhoto = async image => {
    try {
      setIsLoading(true);
      const endPoint = api.userProfile;
      const bodyParams = {coverPhoto: image};
      const onSuccess = result => {
        setIsLoading(false);
        setUserData({...userData, coverPhoto: image});
        dispatch(setUserData(result?.data?.user));
        fetchUserData();
      };
      const onError = error => {
        RedFlashMessage('Something Went Wrong!', error.message);
      };
      await callApi(Method.PATCH, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  // functions
  useEffect(() => {
    if (isFocused) {
      fetchUserData();
      fetchReview();
    }
  }, [isFocused]);

  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const endPoint = api.getAgencyProfile;
      const bodyParams = {};
      const onSuccess = result => {
        setUserData(result?.user);
        setIsLoading(false);
      };

      const onError = error => {
        setIsLoading(false);
      };

      await callApi(Method.GET, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const fetchReview = async () => {
    try {
      setIsLoading(true);
      const endPoint = `${api.getReviews}/${userData?._id}`;
      const bodyParams = {};
      const onSuccess = result => {
        setReviews(result?.data?.review);
        setIsLoading(false);
      };

      const onError = error => {
        setIsLoading(false);
      };

      await callApi(Method.GET, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS == 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
        }
      } else {
        getLocation();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getLocation = async () => {
    try {
      setIsLoading(true);
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position?.coords;
          setCoordinates(prevData => ({
            ...prevData,
            latitude: latitude,
            longitude: longitude,
          }));
          setIsLoading(false);
        },
        error => {
          console.error(error);
        },
        {enableHighAccuracy: true, timeout: 15000},
      );
    } catch (error) {
      console.log('Error occured');
    }
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    fetchUserData();
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }>
      <StatusBar translucent backgroundColor={'transparent'} />
      <BackgroundHeader
        onPressRight={() => {
          uploadmage(setCover);
          handleCoverSubmit();
        }}
        backImg={
          userData?.coverPhoto
            ? {uri: userData?.coverPhoto}
            : require('../../../../../assets/photo.png')
        }
        leftImgName={require('../../../../../assets/headerBack.png')}
        rightImg={
          usertype === 'ServiceSide'
            ? require('../../../../../assets/dots.png')
            : appIcons.camera
        }
        onPressLeft={() => navigation.goBack()}
      />
      <View style={styles.whiteView}>
        <View style={styles.imgBox}>
          <Image
            style={styles.profileImg}
            onLoad={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            source={
              userData?.image
                ? {uri: userData?.image}
                : require('../../../../../assets/photo.png')
            }
          />
          <TouchableOpacity
            onPress={() => {
              uploadmage(setProfile);
              handleSubmit();
            }}
            style={styles.cameraView}>
            <Image
              style={styles.camStyle}
              source={
                usertype === 'ServiceSide'
                  ? require('../../../../../assets/camera.png')
                  : appIcons.camera
              }
              onLoad={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
            />
          </TouchableOpacity>
        </View>
        <Apptext style={styles.imgTxt}>{userData?.name}</Apptext>
        <Apptext style={styles.mngTxt}>
          Manage 90+ Rental Propoerties in the city
        </Apptext>
        <Apptext style={[styles.mngTxt, {marginTop: wp('2%')}]}>
          {userData?.experience}
        </Apptext>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('withoutBottomTabnavigator', {
              screen: routes.brochureProfile,
            })
          }>
          <Text style={styles.brochureText}>Brochure</Text>
        </TouchableOpacity>
        <View style={styles.txtView}>
          <Apptext style={styles.rms}>About</Apptext>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('withoutBottomTabnavigator', {
                screen: routes.agencyBasic,
                params: {fromProfile: dispatch(fromProfile(true))},
              })
            }>
            <Apptext style={styles.dtls}>Edit your about</Apptext>
          </TouchableOpacity>
        </View>
        <View style={styles.paraView}>
          <Apptext style={styles.para}>{userData?.about}</Apptext>
        </View>
        <View style={styles.txtView}>
          <Apptext style={styles.rms}>Location</Apptext>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('withoutBottomTabnavigator', {
                screen: 'AgencyMap',
                params: {fromProfile: dispatch(fromProfile(true))},
              })
            }>
            <Apptext style={styles.dtls}>Edit your Location</Apptext>
          </TouchableOpacity>
        </View>

        <View style={styles.paraView}>
          <Apptext style={styles.para}>{userData?.address}</Apptext>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <MapView
            style={{
              width: wp('90%'),
              height: wp('90%'),
              overflow: 'hidden',
            }}
            zoomEnabled={true}
            showsUserLocation={true}
            showsPointsOfInterest={true}
            followsUserLocation={true}
            userLocationPriority="high"
            initialRegion={coordinates}>
            <Marker
              coordinate={{
                latitude: userData?.location?.coordinates[1]
                  ? userData?.location?.coordinates[0]
                  : 37.78825,
                longitude: userData?.location?.coordinates[0]
                  ? userData?.location?.coordinates[1]
                  : -122.4324,
              }}>
              <Image
                source={iconPath.mapPin}
                style={{width: 26, height: 28}}
                resizeMode="contain"
              />
            </Marker>
          </MapView>
        </View>
        {userData?.brochure && (
          <>
            <View style={styles.txtView}>
              <Apptext style={styles.rms}>Brochure</Apptext>
            </View>
            <Image
              style={styles.mapImg}
              source={{uri: userData?.brochure}}
              onLoadStart={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
            />
          </>
        )}

        <View style={styles.txtView}>
          <Apptext style={styles.rms}>Reviews</Apptext>
        </View>
        <View style={{marginTop: heightPixel(10)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            ListHeaderComponent={() => (
              <View style={{marginTop: heightPixel(1)}}></View>
            )}
            // ListFooterComponent={() => <View style={{ marginBottom: heightPixel(90) }}></View>}
            data={reviews}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
              <ReviewsComp
                disabled
                data={item.checks}
                showProposals={true}
                labelValue={item.desc}
                name={item.text}
                location={moment(parseInt(item.createdAt)).format(
                  'MMM DD,YYYY',
                )}
              />
            )}
          />
        </View>
      </View>
      <Loader isVisible={isLoading} />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DefaultStyles.colors.white,
  },
  whiteView: {
    width: wp('100%'),
    backgroundColor: 'white',
  },
  imgBox: {
    width: widthPixel(164),
    marginTop: wp(-35),
    height: widthPixel(164),
    borderWidth: 0.2,
    borderColor: 'lightgray',
    borderRadius: 20,
    alignSelf: 'center',
  },
  profileImg: {
    width: widthPixel(164),
    height: widthPixel(164),
    borderRadius: widthPixel(10),
  },
  cameraView: {
    width: widthPixel(51),
    height: widthPixel(51),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    marginTop: heightPixel(-37),
    right: heightPixel(20),
    marginHorizontal: wp('35%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 3,
  },
  camStyle: {
    width: widthPixel(28),
    height: heightPixel(24),
  },
  imgTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: heightPixel(30),
  },
  mngTxt: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    width: wp('95%'),
    marginTop: 5,
    alignSelf: 'center',
  },
  brochureText: {
    marginTop: heightPixel(10),
    textAlign: 'center',
    color: colors.primary,
    textDecorationLine: 'underline',
    fontSize: fontPixel(14),
    fontFamily: fonts.Poppins_Light,
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
    color: DefaultStyles.colors.black,
    fontSize: 11,
    textDecorationLine: 'underline',
  },
  paraView: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: wp('2%'),
  },
  para: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  mapImg: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: wp('8%'),
    borderRadius: 15,
    height: hp('90%'),
  },
});

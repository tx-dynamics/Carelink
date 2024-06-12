import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import {useDispatch, useSelector} from 'react-redux';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {heightPixel} from '../../../Constants';
import {fromProfile} from '../../../redux/Slices/appSlice';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import {GOOGLE_API_KEY, api} from '../../../network/Environment';
import Loader from '../../../components/Loader';
import {RedFlashMessage} from '../../../Constants/Utilities/assets/Snakbar';
import colors from '../../../config/colors';
import {Method, callApi} from '../../../network/NetworkManger';
import {setAgencyAddress} from '../../../redux/Slices/agencyInfoSlice';

const AgencyMap = ({navigation, route}) => {
  console.log('Routes area', route?.params?.fromPhoto);
  let currentLocation = {
    latitude: 31.449590774585772,
    longitude: 74.28036404773593,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const dispatch = useDispatch();

  const usertype = useSelector(state => state.splash.userType);
  const isFromProfile = useSelector(state => state.appSlice.fromProfile);
  const [location, setLocation] = useState(currentLocation);
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [userData, setUserData] = useState();
  const [moveLocation, setMoveLocation] = useState(false);

  // states
  const [coordinates, setCoordinates] = useState(currentLocation);
  const [myUserLocation, setMyUserLocation] = useState({
    streetAddress: '',
    apartmentNumber: '',
    zipCode: '',
    stateName: '',
    country: '',
    latitude: '',
    longitude: '',
  });

  useEffect(() => {
    requestLocationPermission();
    fetchUserData();
  }, []);

  const requestLocationPermission = async () => {
    try {
      if (Platform.OS == 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Hit get Location');
          getLocation();
        } else {
        }
      } else {
        Geolocation.requestAuthorization('always');
        Geolocation.getCurrentPosition(
          position => {
            setMyUserLocation({
              latitude: position?.coords?.latitude,
              longitude: position?.coords?.longitude,
            });
            setCoordinates({
              latitude: position?.coords?.latitude,
              longitude: position?.coords?.longitude,
            });
            setIsLoading(true);
            getAddressFromCoordinates(
              position?.coords?.latitude,
              position?.coords?.longitude,
            );
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000},
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

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

  const onPressNext = async () => {
    if (usertype == 'ServiceSide') {
      navigation.navigate('AgencyLocation', {
        ProviderData: route?.params,
        myUserLocation,
        address,
      });
    }
    if (usertype == 'AgencySide') {
      if (isFromProfile) {
        try {
          const endPoint = api.userProfile;
          const bodyParams = {
            address: address,
            location: {
              type: 'Point',
              coordinates: [latitude, longitude],
            },
          };
          const onSuccess = result => {
            setIsLoading(false);
            navigation.navigate('ProfileNavigator');
            dispatch(fromProfile(false));
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
      } else {
        if (myUserLocation.country !== '') {
          navigation.navigate('AgencyLocation', {
            ProviderData: route?.params,
            myUserLocation,
            address,
          });
        } else {
          RedFlashMessage('Please Select Your Address');
        }
      }
    }
  };

  const getLocation = async () => {
    try {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position?.coords;
          setCoordinates(prevData => ({
            ...prevData,
            latitude: latitude,
            longitude: longitude,
          }));
          setLocation(prevData => ({
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
      console.log('error occured while opening map');
    }
  };

  const getAddressFromCoordinates = (latitude, longitude) => {
    let userLocation = {};

    return new Promise((resolve, reject) => {
      fetch(
        'https://maps.googleapis.com/maps/api/geocode/json?address=' +
          latitude +
          ',' +
          longitude +
          '&key=' +
          GOOGLE_API_KEY,
      )
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.status === 'OK') {
            setAddress(responseJson?.results[0]?.formatted_address);
            setLatitude(responseJson?.results[0]?.geometry?.location?.lat);
            setLongitude(responseJson?.results[0]?.geometry?.location?.lng);
            dispatch(
              setAgencyAddress(responseJson?.results[0]?.formatted_address),
            );

            responseJson?.results[0].address_components.forEach(item => {
              switch (item.types[0]) {
                case 'street_number': // street number
                  userLocation.streetNumber = item?.long_name;
                  break;
                case 'route': // street name
                  // console.log('streetNumber', item.long_name);
                  item.long_name?.length > 0 &&
                    (userLocation.streetAddress = userLocation.streetNumber
                      ? userLocation.streetNumber
                      : '' + ' ' + item.long_name);
                  break;
                case 'administrative_area_level_1': // state name
                  userLocation.stateName = item.long_name;
                  break;
                case 'postal_code': // zip code
                  userLocation.zipCode = item.short_name;
                  break;
                case 'country': // country
                  userLocation.country = item.long_name;
                  break;
              }
              userLocation.latitude = latitude;
              userLocation.longitude = longitude;
            });
            setIsLoading(false);
            setMyUserLocation({
              streetAddress: userLocation?.streetAddress
                ? userLocation?.streetAddress
                : null,
              apartmentNumber: null,
              stateName: userLocation?.stateName
                ? userLocation?.stateName
                : null,
              zipCode: userLocation?.zipCode ? userLocation?.zipCode : null,
              country: userLocation?.country ? userLocation?.country : null,
              latitude: userLocation?.latitude,
              longitude: userLocation?.longitude,
            });
          } else {
            RedFlashMessage('Not Found');
          }
        })
        .catch(error => {
          Alert.alert('Location Not Found');
          RedFlashMessage('Something Went Wrong While Fetching Location');
        })
        .finally(() => setIsLoading(false));
    });
  };

  const onDragMapValues = values => {
    setMoveLocation(true);
    setCoordinates({
      latitude: values.nativeEvent.coordinate.latitude,
      longitude: values.nativeEvent.coordinate.longitude,
    });
    setIsLoading(true);
    getAddressFromCoordinates(
      values.nativeEvent.coordinate.latitude,
      values.nativeEvent.coordinate.longitude,
    );
  };

  const pinLocation = route?.params?.fromPhoto
    ? coordinates
    : {
        latitude: userData?.location?.coordinates[1]
          ? userData?.location?.coordinates[0]
          : 37.78825,
        longitude: userData?.location?.coordinates[0]
          ? userData?.location?.coordinates[1]
          : -122.4324,
      };

  return (
    <AppGLobalView style={styles.container}>
      <Loader isVisible={isLoading} />
      <View>
        <IconHeaderComp
          title={'Pin Location'}
          onPress={() => navigation.goBack()}
          imgName={iconPath.leftArrow}
          heading={'Pin your listed room location on the map'}
        />

        <View style={styles.mapContainer}>
          <MapView
            style={{width: wp('95%'), height: wp('90%')}}
            zoomEnabled={true}
            showsUserLocation={true}
            showsPointsOfInterest={true}
            userLocationPriority="high"
            moveOnMarkerPress={false}
            initialRegion={coordinates}>
            <Marker
              draggable
              coordinate={pinLocation}
              onDragEnd={values => {
                onDragMapValues(values);
              }}
              onPress={values => {
                onDragMapValues(values);
              }}
              pointerEvents="auto"
              style={{
                width: wp(20),
                height: wp(20),
              }}>
              <Image
                source={iconPath.mapPin}
                style={{width: 30, height: 28}}
                resizeMode="contain"
              />
            </Marker>
          </MapView>
        </View>
        {address && (
          <View>
            <Apptext style={[styles.createTxt, {fontFamily: 'Poppins-Medium'}]}>
              Address
            </Apptext>
            <Apptext style={[styles.adrs]}>
              {route?.params?.fromPhoto
                ? address
                : !moveLocation
                ? userData?.address
                : address}
            </Apptext>
          </View>
        )}
      </View>
      <FormButton
        buttonTitle={isFromProfile ? 'Update' : 'Next'}
        onPress={onPressNext}
      />
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default AgencyMap;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: heightPixel(20),
  },
  createTxt: {
    marginTop: wp('5%'),
    color: DefaultStyles.colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: wp('6%'),
    marginHorizontal: wp('6%'),
  },
  mapContainer: {
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: wp('5%'),
  },
  mapView: {
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    width: wp('90%'),
    height: wp('70%'),
  },
  recenterBox: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: wp(16),
    width: wp(16),
    bottom: 0,
    right: 0,
    position: 'absolute',
    elevation: 5,
    // alignSelf: "flex-end",
    alignItems: 'center',
    justifyContent: 'center',
    margin: heightPixel(16),
  },
  recenterIcon: {
    height: 20,
    width: 20,
    // tintColor: colors.black,
    opacity: 0.7,
    resizeMode: 'contain',
  },
  markerImage: {
    width: wp(5),
    height: wp(10),
    backgroundColor: 'red',
    // resizeMode: 'cover',
  },
  pinkBox: {
    width: 51,
    borderRadius: 8,
    height: 47,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: wp('50%'),
    marginHorizontal: wp('5%'),
    backgroundColor: DefaultStyles.colors.primary,
  },
  adrs: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginHorizontal: wp('6%'),
    lineHeight: 25,
  },
});

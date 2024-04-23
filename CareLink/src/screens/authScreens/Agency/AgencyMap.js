import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import FormButton from '../../../components/FormButton';
import {useDispatch, useSelector} from 'react-redux';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import {heightPixel, hp, routes} from '../../../Constants';
import {fromProfile} from '../../../redux/Slices/appSlice';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import {GOOGLE_API_KEY} from '../../../network/Environment';
import Loader from '../../../components/Loader';
import {RedFlashMessage} from '../../../Constants/Utilities/assets/Snakbar';
import {appIcons} from '../../../Constants/Utilities/assets';

const AgencyMap = ({navigation, route}) => {
  const dispatch = useDispatch();
  const usertype = useSelector(state => state.splash.userType);
  const isFromProfile = useSelector(state => state.appSlice.fromProfile);
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [address, setAddress] = useState('');
  const mapRef = useRef();

  // states
  const [coordinates, setCoordinates] = useState({
    latitude: location?.latitude ? location?.latitude : 37.78825,
    longitude: location?.longitude ? location?.longitude : -122.4324,
    latitudeDelta: 0.123,
    longitudeDelta: 0.32,
  });
  const [myUserLocation, setMyUserLocation] = useState({});

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
          console.log('Hit get Location');
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

  const onPressNext = () => {
    // console.log('setMyUserLocation', myUserLocation, usertype, isFromProfile);
    if (usertype == 'ServiceSide') {
      navigation.navigate(routes.listingSummary, {
        data: route?.params,
      });
    }
    if (usertype == 'AgencySide') {
      if (isFromProfile) {
        navigation.navigate('ProfileNavigator');
        dispatch(fromProfile(false));
      } else {
        if (Object.keys(myUserLocation).length > 0) {
          navigation.navigate('AgencyLocation', {
            myUserLocation,
            agencyData,
          });
        } else {
          RedFlashMessage('Please Select Your Address');
        }
        // navigation.navigate('PaymentPlans');
      }
    }
  };

  const getLocation = async () => {
    setIsLoading(true);
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
        setIsLoading(false);
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: true, timeout: 15000},
    );
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
            setIsLoading(true);
            // console.log(
            //   '=> ',
            //   JSON.stringify(responseJson?.results[0], ' ', 2),
            // );
            responseJson?.results[0].address_components.forEach(item => {
              switch (item.types[0]) {
                case 'street_number': // street number
                  console.log('streetNumber', item.long_name);
                  userLocation.streetNumber = item.long_name;
                  break;
                case 'route': // street name
                  userLocation.streetAddress =
                    userLocation.streetNumber + ' ' + item.long_name;
                  break;
                case 'administrative_area_level_1': // state name
                  userLocation.stateName = item.long_name;
                  break;
                case 'postal_code': // zip code
                  userLocation.zipCode = item.short_name;
                  break;
                case 'country': // country
                  userLocation.country = item.short_name;
                  break;
              }
            });
            setIsLoading(false);
            // console.log('my user data ', userLocation);
            setMyUserLocation(prevState => ({...prevState, ...userLocation}));
            setAddress(responseJson?.results[3]?.formatted_address);
            // resolve(responseJson?.results?.[3]?.formatted_address);
          } else {
            RedFlashMessage('Not Found');
          }
        })
        .catch(error => {
          Alert.alert('Location Not Found');
        });
    });
  };

  const onDragMapValues = values => {
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
        {/* <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={{width: wp('100%'), height: wp('100%')}}
        /> */}
        {location !== null ? (
          <MapView
            style={{width: wp('100%'), height: wp('100%')}}
            zoomEnabled={true}
            showsUserLocation={true}
            showsPointsOfInterest={true}
            followsUserLocation={true}
            userLocationPriority="high"
            initialRegion={coordinates}>
            <Marker
              draggable
              coordinate={{
                latitude: location?.latitude,
                longitude: location?.longitude,
                latitudeDelta: 0.123,
                longitudeDelta: 0.32,
              }}
              onDragEnd={values => {
                getAddressFromCoordinates(
                  values.nativeEvent.coordinate.latitude,
                  values.nativeEvent.coordinate.longitude,
                );
                setCoordinates({
                  latitude: values.nativeEvent.coordinate.latitude,
                  longitude: values.nativeEvent.coordinate.longitude,
                });
              }}
              pointerEvents="auto"
              style={{backgroundColor: 'yellow', width: wp(30), height: wp(30)}}
              icon={iconPath.mapPin}
            />
          </MapView>
        ) : (
          <Loader isVisible={isLoading} />
        )}

        <View>
          <Apptext style={[styles.createTxt, {fontFamily: 'Poppins-Medium'}]}>
            Address
          </Apptext>
          {Object.keys(myUserLocation).length > 0 && (
            <Apptext style={[styles.adrs]}>
              {myUserLocation['streetAddress']}, {myUserLocation['stateName']},{' '}
              {myUserLocation['country']}, {myUserLocation['zipCode']}
            </Apptext>
          )}
        </View>
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

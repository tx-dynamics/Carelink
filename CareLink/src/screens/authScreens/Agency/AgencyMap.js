import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  Alert,
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

import MapView, {Marker} from 'react-native-maps';
import colors from '../../../config/colors';
import {GOOGLE_API_KEY} from '../../../network/Environment';
import Loader from '../../../components/Loader';
import {RedFlashMessage} from '../../../Constants/Utilities/assets/Snakbar';

const AgencyMap = ({navigation, route}) => {
  // route data
  const agencyData = route?.params;
  // hooks
  const usertype = useSelector(state => state.splash.userType);
  const isFromProfile = useSelector(state => state.appSlice.fromProfile);
  const dispatch = useDispatch();
  const mapRef = useRef();

  // states
  const [coordinates, setCoordinates] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [myUserLocation, setMyUserLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // functions

  const onPressNext = () => {
    // console.log('setMyUserLocation', myUserLocation, usertype, isFromProfile);
    if (usertype == 'ServiceSide') {
      navigation.navigate(routes.listingSummary);
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
  const getAddressFromCoordinates = (latitude, longitude) => {
    // console.log(latitude, longitude);
    setIsLoading(true);
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

            // resolve(responseJson?.results?.[3]?.formatted_address);
          } else {
            console.log('not found');
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
        <View style={styles.mapContainer}>
          <MapView
            ref={mapRef}
            initialRegion={coordinates}
            style={styles.mapView}
            userLocationPriority="high"
            showsUserLocation={true}>
            <Marker
              draggable
              coordinate={coordinates}
              onDragEnd={values => onDragMapValues(values)}
              pointerEvents="auto"
              style={{backgroundColor: 'yellow', width: wp(30), height: wp(30)}}
              icon={iconPath.mapPin}
            />
          </MapView>
        </View>
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

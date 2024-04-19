import React, {useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
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

import MapView, { Marker } from 'react-native-maps';
import colors from '../../../config/colors';

const AgencyMap = ({navigation}) => {
  const usertype = useSelector(state => state.splash.userType);
  const isFromProfile = useSelector(state => state.appSlice.fromProfile);
  const dispatch = useDispatch();
  const mapRef = useRef();

  const onPressNext = () => {
    if (usertype == 'ServiceSide') {
      navigation.navigate(routes.listingSummary);
    }
    if (usertype == 'AgencySide') {
      if (isFromProfile) {
        navigation.navigate('ProfileNavigator');
        dispatch(fromProfile(false));
      } else {
        navigation.navigate('PaymentPlans');
      }
    }
  };

  // recenter user to main position
  const recenterClicked = () => {
    mapRef.current?.animateToRegion({
      // latitude: currentLocation.latitude,
      // longitude: currentLocation.longitude,
      // latitudeDelta: 0.02,
      // longitudeDelta: 0.02,
    });
    // setCurrent({
    //   latitude: loc.latitude,
    //   longitude: loc.longitude,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // });
  };
  return (
    <AppGLobalView style={styles.container}>
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
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.mapView}
            userLocationPriority="balanced"
            showsUserLocation={true}
            // customMapStyle={}
          >
            <Marker coordinate={{}}>
              <Image source={iconPath.mapPin} style={{width:20, height:20}}/>
            </Marker>
          </MapView>
          <TouchableOpacity
            onPress={() => {
              recenterClicked();
            }}
            style={styles.recenterBox}>
            <Image
              style={styles.recenterIcon}
              source={iconPath.mapLocator} 
            />
          </TouchableOpacity>
          {/* <ImageBackground
                    style={styles.imgView}
                    source={require('../../../../assets/map.png')}>
                    <Image style={{ marginTop: wp('18%') }} source={require('../../../../assets/pin-fill.png')} />
                    <TouchableOpacity style={styles.pinkBox} >
                    <Image source={require('../../../../assets/zoom.png')} />
                    </TouchableOpacity>
                  </ImageBackground> */}
        </View>
        <View>
          <Apptext style={[styles.createTxt, {fontFamily: 'Poppins-Medium'}]}>
            Address
          </Apptext>
          <Apptext style={[styles.adrs]}>
            123 street, 11 apartment ,USA,11221
          </Apptext>
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
    position: "absolute",
    elevation: 5,
    // alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    margin: heightPixel(16)
  },
  recenterIcon: {
    height: 20,
    width: 20,
    // tintColor: colors.black,
    opacity: 0.7,
    resizeMode: "contain"
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

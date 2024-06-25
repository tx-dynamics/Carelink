import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, FlatList} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Header from '../../../../components/Header';
import {appIcons} from '../../../../Constants/Utilities/assets';
import {
  fontPixel,
  heightPixel,
  routes,
  widthPixel,
} from '../../../../Constants';
import ProfileTopComp from '../../../../components/ProfileTopComp/ProfileTopComp';
import ImageViewZoomComp from '../../../../components/ImageViewZoomComp/ImageViewZoomComp';
import colors from '../../../../config/colors';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import Apptext from '../../../../components/Apptext';
import AgencyHomeComp from '../../../../components/AgencyHomeComp';
import {Image} from 'react-native';

const ClientProfile = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const {serviceUserProfile} = useRoute()?.params;
  const memberSince = moment(serviceUserProfile?.createdAt).format('MMMM YYYY');

  const images = [
    {
      id: 1,
      url: serviceUserProfile?.drivingAbstract,
    },
    {
      id: 2,
      url: serviceUserProfile?.certificates[0],
    },
    {
      id: 3,
      url: serviceUserProfile?.drivingLicense,
    },
  ];

  const ProviderData = [
    {
      id: 1,
      title: 'Available Rooms',
      count: 8,
    },
    {
      id: 2,
      title: 'Booked Rooms',
      count: 8,
    },
    {
      id: 3,
      title: 'Certificates',
      count: 8,
      route: routes.certificatesListing,
    },
  ];

  return (
    <AppGLobalView style={styles.container}>
      <Header
        leftImgName={appIcons.headerBack}
        rightImg={appIcons.messageIcon}
        onPressLeft={() => navigation.goBack()}
        headerLabel={'Service Provider Profile'}
        rightImgStyle={styles.rightImgStyle}
        onPressRight={() => navigation.navigate(routes.messages)}
      />
      <ProfileTopComp
        name={serviceUserProfile?.name}
        pic={serviceUserProfile?.image}
        memberDuration={memberSince}
        city={'serviceUserProfile'}
      />

      <FlatList
        data={ProviderData}
        contentContainerStyle={{paddingVertical: heightPixel(10)}}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => {
          return (
            <View style={styles.RoomView}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity
                style={styles.rightCricleView}
                disabled={item?.id == 3 ? false : true}
                onPress={() => {
                  setVisible(true);
                  navigation.navigate(routes.certificatesListing, {
                    params: images,
                  });
                }}>
                {item.id == 3 ? (
                  <Image
                    source={appIcons.CalrightArrow}
                    style={{width: widthPixel(20), height: heightPixel(20)}}
                    resizeMode="contain"
                  />
                ) : (
                  <View
                    style={[styles.circle, {backgroundColor: colors.primary}]}>
                    <Apptext style={[styles.nmbr, {color: 'white'}]}>
                      {item.count}
                    </Apptext>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          );
        }}
      />

      {/* <ImageViewZoomComp
        data={images}
        visible={visible}
        onSwipeDown={() => setVisible(false)}
        onRequestClose={() => setVisible(false)}
      /> */}
    </AppGLobalView>
  );
};

export default ClientProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  directionView: {
    flexDirection: 'row',
    marginTop: wp('6%'),
  },
  imgView: {
    width: wp('30%'),
    marginTop: wp('7%'),
    height: wp('30%'),
    alignSelf: 'center',
    borderRadius: 60,
  },
  RoomView: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    marginTop: heightPixel(20),
    width: widthPixel(374),
    height: heightPixel(77),
    borderRadius: heightPixel(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(20),
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
  },
  jmsTxt: {
    marginTop: wp('6%'),
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  dcTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    alignSelf: 'center',
  },
  pinkBox: {
    width: 200,
    borderRadius: 10,
    backgroundColor: DefaultStyles.colors.lightPrimary,
    alignSelf: 'center',
    marginTop: wp('3%'),
  },
  mmbrTxt: {
    fontSize: 12,
    alignSelf: 'center',
    marginTop: wp('1%'),
  },
  acntTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginTop: wp('5%'),
    alignSelf: 'center',
    color: DefaultStyles.colors.primary,
    textDecorationLine: 'underline',
  },
  // leftImgStyle: {
  //     width: widthPixel(23),
  //     height: heightPixel(16),
  // },
  rightImgStyle: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
  circle: {
    width: 39,
    marginHorizontal: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    height: 39,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  rightCricleView: {
    width: wp('20%'),
    alignItems: 'center',
  },
  nmbr: {
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
    lineHeight: 35,
  },
  inputContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingLeft: wp('4%'),
    width: widthPixel(374),
    height: heightPixel(103),
    marginVertical: heightPixel(10),
    backgroundColor: DefaultStyles.colors.primary,
    borderRadius: widthPixel(10),
  },
});

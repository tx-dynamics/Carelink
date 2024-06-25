import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import {iconPath} from '../../../../config/icon';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {fontPixel, heightPixel, routes} from '../../../../Constants';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import CertificateComp from '../../../../components/CertificateComp';

const CertificatesListingScreen = ({navigation, route}) => {
  const DATA = [
    {
      id: 1,
      title: 'Certificates',
      description: `James have uploaded certificates to verify with platform`,
      image: route?.params?.params[0]?.url,
    },
    {
      id: 2,
      title: 'Driving Abstract',
      description: 'James uploaded driving abstract to verify with platform',
      image: route?.params?.params[1]?.url,
    },
    {
      id: 3,
      title: 'Home Photo',
      description: 'James uploaded driving abstract to verify with platform',
      image: route?.params?.params[2]?.url,
    },
  ];

  return (
    <AppGLobalView style={styles.container}>
      <IconHeaderComp
        title={'Certificates'}
        onPress={() => navigation.goBack()}
        imgName={iconPath.leftArrow}
        heading={'Certificates'}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View style={{marginBottom: heightPixel(20)}}></View>
        )}
        data={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <CertificateComp
            btnTxt={'See Now'}
            plan={item?.title}
            desc={item?.description}
            onPress={() =>
              navigation.navigate(routes.certificatesListingView, {
                item,
              })
            }
          />
        )}
      />
    </AppGLobalView>
  );
};

export default CertificatesListingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  createTxt: {
    marginTop: wp('8%'),
    color: DefaultStyles.colors.black,
    fontFamily: 'Poppins-Regular',
    fontSize: wp('6%'),
    marginHorizontal: wp('5%'),
  },
  txtView: {
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: heightPixel(10),
  },
  submitTxt: {
    fontSize: fontPixel(14),
    // fontSize: 11,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});

import React, {useState} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import {iconPath} from '../../../../config/icon';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {fontPixel, heightPixel, hp} from '../../../../Constants';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';

const CertificatesListingView = ({navigation, route}) => {
  const [visible, setVisible] = useState(false);
  return (
    <AppGLobalView style={styles.container}>
      <IconHeaderComp
        title={route?.params?.item?.title}
        onPress={() => navigation.goBack()}
        imgName={iconPath.leftArrow}
      />
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image
          source={{uri: route?.params?.item?.image}}
          style={{
            height: 300,
            width: wp('100%'),
            marginTop: hp(5),
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {/* <ImageViewZoomComp
        data={[route?.params?.item?.image]}
        visible={visible}
        onSwipeDown={() => setVisible(false)}
        onRequestClose={() => setVisible(false)}
      /> */}
    </AppGLobalView>
  );
};

export default CertificatesListingView;

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

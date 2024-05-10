import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultStyles from '../config/Styles';
import Apptext from './Apptext';
import {fontPixel, heightPixel, widthPixel} from '../Constants';
import CheckMarkComponent from './CheckMarkComponent/CheckMarkComponent';
import {appIcons} from '../Constants/Utilities/assets';
import colors from '../config/colors';
import {fonts} from '../Constants/Fonts';

const ReviewsComp = ({
  pic,
  data,
  labelValue,
  when,
  fors,
  hourly,
  placeholderText,
  iconType,
  leftIconType,
  leftImgName,
  rightImgName,
  showHrt,
  showProposals,
  name,
  location,
  onPress,
  borderRadius = 10,
  rightOnPress,
  disabled,
  rightIconType,
  ...rest
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.inputContainer, {borderRadius: borderRadius}]}>
      {/* Propsal Starts Here */}
      {showProposals ? (
        <View style={{height: 55}}>
          <View style={styles.direcView}>
            <TouchableOpacity style={styles.imgView}>
              <Image
                style={styles.jcImg}
                source={pic ? pic : require('../../assets/JC.png')}
              />
            </TouchableOpacity>
            <View style={{marginLeft: 5}}>
              <Apptext numberOfLines={2} style={styles.jamesTxt}>
                {name}
              </Apptext>
              <Apptext numberOfLines={1} style={styles.locTxt}>
                {location}
              </Apptext>
            </View>
          </View>
        </View>
      ) : null}
      {/* Propsal Ends Here */}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatlistStyle}
        horizontal
        data={data}
        renderItem={({item, index}) => (
          <CheckMarkComponent
            mark={item?.mark && appIcons.circleTick}
            title={item?.mark && item.title}
          />
        )}
      />
      <View style={styles.txtView}>
        <Apptext style={styles.txtVal}>{labelValue}</Apptext>
      </View>
    </TouchableOpacity>
  );
};

export default ReviewsComp;

const styles = StyleSheet.create({
  direcView: {
    flexDirection: 'row',
    marginTop: wp('1%'),
  },
  jcImg: {
    width: widthPixel(55),
    height: widthPixel(55),
  },
  locTxt: {
    color: colors.black,
    fontFamily: fonts.Poppins_Light,
    fontSize: fontPixel(17),
  },
  lastDirec: {
    marginHorizontal: wp('3%'),
    marginTop: wp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  HumanInput: {
    paddingLeft: wp('2%'),
    width: wp('70%'),
  },
  imgView: {
    width: 51,
    // paddingLeft: widthPixel(10),
    marginLeft: widthPixel(7),
    borderRadius: 30,
    height: 51,
  },
  jamesTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 17,
    width: wp('70%'),
    // backgroundColor:"blue"
  },
  imgStl: {
    width: 57,
    height: 57,
    borderRadius: 43,
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp('5%'),
    marginTop: wp('3%'),
    width: wp('80%'),
    // marginTop:wp('4%'),
    // backgroundColor:"red"
  },
  txtVal: {
    fontFamily: 'poppins-Regular',
    fontSize: 14,
  },
  lightTxt: {
    fontSize: 8,
    marginTop: wp('2%'),
    color: 'lightgray',
  },
  scndTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginTop: wp('1%'),
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: 'gray',
    borderRadius: 5,
  },
  inputContainer: {
    width: wp('90%'),
    marginBottom: wp('3%'),
    alignSelf: 'center',
    // height:105,
    padding: wp('2%'),
    // paddingLeft:wp('4%'),
    backgroundColor: DefaultStyles.colors.white,
    borderBottomColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 3,
  },
  hrtStl: {
    width: 25,
    height: 25,
    marginRight: wp('10%'),
  },
  flatlistStyle: {
    marginLeft: widthPixel(5),
    marginTop: heightPixel(10),
  },
});

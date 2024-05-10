import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DefaultStyles from '../config/Styles';
import Apptext from './Apptext';
import {heightPixel, widthPixel} from '../Constants';

const AgencyHomeComp = ({
  labelValue,
  AvailableRooms,
  BookedRooms,
  onPress,
  firstTxt,
  scndTxt,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.inputContainer, containerStyle]}>
      <View style={styles.subView}>
        <View style={styles.txtView}>
          <Apptext style={styles.txtVal}>
            {labelValue ? labelValue : ''}
          </Apptext>
        </View>
        <View style={styles.availableView}>
          {AvailableRooms && (
            <View style={styles.circle}>
              <Apptext style={[styles.nmbr]}>
                {AvailableRooms ? AvailableRooms : 0}
              </Apptext>
            </View>
          )}
          <Apptext style={[styles.txt]}>{firstTxt ? firstTxt : ''}</Apptext>
        </View>
        <View style={styles.rightCricleView}>
          <View style={[styles.circle, {backgroundColor: '#999999'}]}>
            <Apptext style={[styles.nmbr, {color: 'white'}]}>
              {BookedRooms ? BookedRooms : ''}
            </Apptext>
          </View>
          <Apptext style={[styles.txt, {color: 'white'}]}>
            {scndTxt ? scndTxt : ''}
          </Apptext>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AgencyHomeComp;

const styles = StyleSheet.create({
  HumanInput: {
    paddingLeft: wp('2%'),
    width: wp('70%'),
  },
  imgStl: {
    width: 57,
    height: 57,
    borderRadius: 43,
  },
  txtView: {
    justifyContent: 'center',
    width: wp('45%'),
  },
  txtVal: {
    fontFamily: 'poppins-Regular',
    fontSize: 25,
    color: 'white',
  },
  availableView: {
    width: wp('20%'),
    alignItems: 'center',
  },
  btm: {
    marginTop: wp('20%'),
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
  nmbr: {
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
    lineHeight: 35,
  },
  txt: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: DefaultStyles.colors.white,
  },
  rightCricleView: {
    width: wp('20%'),
    alignItems: 'center',
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
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hrtStl: {
    width: 25,
    height: 25,
    marginRight: wp('10%'),
  },
});

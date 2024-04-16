import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {callApi, Method} from '../../../network/NetworkManger';
import {api} from '../../../network/Environment';
import {useFocusEffect} from '@react-navigation/native';
import {RedFlashMessage} from '../../../Constants/Utilities/assets/Snakbar';

const Terms = ({navigation}) => {
  const [termsData, setTermsData] = useState('');

  useFocusEffect(
    useCallback(() => {
      termsAndCondition();
    }, []),
  );
  const termsAndCondition = async () => {
    try {
      const bodyParams = {};
      // console.log('bodyParams ', bodyParams);
      const onSuccess = result => {
        // console.log(
        //   'terms and condition data => ',
        //   JSON.stringify(result, ' ', 2),
        // );
        setTermsData(result?.data?.data[0]?.data);
      };
      const onError = error => {
        if (error) {
          RedFlashMessage(error);
        }
      };
      await callApi(
        Method.GET,
        api.termsAndConditions,
        bodyParams,
        onSuccess,
        onError,
      );
    } catch (error) {
      console.log('error while hitting sign up api ', error);
    }
  };

  return (
    <AppGLobalView
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <IconHeaderComp
        onPress={() => {
          {
            navigation.goBack();
            setTermsData('');
          }
        }}
        imgName={iconPath.leftArrow}
        title={'Terms & Condition'}
        style={styles.createTxt}
      />
      <Apptext style={styles.termsTxt}>{termsData}</Apptext>
    </AppGLobalView>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  createTxt: {
    marginTop: wp('11%'),
    color: DefaultStyles.colors.black,
    fontFamily: 'Poppins-SemiBold',
    fontSize: wp('5%'),
    marginHorizontal: wp('5%'),
  },
  termsTxt: {
    marginTop: 14,
    textAlign: 'left',
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
    width: wp('90%'),
  },
});

import React, {useState, useCallback} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
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
import Loader from '../../../components/Loader';

const Terms = ({navigation}) => {
  const [termsData, setTermsData] = useState('');
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      termsAndCondition();
    }, []),
  );
  const termsAndCondition = async () => {
    setLoading(true);
    try {
      const bodyParams = {};
      const onSuccess = result => {
        setTermsData(result?.data?.data[0]?.data);
        setLoading(false);
      };
      const onError = error => {
        if (error) {
          RedFlashMessage(error);
          setLoading(false);
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
      setLoading(false);
    } finally {
      setLoading(false);
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
        title={'Terms & Conditions'}
        style={styles.createTxt}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Apptext style={styles.termsTxt}>{termsData}</Apptext>
      </ScrollView>
      <Loader isVisible={loading} />
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

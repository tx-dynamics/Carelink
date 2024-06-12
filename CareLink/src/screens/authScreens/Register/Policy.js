import React, {useState, useCallback} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../config/Styles';
import Apptext from '../../../components/Apptext';
import IconHeaderComp from '../../../components/IconHeaderComp';
import {iconPath} from '../../../config/icon';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../network/Environment';
import {callApi, Method} from '../../../network/NetworkManger';
import {useFocusEffect} from '@react-navigation/native';
import Loader from '../../../components/Loader';

const Policy = ({navigation}) => {
  const [privacyData, setPrivacyData] = useState('');
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
        setPrivacyData(result?.data?.data[0]?.data);
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
        api.privacyPolicy,
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
          }
        }}
        imgName={iconPath.leftArrow}
        title={'Privacy Policy'}
        style={styles.createTxt}
      />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Apptext style={styles.termsTxt}>{privacyData}</Apptext>
      </ScrollView>
      <Loader isVisible={loading} />
    </AppGLobalView>
  );
};

export default Policy;

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

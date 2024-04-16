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
import {api} from '../../../network/Environment';
import {callApi, Method} from '../../../network/NetworkManger';
import {useFocusEffect} from '@react-navigation/native';

const Policy = ({navigation}) => {
  const [privacyData, setPrivacyData] = useState('');

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
        setPrivacyData(result?.data?.data[0]?.data);
      };
      const onError = error => {
        if (error) {
          RedFlashMessage(error);
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
      console.log('error while hitting privacy policy api ', error);
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
            setPrivacyData('');
          }
        }}
        imgName={iconPath.leftArrow}
        title={'Privacy Policy'}
        style={styles.createTxt}
      />
      <Apptext style={styles.termsTxt}>
        {privacyData}
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum, sed eros, scelerisque velit. Consectetur nec in elit porttitor malesuada aenean tortor. Consequat, at tincidunt quis amet imperdiet aliquam. Feugiat tortor malesuada phasellus id enim in. Tincidunt consectetur morbi enim, viverra habitant commodo sed phasellus non. Hendrerit habitasse aenean

        sem nibh enim, ultricies duis arcu. Praesent vitae ultrices cursus integer egestas lobortis feugiat ut leo. Semper tempor, eu ornare et, tempus scelerisque quisque eget duis.
        Metus amet, aliquet cursus at in et amet. Sem mauris aliquam ac sed orci mauris senectus. Purus eget faucibus dui nulla felis, vulputate sapien quis. Egestas vel, sed faucibus enim. Imperdiet nibh nibh elit a porttitor. Consectetur lacinia consectetur pellentesque felis. Consequat proin nec tincidunt viverra nulla convallis urna. */}
      </Apptext>
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

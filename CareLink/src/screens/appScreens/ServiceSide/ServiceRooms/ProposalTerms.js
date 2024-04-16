import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ActivityIndicator,
  Text,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import FormButton from '../../../../components/FormButton';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';

const ProposalTerms = ({navigation}) => {
  return (
    <AppGLobalView style={styles.container}>
      <Header
        headerLabel={'Terms & Conditions'}
        leftImgName={require('../../../../../assets/headerBack.png')}
        onPressLeft={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.marginView}>
          <Apptext
            style={[
              styles.rms,
              {
                fontSize: 24,
                fontFamily: 'Poppins-Regular',
              },
            ]}>
            Accept the terms and conditions of agency
          </Apptext>
        </View>

        <View style={[styles.txtView, {marginTop: wp('5%')}]}>
          <Apptext style={styles.rms}>Terms and Conditions</Apptext>
        </View>

        <Apptext style={styles.dummyTxt}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel in
          ipsum duis suspendisse. Ut urna, tristique magnis mauris, volutpat
          purus. Aliquam commodo, sed nunc tincidunt ultrices volutpat sem
          metus. Est, volutpat elit consectetur fames arcu elit interdum vivamus
          molestie. In dignissim eleifend massa euismod molestie risus, in.
          Eleifend volutpat, varius pulvinar purus ultricies sit at consectetur
          mauris. Ultrices vulputate nam molestie pellentesque lectus. Ut sem
          leo varius posuere pellentesque.
        </Apptext>
        <Apptext style={styles.dummyTxt}>
          sem nibh enim, ultricies duis arcu. Praesent vitae ultrices cursus
          integer egestas lobortis feugiat ut leo. Semper tempor, eu ornare et,
          tempus scelerisque quisque eget duis. Metus amet, aliquet cursus at in
          et amet. Sem mauris aliquam ac sed orci mauris senectus. Purus eget
          faucibus dui nulla felis, vulputate sapien quis. Egestas vel, sed
          faucibus enim. Imperdiet nibh nibh elit a porttitor. Consectetur
          lacinia consectetur pellentesque felis. Consequat proin nec tincidunt
          viverra nulla convallis urna.
        </Apptext>
        {/* /////////////////////////////////////// */}

        <View style={{marginTop: wp('15%')}}>
          <FormButton
            width={wp('90%')}
            buttonTitle={'Accept'}
            color={'white'}
            onPress={() => {
              navigation.navigate('withoutBottomTabnavigator', {
                screen: 'ProposalAccept',
              });
            }}
          />
        </View>
      </ScrollView>
    </AppGLobalView>
  );
};

export default ProposalTerms;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: wp('3%'),
    marginHorizontal: wp('5%'),
  },
  rms: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  pinkBox: {
    backgroundColor: DefaultStyles.colors.primary,
    borderRadius: 5,
    padding: 3,
  },
  dtls: {
    color: DefaultStyles.colors.white,
    fontSize: 11,
  },
  marginView: {
    marginHorizontal: wp('5%'),
    marginTop: -5,
  },
  ltst: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  searchBar: {
    height: 47,
    width: wp('90%'),
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: wp('4%'),
    borderRadius: 9,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  directionView: {
    flexDirection: 'row',
    marginTop: wp('6%'),
  },
  jobsTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    marginLeft: wp('5%'),
  },
  pinkBox1: {
    backgroundColor: '#ffabff',
    marginTop: wp('5%'),
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('23%'),
  },
  pinkboxTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
  },
  dummyTxt: {
    marginHorizontal: wp('5%'),
    marginTop: wp('6%'),
  },
});

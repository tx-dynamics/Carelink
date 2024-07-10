import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import FormButton from '../../../../components/FormButton';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {api} from '../../../../network/Environment';
import {callApi, Method} from '../../../../network/NetworkManger';
import Loader from '../../../../components/Loader';
import {routes} from '../../../../Constants';

const ProposalTerms = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log('ProposalTerms', route?.params?.item);

  const handleSubmit = () => {
    if (route?.params?.fromReceivedProposal) {
      try {
        setIsLoading(true);
        const endPoint = `${api.getProposal}/${route?.params?.item?._id}`;
        const bodyParams = {
          accepted: true,
          status: 'approved',
        };
        console.log('End poinmt ', endPoint);
        const onSuccess = result => {
          console.log('Result is', result);
          navigation.navigate('ProposalAccept', {
            agencyName: route?.params?.item?.proposer?.name,
          });
          setIsLoading(false);
        };

        const onError = error => {
          console.log('Error is', error);
          setIsLoading(false);
        };

        callApi(Method.PATCH, endPoint, bodyParams, onSuccess, onError);
      } catch (error) {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    } else {
      navigation.navigate('withoutBottomTabnavigator', {
        screen: 'PaymentTerms',
      });
    }
  };
  return (
    <AppGLobalView style={styles.container}>
      <Header
        headerLabel={'Terms & Conditions'}
        leftImgName={require('../../../../../assets/headerBack.png')}
        onPressLeft={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.txtView, {marginTop: wp('5%')}]}>
          <Apptext style={styles.rms}>Additional Terms and Conditions</Apptext>
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
            buttonTitle={'Agree'}
            color={'white'}
            onPress={() => handleSubmit()}
          />
        </View>
      </ScrollView>
      <Loader isVisible={isLoading} />
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

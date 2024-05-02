import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import {appIcons} from '../../../../Constants/Utilities/assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppTextInput from '../../../../components/AppTextInput/AppTextInput';
import {heightPixel} from '../../../../Constants';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../../../Constants/Utilities/assets/Snakbar';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useRoute} from '@react-navigation/native';
import {callApi, Method} from '../../../../network/NetworkManger';
import {api} from '../../../../network/Environment';
import Loader from '../../../../components/Loader';

const SendProposal = ({navigation}) => {
  const {proposalRawData} = useRoute()?.params;
  const [coverLetter, setCoverLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onPressSubmit = () => {
    if (coverLetter == '') {
      RedFlashMessage('Please write a cover letter for submission ');
      return;
    } else if (coverLetter?.length < 99) {
      RedFlashMessage('Cover Letter required atleast 100 characters ');
    } else {
      submitProposalTo();
    }
  };

  const submitProposalTo = async () => {
    try {
      setIsLoading(true);
      const endPoint = api.createProposal;
      const bodyParams = {
        listing: proposalRawData?.listingId,
        proposer: proposalRawData?.agencyId,
        proposee: proposalRawData?.serviceProviderId,
        coverLetter: coverLetter,
        accepted: true,
      };
      const onSuccess = result => {
        setIsLoading(false);
        SuccessFlashMessage('Your proposal has been submitted');
        navigation.navigate('AgencyHome');
      };

      const onError = error => {
        console.log('🚀 ~ onError ~ error:', error);
        setIsLoading(false);
      };

      await callApi(Method.POST, endPoint, bodyParams, onSuccess, onError);
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage('Something went wrong, While submiting proposal');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppGLobalView style={styles.container}>
      <Loader isVisible={isLoading} />
      <Header
        headerLabel={'Submit Proposal'}
        leftImgName={appIcons.headerBack}
        onPressLeft={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{}}>
        <Apptext style={styles.dtlsTxt}>
          Write Your Effective Proposal or cover letter to win this Listing
        </Apptext>
        <AppTextInput
          value={coverLetter}
          onChangeText={setCoverLetter}
          title={'Cover Letter'}
          multiline
          containerStyle={{
            height: null,
            minHeight: heightPixel(80),
            maxHeight: heightPixel(220),
          }}
        />
        <Apptext style={styles.dtlsTxt}>
          {coverLetter !== '' && coverLetter?.length}
        </Apptext>
      </KeyboardAwareScrollView>
      <FormButton buttonTitle={'Submit Now'} onPress={onPressSubmit} />
    </AppGLobalView>
  );
};

export default SendProposal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: wp('5%'),
    marginHorizontal: wp('5%'),
  },
  directionView: {
    flexDirection: 'row',
    marginTop: wp('6%'),
  },
  rms: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  dtlsTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    marginHorizontal: wp('5%'),
    // marginTop: wp('5%'),
  },
  jobsTxt: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    marginHorizontal: wp('5%'),
  },
  marginView: {
    marginHorizontal: wp('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ltst: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  pinkBox: {
    backgroundColor: '#ffabff',
    marginTop: wp('5%'),
    borderRadius: 6,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('23%'),
  },
  pinkboxTxt: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 90,
  },
});

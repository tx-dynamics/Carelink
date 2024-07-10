import React from 'react';
import {StyleSheet, ScrollView, FlatList, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import ServiceListingComp from '../../../../components/ServiceListingComp';
import FormButton from '../../../../components/FormButton';
import {heightPixel, routes, widthPixel} from '../../../../Constants';
import AvailableFacilityComp from '../../../../components/AvaialableFacilityComp/AvailableFacilityComp';
import {appIcons} from '../../../../Constants/Utilities/assets';
import SimpleImageComponent from '../../../../components/SimpleImageComponent/SimpleImageComponent';
import DetailTextComp from '../../../../components/DetailTextComp/DetailTextComp';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import moment from 'moment';

const ReceivedProposal = ({navigation, route}) => {
  console.log('Routes are', JSON.stringify(route?.params?.item));

  var Startduration = moment?.utc(
    moment
      ?.duration(route?.params?.item?.listing?.availabilityStart)
      ?.asMilliseconds(),
  );
  var Endduration = moment?.utc(
    moment
      ?.duration(route?.params?.item?.listing?.availabilityEnd)
      ?.asMilliseconds(),
  );

  console.log('Start duration', Startduration);
  console.log('End duration', Endduration);

  const daysDifference = Endduration?.diff(Startduration, 'days');

  return (
    <AppGLobalView style={styles.container}>
      <Header
        headerLabel={'Proposal'}
        leftImgName={appIcons.headerBack}
        onPressLeft={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.txtView, {marginTop: heightPixel(1)}]}>
          <Apptext style={styles.rms}>Agency Details</Apptext>
          {/* <TouchableOpacity style={styles.pinkBox}>
            <Apptext style={styles.dtls}>Agency Details</Apptext>
          </TouchableOpacity> */}
        </View>
        <View style={{marginTop: wp('5%')}}>
          <ServiceListingComp
            reviews
            onPress={() =>
              navigation.navigate(routes.agencyDetail, {isChat: false})
            }
            showProposals={true}
            showTags={false}
            labelValue={[
              route?.params?.item?.listing?.availabilityStart,
              route?.params?.item?.listing?.availabilityEnd,
            ]}
            pic={route?.params?.item?.proposer?.image}
            name={route?.params?.item?.proposer?.name}
            location={route?.params?.item?.proposer?.experience}
            rightTxt={''}
          />
        </View>
        <View style={[styles.txtView]}>
          <Apptext style={styles.rms}>Room Details</Apptext>
        </View>
        <View style={{marginLeft: widthPixel(50)}}>
          <DetailTextComp
            title={'Rooms'}
            detail={route?.params?.item?.listing?.rooms[0]?.room}
          />
          <DetailTextComp
            title={'Floor'}
            detail={route?.params?.item?.listing?.rooms[0]?.floor}
          />
          <DetailTextComp title={'For'} detail={daysDifference + ' Days'} />
        </View>
        <View style={styles.directionView}>
          <Apptext style={styles.jobsTxt}> Note : </Apptext>
          <Apptext style={styles.lrmTxt}>
            {route?.params?.item?.listing?.notes}
          </Apptext>
        </View>
        <View style={styles.basicsView}>
          {route?.params?.item?.listing?.entities.map((item, index) => (
            <AvailableFacilityComp key={index} title={item?.name} />
          ))}
        </View>
        <View style={[styles.txtView, {marginTop: heightPixel(15)}]}>
          <Apptext style={styles.rms}>Images</Apptext>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          horizontal
          data={route?.params?.item?.listing?.photos}
          keyExtractor={(item, index) => index}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SimpleImageComponent pic={item} disabled />
          )}
          style={styles.imgFlatlistStyle}
        />
        <View style={[styles.txtView, {marginTop: heightPixel(20)}]}>
          <Apptext style={styles.rms}>Proposals</Apptext>
        </View>
        <Apptext style={styles.sameTxt}>
          {route?.params?.item?.coverLetter}
        </Apptext>

        {/* /////////////////////////////////////// */}
        <View style={{marginTop: heightPixel(20)}}>
          <FormButton
            buttonTitle={'Reject'}
            backgroundColor={'#e6e6e6'}
            color={'black'}
          />
        </View>
        <FormButton
          buttonTitle={'Accept'}
          color={'white'}
          onPress={() =>
            navigation.navigate('withoutBottomTabnavigator', {
              screen: 'ProposalTerms',
              params: {
                fromReceivedProposal: true,
                item: route?.params?.item,
              },
            })
          }
        />
      </ScrollView>
    </AppGLobalView>
  );
};

export default ReceivedProposal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
    paddingBottom: heightPixel(20),
  },
  txtView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: wp('3%'),
    marginHorizontal: wp('5%'),
  },
  rms: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  imgFlatlistStyle: {
    alignSelf: 'flex-start',
    marginTop: heightPixel(0),
    marginLeft: widthPixel(20),
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
    marginTop: heightPixel(10),
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
  basicsView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginLeft: widthPixel(20),
  },
  lrmTxt: {
    width: wp('70%'),
    marginTop: wp('1%'),
    fontSize: 12,
  },
  ktTxtView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 21,
    marginLeft: wp('15%'),
  },
  sameTxt: {
    marginHorizontal: wp('5%'),
    marginTop: heightPixel(10),
  },
  availableFlatlist: {
    marginLeft: widthPixel(20),
    marginTop: heightPixel(20),
    alignSelf: 'flex-start',
  },
});

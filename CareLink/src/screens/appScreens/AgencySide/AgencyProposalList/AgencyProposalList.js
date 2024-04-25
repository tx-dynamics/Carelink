import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../../config/colors';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import {agencyData} from '../AgencyHome/AgencyHome';
import CustomerListingComp from '../../../../components/CustomerListingComp/CustomerListingComp';
import {
  fontPixel,
  heightPixel,
  routes,
  widthPixel,
} from '../../../../Constants';
import {fonts} from '../../../../Constants/Fonts';
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useRoute} from '@react-navigation/native';

const AgencyProposalList = ({navigation}) => {
  // routes data
  const {proposalData} = useRoute()?.params;
//   console.log(
//     '🚀 ~ AgencyProposalList ~ proposalData:',
//     JSON.stringify(proposalData, ' ', 2),
//   );

  // const proposalData = [
  //     {
  //         id: 1,
  //         title: "Submitted Proposals",
  //         data: agencyData
  //     },
  //     {
  //         id: 2,
  //         title: "Submitted Proposals",
  //         data: agencyData
  //     },
  // ]
  const DATA = [
    {
      title: 'Submitted Proposals',
      data: proposalData?.proposalList,
      count: proposalData?.proposalList?.length,
    },
    {
      title: 'Accepted Proposals',
      data: proposalData?.proposalList,
      count: proposalData?.countsData?.accepted,
    },
  ];
  return (
    <AppGLobalView style={styles.container}>
      <IconHeaderComp
        title={'Proposal'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <SectionList
        sections={DATA}
        renderItem={({item}) => (
          <CustomerListingComp
            title={item?.listing?.rooms[0]?.room}
            durationData={[
              item?.listing?.availabilityStart,
              item?.listing?.availabilityEnd,
            ]}
            facilityData={item?.listing?.entities}
            // onPress={() =>
            //   navigation.navigate(routes.roomDetails, {
            //     item: item?.listing,
            //   })
            // }
          />
        )}
        renderSectionHeader={({section: {title, data, count}}) => (
          <LeftSideBoldHeading
            mainStyle={styles.sectionTitleText}
            title={title}
            number={count}
          />
        )}
      />
    </AppGLobalView>
  );
};

export default AgencyProposalList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sectionTitleText: {
    marginVertical: heightPixel(10),
  },
});

import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../../../config/colors';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import {iconPath} from '../../../../config/icon';
import UploadDocumentComp from '../../../../components/UploadDocumentComp/UploadDocumentComp';
import {heightPixel, routes} from '../../../../Constants';
import {appIcons} from '../../../../Constants/Utilities/assets';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {useSelector} from 'react-redux';

const CertifcateScreen = ({navigation}) => {
  const userData = useSelector(store => store?.userDataSlice);
  console.log('User data is', userData?.userData?.drivingAbstract);
  const certifcateData = [
    {
      id: 1,
      title: 'Certificates',
      subtitle: 'You have uploaded your certificates to verify with platform',
      pic: userData?.userData?.certificates[0],
    },
    {
      id: 2,
      title: 'Driving Abstract',
      subtitle:
        'You have uploaded your driving abstract to verify with platform',
      pic: userData?.userData?.drivingAbstract,
    },
    {
      id: 3,
      title: 'Home Photo',
      subtitle: 'You have uploaded your home’s photo to verify with platform',
      pic: userData?.userData?.drivingLicense,
    },
  ];
  return (
    <AppGLobalView>
      <IconHeaderComp
        title={'Certificates'}
        imgName={iconPath.leftArrow}
        onPress={() => navigation.goBack()}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View style={{marginBottom: heightPixel(20)}}></View>
        )}
        keyExtractor={item => item.id}
        data={certifcateData}
        renderItem={({item, index}) => (
          <UploadDocumentComp
            onPress={() =>
              navigation.navigate(routes.certificateDetail, {item: item})
            }
            title={item.title}
            btnTitle="See Now"
            subTitle={item.subtitle}
          />
        )}
      />
    </AppGLobalView>
  );
};

export default CertifcateScreen;

const styles = StyleSheet.create({});

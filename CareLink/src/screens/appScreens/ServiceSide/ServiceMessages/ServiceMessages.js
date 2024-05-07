import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View, Alert} from 'react-native';
import DefaultStyles from '../../../../config/Styles';
import Header from '../../../../components/Header';
import InboxComp from '../../../../components/InboxComp';
import {DrawerActions, useIsFocused} from '@react-navigation/native';
import {heightPixel, widthPixel} from '../../../../Constants';
import {appIcons} from '../../../../Constants/Utilities/assets';
import SearchComponent from '../../../../components/SearchComponent/SearchComponent';
import colors from '../../../../config/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector} from 'react-redux';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import {BASE_URL} from '../../../../network/Environment';
import {io} from 'socket.io-client';
import Loader from '../../../../components/Loader';
import moment from 'moment';

let socket;
const ServiceMessages = ({navigation}) => {
  const usertype = useSelector(state => state.splash.userType);
  const userData = useSelector(store => store?.userDataSlice);
  const [search, setSearch] = useState('');
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(false);
  const [chatUsers, setChatUsers] = useState([]);
  const DATAService = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      count: '+5',
      label: 'XYZ Rental Agency',
      msg: 'Hi Jackson, can you tell …',
      Img: appIcons.dummyPic2,
      dt: '5 min ago',
      move: 'Detail',
      online: true,
    },
    {
      id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
      count: '',
      label: 'New Rental Agency',
      msg: 'Will do, super, thank you',
      Img: appIcons.dummyPic1,
      dt: '2 hrs ago',
      move: 'Detail',
      online: true,
    },
    {
      id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
      count: '',
      label: 'Pay less Agency',
      msg: 'Will do, super, thank you',
      Img: require('../../../../../assets/photo.png'),
      dt: '2 hrs ago',
      move: 'Detail',
      online: true,
    },
  ];
  const DATAAgency = [
    {
      id: 1,
      label: 'James Clear',
      msg: 'Hi Jackson, can you tell …',
      dt: '12 mins ago',
      Img: appIcons.dummyPic2,
      online: true,
    },
    {
      id: 1,
      label: 'Camron',
      msg: 'Hi Jackson, can you tell …',
      dt: '29 mins ago',
      Img: appIcons.dummyPic2,
      online: false,
    },
    {
      id: 1,
      label: 'Zaur',
      msg: 'Hi Jackson, can you tell …',
      dt: '2 hrs ago',
      Img: appIcons.dummyPic2,
      online: false,
    },
  ];
  let DATA = usertype == 'ServiceSide' ? DATAService : DATAAgency;

  useEffect(() => {
    socket = io(BASE_URL);

    let data = {
      userId: userData?.userData?._id,
    };

    // if (user?.userData?.role == 'guest') {
    //   Alert.alert(
    //     'Guest Alert',
    //     "Can't get chat, Please Login to access.",
    //     [
    //       {
    //         text: 'OK',
    //       },
    //     ],
    //     {cancelable: false},
    //   );
    // }

    if (isFocused) {
      setIsLoading(true);
      socket.emit('user-enter', {userId: userData?.userData?._id});
      socket.emit('get-inboxes', data); // sending
      socket.on('inboxes', res => {
        setChatUsers(res?.data?.inboxes);
        if (res?.data?.inboxes) console.log('Inboxes data', res?.data?.inboxes);
        setIsLoading(false);
      });
      socket.emit('get-online-users', data); // sending
      socket.on('online-users', res => {
        console.log('Online users', JSON.stringify(res));
      });

      socket.on('error', error => {
        console.log(error);
        setIsLoading(false);
      });
    }
  }, [isFocused]);

  return (
    <AppGLobalView style={styles.container}>
      <Header
        headerLabel={'Inbox'}
        rightImg={usertype == 'ServiceSide' ? appIcons.thirdTab : false}
        leftImgStyle={styles.leftImgStyle}
        rightImgStyle={styles.rightImgStyle}
        leftImgName={
          usertype == 'ServiceSide' ? appIcons.drawerIcon : appIcons.leftArrow
        }
        onPressLeft={() =>
          usertype == 'ServiceSide'
            ? navigation.dispatch(DrawerActions.toggleDrawer())
            : navigation.goBack()
        }
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <SearchComponent onChangeText={item => setSearch(item)} />
        <View style={{marginTop: heightPixel(10)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            ListHeaderComponent={() => (
              <View style={{marginTop: heightPixel(20)}}></View>
            )}
            data={chatUsers?.filter(data =>
              data?.name?.toLowerCase()?.includes(search.toLowerCase()),
            )}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
              <InboxComp
                online={appIcons.online}
                tintColor={item?.online ? null : colors.gray}
                time={moment(parseInt(item?.lastMessageTime))?.format(
                  'HH:mm A',
                )}
                image={item?.image}
                label={item?.name}
                message={item?.lastMessage}
                onPress={() =>
                  navigation.navigate('withoutBottomTabnavigator', {
                    screen: 'ServiceChatDetail',
                    params: {isContract: false},
                  })
                }
              />
            )}
          />
        </View>
      </KeyboardAwareScrollView>
      <Loader isVisible={isLoading} />
    </AppGLobalView>
  );
};

export default ServiceMessages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  leftImgStyle: {
    width: widthPixel(23),
    height: heightPixel(16),
  },
  rightImgStyle: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
});

import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import ChatDetailComp from '../../../../components/ChatDetailComp';
import {heightPixel, routes, widthPixel} from '../../../../Constants';
import colors from '../../../../config/colors';
import SendMessageComponent from '../../../../components/SendMessageComponent/SendMessageComponent';
import {userType} from '../../../../redux/Slices/splashSlice';
import {useSelector} from 'react-redux';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import ChatHeader from '../../../../components/ChatHeader';
import io from 'socket.io-client';

const ServiceChatDetail = ({navigation, route}) => {
  const ref = useRef(null);
  const usertype = useSelector(state => state.splash.userType);
  const userData = useSelector(store => store?.userDataSlice);
  const [isLoading, setIsLoading] = useState(false);
  console.log('User data is ', userData);
  const [isMessage, setMessage] = useState('');
  const [DATA, setData] = useState([
    {
      id: 1,
      user: 1,
      title: 'Lorum ipsum dolor emet',
    },
    {
      id: 2,
      user: 2,
      title: 'Lorum ipsum dolor emet',
    },
  ]);

  useEffect(() => {
    socket = io('http://ec2-16-171-135-81.eu-north-1.compute.amazonaws.com/');
    setIsLoading(true);
    let data = {
      inbox: partner,
      userId: user?.userData?._id,
    };
    let data2 = {
      userId: user?.userData?._id,
      inbox: partner,
    };
    socket.emit('user-enter', {userId: user?.userData?._id});
    if (CommunityChat == true) {
      socket.emit('get-messages-of-community', data); // sending
      socket.on('messages', res => {
        setMessages(res?.data?.messages);
        setIsLoading(false);
      });
    } else if (CommunityChat == false) {
      socket.emit('get-messages', data2); // sending
      socket.on('messages', res => {
        setMessages(res?.data?.messages);
        console.log(JSON.stringify(res));
        setIsLoading(false);
      });
    }
    socket.on('error', error => {
      console.log(error);
      setIsLoading(false);
    });
    return function cleanup() {
      socket.emit('user-leave', data);
    };
  }, []);

  const onSend = () => {
    let temp = [...DATA];
    temp.unshift({
      id: temp.length + 1,
      user: 1,
      title: isMessage,
    });
    setData(temp);
    ref.current.scrollToIndex({animated: false, index: 0});
    setMessage('');
  };
  return (
    <AppGLobalView style={styles.container}>
      <ChatHeader
        rightView={!route?.params?.isContract}
        onPressRight={() =>
          navigation.navigate(
            userType == 'ServiceSide'
              ? routes.receivedContracts
              : routes.createContract,
          )
        }
        rightText={usertype == 'ServiceSide' ? 'Contracts' : 'Make Contract'}
        headerLabel={'Chat'}
        leftImgName={require('../../../../../assets/headerBack.png')}
        onPressLeft={() => navigation.goBack()}
      />

      <View style={styles.direView}>
        <Image
          style={styles.imgStl}
          source={require('../../../../../assets/inbox.png')}
        />
        <Apptext style={styles.rms}>James Clear</Apptext>
      </View>
      <View style={{marginTop: heightPixel(10), flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          inverted
          ref={ref}
          // initialScrollIndex={DATA.length - 1}
          keyExtractor={(item, index) => item.id}
          // ItemSeparatorComponent={() => <View style={{ marginBottom: heightPixel(7) }}></View>}
          data={DATA}
          renderItem={({item, index}) =>
            item?.user == 1 ? (
              <MyMessage msg={item.title} />
            ) : (
              <ChatDetailComp msg={item.title} />
            )
          }
        />
      </View>
      <SendMessageComponent
        disabled={isMessage == '' ? true : false}
        onChangeText={setMessage}
        value={isMessage}
        onPress={onSend}
      />
    </AppGLobalView>
  );
};
const MyMessage = React.memo(({msg}) => {
  return (
    <View style={styles.PicMainView}>
      <View style={styles.msgView}>
        <Apptext style={styles.msgTxt}>{msg}</Apptext>
      </View>
      <Apptext style={styles.timeTxt}>04:30 PM</Apptext>
    </View>
  );
});
export default ServiceChatDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: DefaultStyles.colors.white,
    flex: 1,
  },
  timeTxt: {
    textAlign: 'left',
    fontSize: 11,
    color: DefaultStyles.colors.lightPrimary,
    marginTop: heightPixel(5),
    marginLeft: widthPixel(5),
  },
  marginView: {
    alignSelf: 'center',
  },
  rms: {
    // marginTop: wp('10%'),
    marginLeft: wp('2%'),
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
  },
  PicMainView: {
    alignSelf: 'flex-end',
    marginRight: widthPixel(15),
    marginBottom: heightPixel(10),
  },
  msgView: {
    maxWidth: widthPixel(330),
    borderRadius: widthPixel(30),
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(20),
    backgroundColor: '#e5e5e5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 3,
  },
  msgTxt: {
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: DefaultStyles.colors.black,
  },
  contractButtonView: {
    position: 'absolute',
    right: widthPixel(20),
  },
  direView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: wp('7%'),
  },
  imgStl: {
    width: widthPixel(63),
    height: widthPixel(63),
    borderRadius: widthPixel(40),
  },
});

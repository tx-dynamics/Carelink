import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, FlatList, Image, View, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DefaultStyles from '../../../../config/Styles';
import Apptext from '../../../../components/Apptext';
import ChatDetailComp from '../../../../components/ChatDetailComp';
import {heightPixel, routes, widthPixel} from '../../../../Constants';
import SendMessageComponent from '../../../../components/SendMessageComponent/SendMessageComponent';
import {userType} from '../../../../redux/Slices/splashSlice';
import {useDispatch, useSelector} from 'react-redux';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
import ChatHeader from '../../../../components/ChatHeader';
import io from 'socket.io-client';
import {BASE_URL} from '../../../../network/Environment';
import colors from '../../../../config/colors';
import {
  setProposalAttender,
  setProposalUsers,
} from '../../../../redux/Slices/proposalSlice';

let socket;
const ServiceChatDetail = ({navigation, route}) => {
  const partner = route?.params?.item?._id;
  const ref = useRef(null);
  const dispatch = useDispatch();
  const propsee = useSelector(store => store?.proposalSlice);
  const usertype = useSelector(state => state.splash.userType);
  const userData = useSelector(store => store?.userDataSlice);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isMessage, setMessage] = useState('');
  const [propsalData, setProposalData] = useState();

  useEffect(() => {
    socket = io(BASE_URL);
    setIsLoading(true);
    let data = {
      userId: userData?.userData?._id,
      inbox: partner,
    };

    socket.emit('get-messages', data); // sending
    socket.on('messages', res => {
      setProposalData(res?.data?.proposals);
      console.log('messages', res?.data);
      dispatch(setProposalUsers(res?.data?.proposals));
      dispatch(setProposalAttender(res?.data?.proposals?.proposee));
      setMessages(res?.data?.messages);
      setIsLoading(false);
    });

    socket.on('error', error => {
      console.log(error);
      setIsLoading(false);
    });
    return function cleanup() {
      socket.emit('user-leave', data);
    };
  }, [isMessage]);

  const onSend = async () => {
    var singleChatData = {
      to: partner,
      userId: userData?.userData?._id,
      message: isMessage,
      messageType: 'text',
      messageTime:
        new Date().getTime() + new Date().getTimezoneOffset() * 60000,
    };

    socket.emit('send-message', singleChatData);
    setMessage('');
  };

  return (
    <AppGLobalView style={styles.container}>
      <ChatHeader
        rightView={!route?.params?.isContract}
        onPressRight={() =>
          navigation.navigate(
            userType === 'ServiceSide'
              ? routes.receivedContracts
              : routes.proposalListing,
            {
              item: route?.params?.item,
              proposalData: propsalData,
            },
          )
        }
        rightText={usertype == 'ServiceSide' ? 'Contracts' : 'Make Contract'}
        headerLabel={'Chat'}
        leftImgName={require('../../../../../assets/headerBack.png')}
        onPressLeft={() => navigation.goBack()}
      />
      <Text style={{color: 'red'}}>{messages[0]?.message}</Text>
      <View style={styles.direView}>
        <Image
          style={styles.imgStl}
          source={{uri: route?.params?.item?.image}}
        />
        <Apptext style={styles.rms}>{route?.params?.item?.name}</Apptext>
      </View>
      <View style={{flex: 1, marginTop: heightPixel(10)}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          inverted
          ref={ref}
          keyExtractor={(item, index) => item?._id}
          data={messages}
          renderItem={({item, index}) => {
            console.log(item?.sender, userData?.userData?._id),
              item?.sender == userData?.userData?._id ? (
                <MyMessage msg={item?.message} key={index} />
              ) : (
                <ChatDetailComp msg={item?.message} key={index} />
              );
          }}
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

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {fontPixel, heightPixel} from '../../Constants';
import colors from '../../config/colors';
import {fonts} from '../../Constants/Fonts';
import {getDeviceId} from 'react-native-device-info';
import {getFCMToken} from '../../Services/HelpingMethods';
import {api} from '../../network/Environment';
import {Method, callApi} from '../../network/NetworkManger';
import {
  RedFlashMessage,
  SuccessFlashMessage,
} from '../../Constants/Utilities/assets/Snakbar';
import Loader from '../Loader';

const CountDownComponent = ({email, setIsOTP, isOTP, fromForgotPassword}) => {
  const [duration, setDuration] = useState(59);
  const [paused, setPaused] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timerId;
    timerId = setInterval(() => {
      setDuration(prev => prev - 1);
    }, 1000);

    if (duration === 0 && isOTP === '') {
      // console.log(`Time's up`);
      clearInterval(timerId);
    } else if (duration === 0) {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [paused, duration]);

  const handleSubmit = async () => {
    let fcm = await getFCMToken();
    try {
      setIsLoading(true);
      const endPoint = api.resendOTP;
      const data = {
        email: email?.toLowerCase(),
        device: {id: getDeviceId(), deviceToken: fcm},
      };

      await callApi(
        Method.POST,
        endPoint,
        data,
        res => {
          if (res?.status === 200 || res?.status === 201) {
            setIsLoading(false);
            setIsOTP('');
            setDuration(59);
            SuccessFlashMessage(res?.message);
          } else {
            setIsLoading(false);
            RedFlashMessage(res?.message);
          }
        },
        err => {
          setIsLoading(false);
          RedFlashMessage(err);
        },
      );
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsOTP('');
    try {
      setIsLoading(true);
      const endPoint = api.forgotPassword;
      const data = {
        email: email.toLowerCase(),
      };

      await callApi(
        Method.POST,
        endPoint,
        data,
        res => {
          if (res?.status === 200 || res?.status === 201) {
            setIsLoading(false);
            setIsOTP('');
            setDuration(59);
            SuccessFlashMessage(res?.message);
          } else {
            setIsLoading(false);
            RedFlashMessage(res?.message);
          }
        },
        err => {
          setIsLoading(false);
          RedFlashMessage(err);
        },
      );
    } catch (error) {
      setIsLoading(false);
      RedFlashMessage(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>
        {/* {"00:" + duration > 9 ? duration : "00:" + `0${duration}`} */}
        {duration > 9 ? `00:${duration}` : `00:0${duration}`}
      </Text>
      <Text style={styles.didntText}>
        Didn’t get code?{' '}
        <Text
          onPress={fromForgotPassword ? handleResendOTP : handleSubmit}
          disabled={duration != 0 ? true : false}
          style={{
            marginTop: heightPixel(10),
            color: duration != 0 ? colors.gray : colors.red,
            textAlign: 'center',
            fontSize: fontPixel(14),
            fontFamily: fonts.Poppins_Medium,
            textDecorationLine: 'underline',
          }}>
          Resend Code
        </Text>
      </Text>
      <Loader isVisible={isLoading} />
    </View>
  );
};

export default CountDownComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: heightPixel(40),
  },
  counterText: {
    color: colors.black,
    textAlign: 'center',
    fontSize: fontPixel(20),
    fontFamily: fonts.Poppins_Medium,
  },
  didntText: {
    marginTop: heightPixel(10),
    color: colors.messageBody,
    textAlign: 'center',
    fontSize: fontPixel(14),
    fontFamily: fonts.Poppins_Medium,
  },
});

import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import {iconPath} from '../config/icon';

const Loader = ({isVisible}) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.5}
      useNativeDriver={Platform.OS === 'android' ? true : false}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View style={styles.container}>
        <LottieView
          source={iconPath.loader}
          autoPlay
          loop
          style={styles.loader}
        />
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    height: 80,
    width: 80,
  },
});

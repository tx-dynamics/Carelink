import {Modal, StyleSheet} from 'react-native';
import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageViewZoomComp = ({visible, onRequestClose, onSwipeDown, data}) => {
  return (
    <Modal visible={visible} onRequestClose={onRequestClose}>
      <ImageViewer
        useNativeDriver
        imageUrls={data}
        onSwipeDown={onSwipeDown}
        enableSwipeDown
      />
    </Modal>
  );
};

export default ImageViewZoomComp;

const styles = StyleSheet.create({});

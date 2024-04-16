import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageViewer from 'react-native-image-zoom-viewer';
import { appIcons } from '../../Constants/Utilities/assets';
import { heightPixel, widthPixel } from '../../Constants';
import colors from '../../config/colors';
const ImageViewZoomComp = ({ visible, onRequestClose, onSwipeDown, data }) => {

    return (
        <Modal visible={visible} onRequestClose={onRequestClose}>
            <ImageViewer
                imageUrls={data} onSwipeDown={onSwipeDown} enableSwipeDown />
        </Modal>
    )
}

export default ImageViewZoomComp

const styles = StyleSheet.create({})
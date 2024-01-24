import { Image, Modal, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import AppStatusbar from '../AppStatusbar/AppStatusbar'
import Header from '../Header'
import { heightPixel, widthPixel } from '../../Constants'
import DetailTextComp from '../DetailTextComp/DetailTextComp'
import AppGeneralTitle from '../AppGeneralTitle/AppGeneralTitle'
import { appIcons } from '../../Constants/Utilities/assets'
import FormButton from '../FormButton'
const BrochureModal = ({ onPress, onRequestClose, visible, downloadPress }) => {
    return (
        <Modal visible={visible} onRequestClose={onRequestClose}>
            <View style={styles.container}>
                <View>
                    <AppStatusbar />
                    <Header height={heightPixel(80)} leftImgName={require('../../../assets/headerBack.png')}
                        onPressLeft={onPress} />
                    <AppGeneralTitle title={"Agency Brochure"} />
                    <View style={styles.subView}>
                        <Image resizeMode='contain' source={appIcons.brochure} style={styles.brochure} />
                    </View>
                </View>
                <FormButton onPress={downloadPress} pic={appIcons.download} buttonTitle={"Download"} />
            </View>
        </Modal>
    )
}

export default BrochureModal

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.white,
        justifyContent: "space-between",
        paddingBottom: heightPixel(20)
    },
    subView: {
        marginTop: heightPixel(50),
        backgroundColor: colors.white,
        alignSelf: "center",
        width: widthPixel(374),
        height: heightPixel(467),
        borderRadius: widthPixel(10),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    brochure: {
        width: widthPixel(358),
        height: heightPixel(438),
        borderRadius: widthPixel(10)
    },
})
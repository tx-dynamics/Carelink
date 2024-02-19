import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../../config/colors'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'
import { heightPixel } from '../../../../Constants'
import FormButton from '../../../../components/FormButton'
import { appIcons } from '../../../../Constants/Utilities/assets'
import CertificateComp from '../../../../components/CertificateComp/CertificateComp'
import ImageUploadModal from '../../../../components/ImageUploadModal/ImageUploadModal'
import { uploadmageCamState, uploadmageState } from '../../../../Services/HelpingMethods'

const CertifcateDetail = ({ navigation, route }) => {
    const [isUpload, setUpload] = useState(false)
    const [img, setImg] = useState("")
    const [isVisible, setVisible] = useState(false)
    return (
        console.log(route.params?.item),
        <View style={styles.container}>
            <IconHeaderComp title={route?.params?.item?.title} imgName={iconPath.leftArrow} onPress={() => navigation.goBack()} />
            <View>
                <CertificateComp
                    imgStyle={{ height: route.params?.item?.id == 1 ? heightPixel(360) : route.params?.item?.id == 2 ? heightPixel(318) : heightPixel(399) }}
                    pic={!isUpload && route.params?.item?.pic} uploadedPic={isUpload && img}
                    onPress={() => setVisible(true)} />
            </View>
            <FormButton onPress={() => navigation.goBack()} buttonTitle={"Continue"} />
            <ImageUploadModal
                crossPress={() => setVisible(false)}
                visible={isVisible}
                onRequestClose={() => setVisible(false)}
                cameraPress={() => uploadmageCamState(setImg, setUpload, setVisible, route.params?.item?.id == 1 ? heightPixel(360) : route.params?.item?.id == 2 ? heightPixel(318) : heightPixel(399))}
                mediaPress={() => uploadmageState(setImg, setUpload, setVisible, route.params?.item?.id == 1 ? heightPixel(360) : route.params?.item?.id == 2 ? heightPixel(318) : heightPixel(399))} />
        </View>
    )
}

export default CertifcateDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "space-between",
        paddingBottom: heightPixel(20),
    },
})
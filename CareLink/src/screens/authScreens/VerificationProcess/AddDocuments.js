import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../config/colors'
import { heightPixel, routes, widthPixel } from '../../../Constants'
import IconHeaderComp from '../../../components/IconHeaderComp'
import { iconPath } from '../../../config/icon'
import UploadDocumentComp from '../../../components/UploadDocumentComp/UploadDocumentComp'
import DocumentComponent from '../../../components/DocumentComponent/DocumentComponent'
import FormButton from '../../../components/FormButton'
import ImageCropPicker from 'react-native-image-crop-picker'
import { appIcons } from '../../../Constants/Utilities/assets'
import ImageUploadModal from '../../../components/ImageUploadModal/ImageUploadModal'
import { RedSnackbar } from '../../../Constants/Utilities/assets/Snakbar'

const AddDocuments = ({ navigation }) => {
    const [isIndex, setIndex] = useState(0)
    const [isVisible, setVisible] = useState(false)
    const [isData, setData] = useState([
        {
            id: 0,
            heading: "Upload Certificate",
            title: "Certificate",
            subtitle: "You have to upload your certificates to continue with verification",
            media: null,
        },
        {
            id: 1,
            heading: "Driving Abstract",
            title: "Driving Abstract",
            subtitle: "You have to upload your driving abstract to continue with verification",
            media: null,
        },
        {
            id: 2,
            heading: "Upload Selfie",
            title: "Upload Selfie",
            subtitle: "You have to upload your selfie to continue with verification",
            media: null,
        },
        {
            id: 3,
            title: "Driving License",
            heading: "Driving License",
            subtitle: "You have to upload your driving license to continue with verification",
            media: null,
        },
        {
            id: 4,
            heading: "Upload Home Photo",
            title: "Home Photo",
            subtitle: "You have to upload your home’s photo to continue with verification",
            media: null,
        },
    ])

    const uploadImage = () => {
        setVisible(false)
        ImageCropPicker.openPicker({
            width: widthPixel(374),
            height: heightPixel(200),
            cropping: true
        }).then(image => {
            setData([...isData, isData[isIndex].media = image.path])
        }).catch(err => RedSnackbar(err.message))
    }
    const openCamera = () => {
        setVisible(false)
        ImageCropPicker.openCamera({
            width: widthPixel(374),
            height: heightPixel(200),
            cropping: true
        }).then(image => setData([...isData, isData[isIndex].media = image.path])).catch(err => RedSnackbar(err.message))
    }
    const removeImage = () => {
        setData([...isData, isData[isIndex].media = null])
    }
    return (
        <View style={styles.container}>
            <View>
                <IconHeaderComp title={"Verification Process"} heading={isData[isIndex].heading}
                    onPress={() => { navigation.goBack() }}
                    imgName={iconPath.leftArrow} />
                {isData[isIndex].media ? <DocumentComponent onPress={removeImage} pic={isData[isIndex].media} /> : <UploadDocumentComp title={isData[isIndex].title} subTitle={isData[isIndex].subtitle} onPress={() => setVisible(true)} />}
            </View>
            {isData[isIndex].media && <FormButton buttonTitle={"Continue"} onPress={() => isIndex < 4 ? setIndex(isIndex + 1) : navigation.replace(routes.addInformation)} />}
            <ImageUploadModal cameraPress={openCamera} mediaPress={uploadImage} visible={isVisible} />
        </View>
    )
}

export default AddDocuments

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: heightPixel(20),
        justifyContent: "space-between",
    },
})
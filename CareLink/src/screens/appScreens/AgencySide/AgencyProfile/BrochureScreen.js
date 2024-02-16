import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../../config/colors'
import { heightPixel } from '../../../../Constants'
import { appIcons } from '../../../../Constants/Utilities/assets'
import BrochureUploadComp from '../../../../components/BrochureUploadComp/BrochureUploadComp'
import Header from '../../../../components/Header'

const BrochureScreen = ({ navigation }) => {
    const [upload, setUpload] = useState(null)
    const onPressUpload = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Header
                headerLabel={"Brochure"}
                leftImgName={appIcons.headerBack}
                onPressLeft={() => navigation.goBack()} />
            <BrochureUploadComp upload={upload} setUpload={setUpload} onPress={onPressUpload} />
        </View>
    )
}

export default BrochureScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
})
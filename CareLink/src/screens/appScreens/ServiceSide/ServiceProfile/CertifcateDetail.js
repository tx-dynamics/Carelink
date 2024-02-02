import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../../config/colors'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'
import { heightPixel } from '../../../../Constants'
import FormButton from '../../../../components/FormButton'
import { appIcons } from '../../../../Constants/Utilities/assets'
import CertificateComp from '../../../../components/CertificateComp/CertificateComp'

const CertifcateDetail = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <IconHeaderComp title={route?.params?.item?.title} imgName={iconPath.leftArrow} onPress={() => navigation.goBack()} />
            <View>
                <CertificateComp pic={appIcons.certificate} />
            </View>
            <FormButton />
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
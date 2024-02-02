import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar'
import { fontPixel, heightPixel, routes, widthPixel } from '../../../../Constants'
import { appIcons } from '../../../../Constants/Utilities/assets'
import colors from '../../../../config/colors'
import Header from '../../../../components/Header'
import ServiceListingComp from '../../../../components/ServiceListingComp'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../../../../components/FormButton'
import ServiceProviderInfo from '../../../../components/ServiceProviderInfo/ServiceProviderInfo'
import { RedSnackbar, SuccessSnackbar } from '../../../../Constants/Utilities/assets/Snakbar'
import { fonts } from '../../../../Constants/Fonts'
import DeleteModal from '../../../../components/DeleteModal/DeleteModal'

const InactiveRoom = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const onPressActive = () => {
        SuccessSnackbar("Room activated successfully")
        navigation.goBack()
    }
    const onDeletePress = () => {
        setVisible(false)
        navigation.goBack()
        RedSnackbar("Listing deleted successfully")
    }
    const onCancelPress = () => {
        setVisible(false)
    }
    return (
        <View style={styles.container}>
            <AppStatusbar />
            <Header headerLabel={"Inactive Room"} height={heightPixel(80)} leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />
            <KeyboardAwareScrollView >
                <ServiceProviderInfo
                    attachBath
                    days={"20"}
                    floor={"2nd"}
                    availableOn={"November 15"}
                    images location={"ABC Block, New york, USA"}
                    note={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel in ipsum duis suspendisse. Ut urna, tristique magnis mauris, volutpat purus"} />
            </KeyboardAwareScrollView>
            <Text onPress={() => setVisible(true)} style={styles.deleteText}>Delete Listing</Text>
            <FormButton
                onPress={onPressActive}
                buttonTitle={"Active"} />
            <DeleteModal visible={visible} cancelPress={onCancelPress} deletePress={onDeletePress} />
        </View>
    )
}

export default InactiveRoom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    leftImgStyle: {
        width: widthPixel(23),
        height: heightPixel(16),
    },
    deleteText: {
        alignSelf: "center",
        color: colors.primary,
        fontSize: fontPixel(16),
        fontFamily: fonts.Poppins_Regular,
        marginBottom: heightPixel(15)
    },
})
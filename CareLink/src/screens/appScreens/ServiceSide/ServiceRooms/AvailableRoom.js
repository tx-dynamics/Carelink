import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar'
import { heightPixel, routes, widthPixel } from '../../../../Constants'
import { appIcons } from '../../../../Constants/Utilities/assets'
import colors from '../../../../config/colors'
import Header from '../../../../components/Header'
import ServiceListingComp from '../../../../components/ServiceListingComp'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../../../../components/FormButton'
import ServiceProviderInfo from '../../../../components/ServiceProviderInfo/ServiceProviderInfo'
import { RedSnackbar, SuccessSnackbar } from '../../../../Constants/Utilities/assets/Snakbar'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import DeleteModal from '../../../../components/DeleteModal/DeleteModal'

const AvailableRoom = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const onPressInactive = () => {
        setVisible(true)
        // SuccessSnackbar("Room has been inactive")
        // navigation.navigate("HomeNavigator")
    }
    const onDeletePress = () => {
        setVisible(false)
        navigation.goBack()
        setTimeout(() => {
            RedSnackbar("Listing Inactivated")
        }, 100);
    }
    const onCancelPress = () => {
        setVisible(false)
    }
    return (
        <View style={styles.container}>
            <AppStatusbar />
            <IconHeaderComp
                title={"Available Room"}
                imgName={appIcons.leftArrow}
                onPress={() => navigation.goBack()}
            />
            <KeyboardAwareScrollView >
                <ServiceProviderInfo
                    days={"20"}
                    floor={"2nd"}
                    availableOn={"November 15"}
                    images location={"ABC Block, New york, USA"}
                    note={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel in ipsum duis suspendisse. Ut urna, tristique magnis mauris, volutpat purus"} />
            </KeyboardAwareScrollView>
            <FormButton
                onPress={onPressInactive}
                buttonTitle={"Inactive"} />
            <DeleteModal title={"Are you sure you want to inactive the room?"} rightButtonTitle={"Inactive"} visible={visible} cancelPress={onCancelPress} deletePress={onDeletePress} />
        </View>
    )
}

export default AvailableRoom

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    leftImgStyle: {
        width: widthPixel(23),
        height: heightPixel(16),
    },
})
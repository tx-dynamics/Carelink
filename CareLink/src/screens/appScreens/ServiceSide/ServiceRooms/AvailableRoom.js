import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar'
import { heightPixel, routes, widthPixel } from '../../../../Constants'
import { appIcons } from '../../../../Constants/Utilities/assets'
import colors from '../../../../config/colors'
import Header from '../../../../components/Header'
import ServiceListingComp from '../../../../components/ServiceListingComp'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../../../../components/FormButton'
import ServiceProviderInfo from '../../../../components/ServiceProviderInfo/ServiceProviderInfo'
import { SuccessSnackbar } from '../../../../Constants/Utilities/assets/Snakbar'

const AvailableRoom = ({ navigation }) => {
    const onPressInactive = () => {
        SuccessSnackbar("Room has been inactive")
        navigation.navigate("HomeNavigator")
    }
    return (
        <View style={styles.container}>
            <AppStatusbar />
            <Header headerLabel={"Avaialable Room"} height={heightPixel(80)} leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />
            <KeyboardAwareScrollView >
                <ServiceProviderInfo
                    // attachBath
                    days={"20"}
                    floor={"2nd"}
                    availableOn={"November 15"}
                    images location={"ABC Block, New york, USA"}
                    note={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel in ipsum duis suspendisse. Ut urna, tristique magnis mauris, volutpat purus"} />
            </KeyboardAwareScrollView>
            <FormButton
                onPress={onPressInactive}
                buttonTitle={"Inactive"} />
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
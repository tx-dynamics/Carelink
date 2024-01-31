import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../config/colors'
import AppStatusbar from '../../../components/AppStatusbar/AppStatusbar'
import IconHeaderComp from '../../../components/IconHeaderComp'
import { iconPath } from '../../../config/icon'
import { fontPixel, heightPixel, widthPixel } from '../../../Constants'
import { fonts } from '../../../Constants/Fonts'
import LeftSubtitle from '../../../components/LeftSubtitle/LeftSubtitle'
import ServiceProviderInfo from '../../../components/ServiceProviderInfo/ServiceProviderInfo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../../../components/FormButton'

const ListingSummary = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppStatusbar />
            <IconHeaderComp
                title={"Summary"}
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"Listing Summary"}
            />
            <KeyboardAwareScrollView >
                <ServiceProviderInfo numberOfLines={1} title={"Oakwood Heights"} />
            </KeyboardAwareScrollView>
            <FormButton
                buttonTitle={"List Now"}
                onPress={() => navigation.navigate("Register")}
            />
        </View>
    )
}

export default ListingSummary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: heightPixel(20)
    },
})
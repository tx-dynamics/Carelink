import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../../config/colors'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { fontPixel, heightPixel, widthPixel } from '../../../../Constants'
import { fonts } from '../../../../Constants/Fonts'
import NewAppTextInput from '../../../../components/NewAppTextInput/NewAppTextInput'
import FormButton from '../../../../components/FormButton'
import { SuccessFlashMessage } from '../../../../Constants/Utilities/assets/Snakbar'
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView'

const AppFeedback = ({ navigation, route }) => {
    const onSendPress = () => {
        navigation.goBack()
        SuccessFlashMessage("Feedback has been sent")
    }
    return (
        <AppGLobalView style={styles.container}>
            <IconHeaderComp
                title={"Feedback"}
                imgName={iconPath.leftArrow}
                onPress={() => navigation.goBack()}
            />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{}}>
                <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar bibendum magna Lorem ipsum dolor sit a</Text>
                <NewAppTextInput
                    multiline
                    placeholder={"Your feedback"}
                    inputStyle={styles.inputStyle} />
            </KeyboardAwareScrollView>
            <FormButton buttonTitle={"Send"} onPress={onSendPress} />
        </AppGLobalView>
    )
}

export default AppFeedback

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: heightPixel(20)
    },
    inputStyle: {
        borderColor: colors.inputBorder,
        backgroundColor: colors.inputBackground,
    },
    descText: {
        paddingHorizontal: widthPixel(20),
        marginVertical: heightPixel(20),
        textAlign: "left",
        fontSize: fontPixel(16),
        fontFamily: fonts.Poppins_Light,
        color: colors.leftDescription,
    },
})
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../../config/colors'
import { fontPixel, heightPixel, widthPixel } from '../../../../Constants'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'
import LeftBoldTitle from '../../../../components/LeftBoldTitle/LeftBoldTitle'
import { fonts } from '../../../../Constants/Fonts'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import CountDownComponent from '../../../../components/CountDownComponent/CountDownComponent'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../../../../components/FormButton'
import { useDispatch } from 'react-redux'
import { userSave } from '../../../../redux/Slices/splashSlice'
import { RedSnackbar } from '../../../../Constants/Utilities/assets/Snakbar'

const DeleteAccountOTP = ({ navigation, route }) => {
    const [isOTP, setIsOTP] = useState("")
    const dispatch = useDispatch()
    const onDeletePress = () => {
        dispatch(userSave(null))
        RedSnackbar("Your account has been deleted")
    }
    return (
        <View style={styles.container}>
            <IconHeaderComp
                title={"Delete Account"}
                imgName={iconPath.leftArrow}
                onPress={() => navigation.goBack()}
            />
            <KeyboardAwareScrollView>
                <LeftBoldTitle title={"Enter OTP"} titleText={styles.titleText} />
                <Text style={styles.descText}>Etiam lorem dui, laoreet quis accumsan ut, sagittis vel dui. Pellentesque placerat ac lorem nec lacinia. Lorem ipsum dolor sit amet, </Text>
                <OTPInputView
                    pinCount={4}
                    autoFocusOnLoad={false}
                    style={styles.OTPView}
                    onCodeChanged={setIsOTP}
                    selectionColor={colors.primary}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    keyboardType='number-pad'
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                />
                <CountDownComponent />
            </KeyboardAwareScrollView>
            <FormButton buttonTitle={"Delete Account"} onPress={onDeletePress} />
        </View>
    )
}

export default DeleteAccountOTP

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: heightPixel(20)
    },
    OTPView: {
        alignSelf: "center",
        width: '72%',
        height: heightPixel(120),
    },
    underlineStyleBase: {
        color: colors.black,
        width: widthPixel(58),
        height: heightPixel(44),
        borderWidth: 1,
        borderRadius: widthPixel(15),
        borderColor: colors.black12,
    },
    underlineStyleHighLighted: {
        borderWidth: 2
    },
    titleText: {
        fontSize: fontPixel(18),
        fontFamily: fonts.Poppins_Regular,
    },
    descText: {
        paddingHorizontal: widthPixel(20),
        paddingRight: widthPixel(45),
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Regular,
        color: colors.messageBody
    },
})
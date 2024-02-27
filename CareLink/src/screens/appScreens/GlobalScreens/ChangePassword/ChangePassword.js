import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../../config/colors'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading'
import AppTextInput from '../../../../components/AppTextInput/AppTextInput'
import { heightPixel } from '../../../../Constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../../../../components/FormButton'
import VerificationModal from '../../../../components/VerificationModal/VerificationModal'
import { appIcons } from '../../../../Constants/Utilities/assets'
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView'

const ChangePassword = ({ navigation, route }) => {
    const [isVisible, setVisible] = useState(false)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [oldSecure, setOldSecure] = useState(true)
    const [newSecure, setNewSecure] = useState(true)
    const [confirmSecure, setConfirmSecure] = useState(true)
    const onPressUpdate = () => {
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
            navigation.goBack()
        }, 1500);
    }
    return (
        <AppGLobalView style={styles.container}>
            <IconHeaderComp
                title={"Change Password"}
                imgName={iconPath.leftArrow}
                onPress={() => navigation.goBack()}
            />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <AppTextInput
                    secureTextEntry={oldSecure}
                    right={oldSecure ? appIcons.hide : appIcons.show}
                    rightPress={() => setOldSecure(!oldSecure)}
                    title={"Old password"}
                    mainViewStyle={{ marginTop: heightPixel(60), }} />
                <AppTextInput
                    secureTextEntry={newSecure}
                    right={newSecure ? appIcons.hide : appIcons.show}
                    rightPress={() => setNewSecure(!newSecure)}
                    title={"New password"}
                />
                <AppTextInput
                    secureTextEntry={confirmSecure}
                    right={confirmSecure ? appIcons.hide : appIcons.show}
                    rightPress={() => setConfirmSecure(!confirmSecure)}
                    title={"Confirm New password"} />
            </KeyboardAwareScrollView>
            <FormButton onPress={onPressUpdate} buttonTitle={"Update"} />
            <VerificationModal visible={isVisible} title={"Password Updated"} subtitle={"You have successfully update  your password"} />
        </AppGLobalView>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: heightPixel(20)
    }
})
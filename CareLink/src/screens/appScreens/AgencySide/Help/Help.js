import React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultStyles from "../../../../config/Styles";
import FormButton from '../../../../components/FormButton';
import { useSelector } from 'react-redux';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import { iconPath } from '../../../../config/icon';
import { fontPixel, heightPixel } from '../../../../Constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SuccessFlashMessage } from '../../../../Constants/Utilities/assets/Snakbar';
import AppTextInput from '../../../../components/AppTextInput/AppTextInput';

const Help = ({ navigation }) => {
    const usertype = useSelector((state) => state.splash.userType)
    const onPressSubmit = () => {
        SuccessFlashMessage("Your message has been submitted")
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <IconHeaderComp
                title={"Help Center"}
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                style={usertype === "ServiceSide" ? {} : styles.createTxt}
                heading={usertype === "ServiceSide" ?
                    "This is Care Link Help center. Proceed your query with us."
                    :
                    "This is a help center of CARE LINK .Submit your problems here"
                }
            />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <AppTextInput title={"Name"} />
                <AppTextInput title={"Email"} />
                <AppTextInput multiline mainViewStyle={{ marginBottom: heightPixel(200), }} title={"Your Problem"} containerStyle={styles.descriptionStyle} />
            </KeyboardAwareScrollView>
            <FormButton onPress={onPressSubmit}
                buttonTitle={usertype === "ServiceSide" ? "Submit " : "Submit Now"}
            />
        </View>
    )
}

export default Help;

const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        paddingBottom: heightPixel(20)
    },
    createTxt: {
        marginTop: heightPixel(20),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: fontPixel(15),
    },
    descriptionStyle: {
        height: null,
        minHeight: heightPixel(90),
        maxHeight: heightPixel(210),
    },
});
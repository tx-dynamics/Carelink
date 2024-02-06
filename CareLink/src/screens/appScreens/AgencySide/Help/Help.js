import React from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import FormButton from '../../../../components/FormButton';
import { useSelector } from 'react-redux';
import IconHeaderComp from '../../../../components/IconHeaderComp';
import { iconPath } from '../../../../config/icon';
import { heightPixel, widthPixel } from '../../../../Constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NewAppTextInput from '../../../../components/NewAppTextInput/NewAppTextInput';
import { SuccessSnackbar } from '../../../../Constants/Utilities/assets/Snakbar';

const Help = ({ navigation }) => {
    const usertype = useSelector((state) => state.splash.userType)
    const onPressSubmit = () => {
        SuccessSnackbar("Your message has been submitted")
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
            <KeyboardAwareScrollView>
                <NewAppTextInput placeholder={"Name"} inputStyle={styles.nameStyle} />
                <NewAppTextInput placeholder={"Email"} inputStyle={styles.emainStyle} />
                <NewAppTextInput placeholder={"Description"} multiline inputStyle={styles.descriptionStyle} />
            </KeyboardAwareScrollView>
            <FormButton onPress={onPressSubmit}
                buttonTitle={usertype === "ServiceSide" ? "Submit " : "Submit Now"}
                width={usertype === "ServiceSide" ? wp('45%') : wp('90%')}
                height={wp('13%')}
                fontSize={usertype === "ServiceSide" ? 17 : 21}
                borderRadius={usertype === "ServiceSide" ? 10 : 30}
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
        marginTop: wp('7%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        marginHorizontal: wp('5%')
    },
    nameStyle: {
        width: widthPixel(357),
        height: heightPixel(46),
        borderRadius: widthPixel(5),
        paddingBottom: 0,
        paddingVertical: 0,
        marginTop: heightPixel(30),
        marginBottom: heightPixel(30),
    },
    emainStyle: {
        width: widthPixel(357),
        height: heightPixel(46),
        borderRadius: widthPixel(5),
        paddingBottom: 0,
        marginBottom: heightPixel(30),
        paddingVertical: 0,
    },
    descriptionStyle: {
        width: widthPixel(357),
        borderRadius: widthPixel(5),
        paddingBottom: heightPixel(30),
        paddingVertical: 0,
    },
});
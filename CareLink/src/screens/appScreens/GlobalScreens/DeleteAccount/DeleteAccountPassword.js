import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'
import colors from '../../../../config/colors'
import { fontPixel, heightPixel, routes, widthPixel } from '../../../../Constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../../../../components/FormButton'
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading'
import { appIcons } from '../../../../Constants/Utilities/assets'
import { fonts } from '../../../../Constants/Fonts'
import AppTextInput from '../../../../components/AppTextInput/AppTextInput'
import TermsComponent from '../../../../components/TermsComponent/TermsComponent'
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView'

const DeleteAccountPassword = ({ navigation, route }) => {
    const [isSecure, setSecure] = useState(true)
    const [password, setPassword] = useState("")
    const [isCheck, setCheck] = useState(false)
    const deleteData = [
        {
            id: 1,
            title: "Lorem ipsum dolor amet, conse ctetur adipi scing elit. Vivamus at bibendum ante."

        },
        {
            id: 2,
            title: "Lorem ipsum dolor amet, conse ctetur adipi scing elit. Vivamus at bibendum ante."

        },
        {
            id: 3,
            title: "Lorem ipsum dolor amet, conse ctetur adipi scing elit. Vivamus at bibendum ante."

        },
        {
            id: 4,
            title: "Lorem ipsum dolor amet, conse ctetur adipi scing elit. Vivamus at bibendum ante."

        },
    ]
    return (
        <AppGLobalView style={styles.container}>
            <IconHeaderComp
                title={"Delete Account"}
                imgName={iconPath.leftArrow}
                onPress={() => navigation.goBack()}
            />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.alertView}>
                    <Image resizeMode='contain' source={appIcons.alertRed} style={styles.alertPic} />
                    <Text style={styles.deleteText}>Delete your account will:</Text>
                </View>
                <FlatList showsVerticalScrollIndicator={false} scrollEnabled={false} data={deleteData}
                    ListHeaderComponent={() => <View style={styles.headerView}></View>}
                    renderItem={({ item, index }) => <Text style={styles.pointsText}>{item.title}</Text>} />
                <Text style={styles.afterPointsText}>{"To Delete your Account Confirm your Password"}</Text>
                <AppTextInput title={"Password"} right={isSecure ? appIcons.hide : appIcons.show} secureTextEntry={isSecure} rightPress={() => setSecure(!isSecure)} />
                <TermsComponent
                    boxPress={() => setCheck(!isCheck)}
                    box={isCheck ? appIcons.tickCheck : appIcons.tickUncheck}
                    privacyPress={() => navigation.navigate(routes.privacyPlicy)}
                    termsPress={() => navigation.navigate(routes.termsAndCondition)}
                />
            </KeyboardAwareScrollView>
            <FormButton buttonTitle={"Continue"} onPress={() => navigation.navigate(routes.deleteAccountOTP)} />
        </AppGLobalView>
    )
}

export default DeleteAccountPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: heightPixel(20)
    },
    alertView: {
        paddingHorizontal: widthPixel(20),
        flexDirection: "row",
        alignItems: "center",
        marginTop: heightPixel(30)
    },
    alertPic: {
        width: widthPixel(23),
        height: heightPixel(21),
        marginRight: widthPixel(10)
    },
    deleteText: {
        top: heightPixel(2),
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black12,
    },
    headerView: {
        marginTop: heightPixel(30)
    },
    pointsText: {
        marginBottom: heightPixel(15),
        paddingRight: widthPixel(40),
        marginLeft: widthPixel(40),
        top: heightPixel(2),
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black12,
    },
    afterPointsText: {
        marginTop: heightPixel(20),
        paddingLeft: widthPixel(20),
        fontSize: fontPixel(14),
        fontFamily: fonts.Poppins_Regular,
        color: colors.black12,
    },
})
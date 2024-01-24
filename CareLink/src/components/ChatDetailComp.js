import React from "react";
import { View, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Apptext from "./Apptext";
import DefaultStyles from "../config/Styles";
import { heightPixel, widthPixel } from "../Constants";
import colors from "../config/colors";

function ChatDetailComp({ msg, style }) {
    return (
        <View style={[styles.PicMainView, style,]}>
            <View style={styles.msgView}>
                <Apptext style={styles.msgTxt} >{msg}</Apptext>
            </View>
            <Apptext style={styles.timeTxt} >04:30 PM</Apptext>

        </View>
    );
}

const styles = StyleSheet.create({
    labelTxt: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        marginTop: wp('2%'),
        marginHorizontal: wp('3%')
    },
    PicMainView: {
        alignItems: "flex-end",
        alignSelf: "flex-start",
        marginLeft: widthPixel(10),
        marginBottom: heightPixel(10)
    },
    msgView: {
        maxWidth: widthPixel(330),
        borderRadius: widthPixel(30),
        paddingVertical: heightPixel(10),
        paddingHorizontal: widthPixel(20),
        backgroundColor: colors.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3,
    },
    msgTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: DefaultStyles.colors.white
    },
    timeTxt: {
        textAlign: 'right',
        fontSize: 11,
        color: DefaultStyles.colors.lightPrimary,
        marginTop: heightPixel(2),
        marginRight: widthPixel(5)
    },
    ChatCallingView: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: DefaultStyles.colors.lightgray,
        justifyContent: 'center', alignItems: 'center'
    },

    ChatDtlImg: {
        width: 70,
        height: 70, borderRadius: 50
    },


});

export default ChatDetailComp;

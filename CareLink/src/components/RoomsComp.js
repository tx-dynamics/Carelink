import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Apptext from "./Apptext";
import DefaultStyles from "../config/Styles";

function RoomsComp({
    label,
    onPress,
}) {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={styles.MainView}>
            <Apptext style={styles.lblTxt}>{label}</Apptext>
        </TouchableOpacity>
    );
}


export default RoomsComp;

const styles = StyleSheet.create({

    MainView:{
        width:wp('43%') ,
        height:wp('43%'),
        marginHorizontal:wp('2%'),
        borderWidth:1,
        borderColor:DefaultStyles.colors.black,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:wp('5%')
    },
    lblTxt:{
        fontFamily:'Poppins-SemiBold',
        fontSize:18,
        width:wp('25'),
        textAlign:'center',
    }

})

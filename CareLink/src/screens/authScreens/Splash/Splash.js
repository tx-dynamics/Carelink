import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ActivityIndicator, Text, View, StatusBar } from 'react-native';
import DefaultStyles from "../../../config/Styles";
import { widthPixel } from '../../../Constants';
import colors from '../../../config/colors';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Step1")
        }, 2000);
    }, []);

    return (
        <AppGLobalView style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
            <Image resizeMode='contain' source={require('../../../../assets/Care_Link_Logo.png')} style={{
                width: widthPixel(120),
                height: widthPixel(120)
            }} />
        </AppGLobalView>
    )
}

export default Splash;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoTxt: {
        color: DefaultStyles.colors.white,
        fontSize: 45,
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'italic',
        lineHeight: 68
    },

});
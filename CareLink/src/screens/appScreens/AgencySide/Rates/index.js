import React, { useState, useEffect } from 'react';
import {
    StyleSheet, ScrollView, TouchableOpacity,
    FlatList, Image, TextInput, KeyboardAvoidingView, ActivityIndicator, Text, View
} from 'react-native';

import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import FormButton from '../../../../components/FormButton';
import FormInput from '../../../../components/FormInput';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


const Rates = ({ navigation }) => {

    const tableData = [
        ['Hourly', '$000',],
        ['Start At', '$000'],
        ['Fixed', '$000'],
      ]

    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />

            <ScrollView>

                <View>
                    <Apptext style={styles.msgTxt} >Rate </Apptext>
                </View>

                <View>
                    <Apptext style={[styles.msgTxt, {
                        fontSize: 15, fontFamily: 'Poppins-Regular',
                        marginTop: wp('5%')
                    }]} >Check Rates State Wise </Apptext>
                </View>
                <View style={{ marginTop: wp('5%') }}>
                    <FormInput
                        title={"State"}
                        borderColor={DefaultStyles.colors.black}
                        borderWidth={1}
                        placeholderText={"ABC State"}
                        placeholderTextColor={DefaultStyles.colors.textColor}
                    />
                </View>
                <View style={styles.container1}>
                    <Table 
                        // style={{borderRadius:10, }}
            
                    borderStyle={{
                        borderWidth: 1,
                        borderColor:DefaultStyles.colors.textColor,
                        }}>
                        <Rows data={tableData}
                        // style={{borderRadius:10, }}
                        textStyle={styles.text} />
                    </Table>
                </View>

            </ScrollView>
        </View>
    )
}

export default Rates;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    msgTxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 17,
        color: DefaultStyles.colors.black,
        marginHorizontal: wp('5%')
    },
    DirectionView: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
    descTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    },
    radioBtn: {
        marginTop: wp('20%'),
        width: 30,
        height: 30,
        borderRadius: 10,
        borderColor: "lightgray",
        borderWidth: 1
    },
    lwrTxt: {
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: 26
    },
    lTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 15,
        color: DefaultStyles.colors.textColor
    },
    container1: { flex: 1, padding: 15, paddingTop: wp('17%') ,  backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 15, fontFamily:'Poppins-Medium',  fontSize:16, color:DefaultStyles.colors.textColor }
});
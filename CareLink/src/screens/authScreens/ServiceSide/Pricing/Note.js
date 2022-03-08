import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Apptext from '../../../../components/Apptext';
import RoomsComp from '../../../../components/RoomsComp';
import DefaultStyles from '../../../../config/Styles';
import FormButton from '../../../../components/FormButton';
import FormInput from '../../../../components/FormInput';


const Note = ({ navigation }) => {

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={{ marginHorizontal: wp('5%'), marginTop: 18 }}
                    source={require('../../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
            <View>
                <Apptext style={styles.createTxt}>Write your note if you want any? </Apptext>
            </View>
            <Apptext style={styles.bkTxt} >Click to write:</Apptext>
            <View style={{ marginTop: -10 }}>
                <FormInput
                    height={wp('65%')}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}  
                />
            </View>

            <View style={{marginTop:wp('50%')}}>
            <FormButton
                buttonTitle={"Skip"}
                width={"90%"}
                color={DefaultStyles.colors.black}
                backgroundColor={'#e6e6e6'}
                onPress={() => navigation.navigate("AgencyLocation")}
            />
            <FormButton
                buttonTitle={"Next"}
                width={"90%"}
                onPress={() => navigation.navigate("AgencyLocation")}
            />
            </View>
        </ScrollView>
    )
}

export default Note;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
    bkTxt: {
        fontSize: 23,
        fontFamily: 'Poppins-Medium',
        marginHorizontal: wp('5%'),
        marginTop: wp('7%')
    },
    hyperLink: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        textDecorationLine: 'underline',
        color: "#004cbe"
    },
    priceTxt: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: wp('6%'),
        marginTop: wp('10%')
    }

});
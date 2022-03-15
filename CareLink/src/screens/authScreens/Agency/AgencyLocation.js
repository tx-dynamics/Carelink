import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';
import { useSelector } from 'react-redux';


const AgencyLocation = ({ navigation }) => {

    const usertype = useSelector((state) => state.auth.usertype)
    // console.log(usertype)

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={{ marginHorizontal: wp('5%'), marginTop: 18 }}
                    source={require('../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
            <View>
                {usertype === "ServiceSide" ? 
                <Apptext style={styles.createTxt}>Your location where your rooms located? </Apptext>
                :
                <Apptext style={styles.createTxt}>Your location where your agency located? </Apptext>
                }
                </View>
            <View>
                <Apptext style={[styles.createTxt, {fontFamily: 'Poppins-Medium', }]}>Enter your location: </Apptext>
            </View>
            <View style={{marginTop:-15}} >
                <FormInput
                    title={"Street Address"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
                <FormInput
                    title={"Apartment Number"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
                  <FormInput
                    title={"ZIP Code"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
                  <FormInput
                    title={"State"}
                    borderColor={DefaultStyles.colors.black}
                    borderWidth={1}
                />
            </View>
            <View style={{ marginTop: wp('26%') }}>
                <FormButton
                    buttonTitle={"Next"}
                    width={wp('90%')}
                    height={wp('15%')}
                    onPress={() => navigation.navigate("AgencyMap")}
                />
            </View>
        </ScrollView>
    )
}

export default AgencyLocation ;


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
});
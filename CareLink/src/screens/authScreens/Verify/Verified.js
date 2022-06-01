import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';

const Verified = ({ navigation }) => {

    return (

        <View style={styles.container}>
           
            <IconHeaderComp
                onPress={() => { navigation.goBack() }}
                imgName={iconPath.leftArrow}
            />
            <View style={styles.logoView}>
                <Image source={require('../../../../assets/VerifiedEmailNew.png')} />
            </View>
            <Apptext style={styles.verifyTxt}>Congrats ! Your account is Verified now</Apptext>
     
            <View style={{ marginTop: wp('50%'),  }}>
                <FormButton
                    buttonTitle={"Let started"}
                    width={wp('90%')}
                    onPress={() => navigation.navigate("Success") }
                />
            </View>
        </View>
    )
}

export default Verified;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    logoView:{
        alignSelf:'center',
        marginTop:wp('5%')
    },
    verifyTxt:{
        marginTop:33,
        fontFamily:'Poppins-Regular',
        fontSize:24,
        width:wp('89%'),
        textAlign:'center',
        alignSelf:'center',
        // backgroundColor:"red"
    }
});
import React, { useState, useEffect } from 'react';
import {
    StyleSheet, ScrollView, TouchableOpacity,
    FlatList, Image, TextInput, KeyboardAvoidingView, ActivityIndicator, Text, View
} from 'react-native';

import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import FormButton from '../../../../components/FormButton';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';


const Read3 = ({ navigation }) => {

    const Host = ["HOST HOME SERVICES PROVIDER AND/OR TEMPORARY SUPERVISION SERVICES PROVIDER INDEPENDENT CONTRACTORS AGREEMENT"]

    const one = [`
In consideration of the foregoing representations and the following terms and conditions, the parties agree:

2.	DUTIES OF PROVIDER:

a.	Provider shall provide a “host home” and/or temporary supervision residence for Person and maintain a physical environment in the host home/temporary supervision residence that meets HUD Section 8 requirements.  Provider shall supply all room and board necessary to meet the requirements of this Agreement.  

b.	The Provider shall make no change in location of the host home or living arrangements (changing Person’s bedroom, remodeling, additions, etc.) that might affect the provision of services and supports to the Person without providing UPLIFT LLC with 15 days prior written notice of the proposed change.  If UPLIFT LLC has objections to such proposed changes, then UPLIFT LLC shall notify the Provider of those objections promptly and give Provider an opportunity to address those objections.  However, UPLIFT LLC reserves the right to terminate this agreement at any time, pursuant to paragraph ten (10) below, if it believes that the health, welfare or well-being of the Person is threatened by the proposed changes.

c.	The Provider’s family consists of 

_____________________________

adults(s) and 

_____________________________ 

child(ren), not including Person(s).  If the Provider’s family status changes (e.g., additional family members, less family members, or guests over 30 days), Provider shall notify UPLIFT LLC immediately and Person’s interdisciplinary team shall meet to decide if this placement still meets the Person’s needs and choices.  

d.	The Provider shall provide UPLIFT LLC with at least 15 days prior written notice if any other person with intellectual and developmental disabilities is proposed to reside in the host home.  If UPLIFT LLC has objections to such proposed changes, then UPLIFT LLC shall notify the Provider of those objections promptly and give Provider an opportunity to address those objections.  However, UPLIFT LLC reserves the right to terminate this agreement at any time, pursuant to paragraph eleven (11) below, if it believes that the health, welfare or well-being of the Person is threatened by the proposed changes.

e.	The Provider shall provide UPLIFT LLC and the Person’s legal guardian with at least 10 days prior notice if the provider is planning on taking the Person on vacation or leaving the State of Colorado.  This Provider will notify UPLIFT LLC and the legal guardian of the intended destination, number of days the Person will be away, and how the Provider can be reached during the time away.  The Provider must receive approval by UPLIFT LLC and the legal guardian (if applicable) prior to taking the Person on vacation or leaving the State of Colorado with the Person.  

f.	The Provider shall notify UPLIFT LLC in the event the Provider, or any other person living in the Provider’s home, is arrested, charged, or receives a summons for the following offenses:  

(I)	A crime of violence. 
(II)	Any felony offense involving unlawful sexual behavior. 
(III)	Any felony, the underlying factual basis of which has been found by the court on the record to include an act of domestic violence. 
(IV)	Any felony offense of child abuse. 
(V)	Any felony offense in any other state, the elements of which are substantially similar to the elements of any of the offenses described in subparagraph (I), (II), (III), or (IV) above. 
(VI)	Third degree assault. 
(VII)	Any misdemeanor, the underlying factual basis of which has been found by the court on the record to include an act of domestic violence. 
(VIII)	Violation of a restraining order. 
(IX)	Any misdemeanor offense of child abuse. 
(X)	Any misdemeanor offense of sexual assault on a client by a psychotherapist. 
(XI)	Any misdemeanor offense in any other state, the elements of which are substantially similar to the elements of any of the offenses described in subparagraph (VI), (VII), (VIII), (IX), or (X) above. 

g.	The specific duties to be performed pursuant to this agreement are set forth in Exhibit B for Provider, attached hereto and incorporated herein by reference.

h.	The provided services shall meet all requirements as set forth in UPLIFT LLC’S Policies and Procedures, the Rules and Regulations of the Department of Health Care Policy and Finance, Division of Intellectual and Developmental Disabilities, and HUD Section 8 Housing Quality Standards

    `]


    return (
        <AppGLobalView style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View>
                    <Apptext style={styles.msgTxt} >Read And FIll the General Contract </Apptext>
                </View>

                <View>
                    <Apptext style={styles.hostTxt} >{Host} </Apptext>
                </View>
                <View>
                    <Apptext style={styles.oneTxt} >{one} </Apptext>
                </View>

                <View style={{ marginTop: wp('15%') }}>
                    <FormButton
                        buttonTitle={"Next"}
                        width={wp('88%')}
                        onPress={() => navigation.navigate("AgencyHome")}
                    />
                </View>

            </ScrollView>
        </AppGLobalView>
    )
}

export default Read3;


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
    hostTxt: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 14,
        color: DefaultStyles.colors.black,
        marginHorizontal: wp('5%'),
        marginTop: wp('8%')
    },
    oneTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: DefaultStyles.colors.black,
        marginHorizontal: wp('5%'),
        marginTop: wp('5%')
    }

});
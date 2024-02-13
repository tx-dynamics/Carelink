import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import FormInput from '../../../components/FormInput';
import FormButton from '../../../components/FormButton';

import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import AddAgencyPhotoComp from '../../../components/AddAgencyPhotoComp/AddAgencyPhotoComp';
import AddAgencyProfilePhoto from '../../../components/AddAgencyProfilePhoto/AddAgencyProfilePhoto';
import { fontPixel, heightPixel } from '../../../Constants';

const AgencyPhotos = ({ navigation }) => {
    const [agencyImg, setAgencyImg] = useState(null)
    const [profileImg, setProfileImg] = useState(null)
    return (
        <View style={styles.container}>
            <View>
                <IconHeaderComp
                    title={"Add Photo"}
                    onPress={() => { navigation.goBack() }}
                    imgName={iconPath.leftArrow}
                    heading={"Add your agency cover and profile photo"}
                />
                <AddAgencyPhotoComp img={agencyImg} setImg={setAgencyImg} />
                <AddAgencyProfilePhoto img={profileImg} setImg={setProfileImg} />
            </View>
            <View>
                <FormButton
                    buttonTitle={"Next"}
                    onPress={() => navigation.navigate("AgencyLocation")}
                />
                <TouchableOpacity onPress={() => navigation.navigate("AgencyLocation")}>
                    <Apptext style={styles.skipTxt} >Skip for now</Apptext>
                </TouchableOpacity >
            </View>
        </View>
    )
}

export default AgencyPhotos;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: heightPixel(20)
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
    skipTxt: {
        alignSelf: 'center',
        marginTop: heightPixel(5),
        fontSize: fontPixel(18),
        fontFamily: 'Poppins-Regular',
        color: DefaultStyles.colors.primary
    },
    cover: {
        marginTop: wp('7%'),
        width: wp('100%'),
        height: wp('77%'),
        backgroundColor: "#cccccc",
        alignItems: 'center',
        justifyContent: 'center'
    },
    cvrTxt: {
        marginTop: wp('3%'),
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: DefaultStyles.colors.gray
    },
    profileView: {
        width: wp('36%'),
        height: wp('36%'),
        marginTop: -65,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c4c4',
        borderRadius: 8
    },
    addTxt: {
        alignSelf: 'center',
        marginTop: 8,
        fontFamily: 'Poppins-Regular',
        fontSize: 19
    }

});
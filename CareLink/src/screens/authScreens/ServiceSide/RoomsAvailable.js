import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity,FlatList, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import Apptext from '../../../components/Apptext';
import RoomsComp from '../../../components/RoomsComp';
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';


const RoomsAvailable = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            price:"$29.99",
            plans:"/month",
            label: "Right Now",
            description:`You will get 20 listing to post in a month with this monthly plan`
        },
    
        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            price:"$59.99",
            plans:"/month",
            label: "Within a week",
            description:"You will get 50 listing to post in a month with this monthly plan"
        },
    
        {
            id: 'bd7acbea-c1b1-46c23-aed5-3ad53abb28ba',
            price:"$99.99",
            plans:"/month",
            label: "Within a month",
            description:"You will get 100 listing to post in a month with this monthly plan"
        },
        {
            id: 'bd7acbea-c1b1-43c23-aed5-3ad53abb28ba',
            price:"$99.99",
            plans:"/month",
            label: "Just browsing",
            description:"You will get 100 listing to post in a month with this monthly plan"
        },
    


    ];


    return (

        <View style={styles.container}>
            <IconHeaderComp
                onPress={() => navigation.goBack()}
                imgName={iconPath.leftArrow}
                heading={"When your rooms available for rent?"}
            />
            <View style={{alignSelf:'center'}}>
            <FlatList
                    data={DATA}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <RoomsComp 
                        label={item.label}
                        onPress={() => navigation.navigate("RoomsCalender") }
                        />
                        )}
                />
            </View>
        </View>
    )
}

export default RoomsAvailable;


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
    createTxt1:{
        alignSelf:'center', fontSize:13, fontFamily:'Poppins-Regular' 
    },
    termsTxt: {
        width:wp('90%'),marginTop:41,
        // backgroundColor:"red",
        alignSelf:'center'
    },
    hyperLink: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        textDecorationLine: 'underline',
        color: "#004cbe"
    }
});
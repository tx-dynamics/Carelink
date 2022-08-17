import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, FlatList, Image, TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import InboxComp from '../../../../components/InboxComp';


const Messages = ({ navigation }) => {

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            count: "+5",
            label: "James Clear",
            msg: "Hi Jackson, can you tell …",
            Img: require("../../../../../assets/JC.png"),
            dt: "5 minutes ago",
            move: "Detail"
        },
        {
            id: 'bd7acbewweea-c1b1-46c42-aed5-3ad53abb28ba',
            count: "",
            label: 'Amelia Tray',
            msg: "Will do, super, thank you",
            Img: require("../../../../../assets/JC.png"),
            dt: "2 hours ago",
            move: "Detail"
        },
   
       
    ];

    return (
        <View style={styles.container}>
            <Header
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />

                <View style={styles.marginView} >
                    <Apptext style={styles.rms} >Messages</Apptext>
                </View>
                <TouchableOpacity style={styles.searchBar}>
                    <Image style={styles.srchView}
                        source={require('../../../../../assets/search.png')} />
                    <TextInput
                        style={styles.srchTxt}
                        placeholder='Search'
                        placeholderTextColor={DefaultStyles.colors.lightgray}
                        onChangeText={(val) => console.log(val)}
                    />
                </TouchableOpacity>

                <View style={{marginTop:wp('2%')}}>
                    <FlatList
                        data={DATA}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        ListEmptyComponent={() => {
                            return (
                                <Apptext style={styles.noTxt}>
                                    No Item Found
                                </Apptext>
                            );
                        }}
                        renderItem={({ item, index }) => (
                            <InboxComp
                                imgName={item.Img}
                                label={item.label}
                                msg={item.msg}
                                onPress={() => navigation.navigate("ChatDetail")}
                            />

                        )}
                    />

                </View>
        </View>
    )
}

export default Messages;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },
    txtView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginTop: wp('5%'), marginHorizontal: wp('5%')
    },
    rms: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    },
    dtls: {
        color: DefaultStyles.colors.primary, textDecorationLine: 'underline',
    },
    marginView: {
        marginHorizontal: wp('5%'),
        marginTop: -5
    },
    ltst: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium'
    },
    searchBar: {
        height: 47,
        width: wp('90%'),
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: wp('4%'),
        borderRadius: 9,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: "gray"
    },
    srchView:{
        width: 15, height: 15, tintColor: "lightgray",
        marginHorizontal: 20 
    },
    srchTxt:{
        color: 'grey',marginLeft:-10, width: wp('70%') 
    },
    noTxt:{
        alignSelf: "center", marginTop: 50 
    }



});
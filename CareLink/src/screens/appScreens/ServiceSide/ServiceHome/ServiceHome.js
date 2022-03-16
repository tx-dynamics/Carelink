import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity,FlatList, Image,TextInput, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import LatestListingsComp from '../../../../components/LatestListingsComp';
import {DrawerActions, useNavigation} from '@react-navigation/native'
import ServiceRoomComp from '../../../../components/ServiceRoomComp';
import ProposalComp from '../../../../components/ProposalComp';
import ReportComp from '../../../../components/ReportComp';


const ServiceHome = ({ navigation }) => {

    const [isValue, setValue] = useState('');
    const [isKitchen, setKitchen] = useState(false)
    const [isParking, setParking] = useState(false)

    
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            no:"3",
            no1:"3",
            label: "Rooms",
            msg:"Available",
            width:wp('33%'),
            msg1:"Booked",
            description:`You will get 20 listing to post in a month with this monthly plan`
        },
    
        {
            id: 'bd7ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            no:"3",
            no1:"9",
            label: "Proposals",
            msg:"Booked",
            width:wp('53%'),
            msg1:"Submitted",
            description:`You will get 20 listing to post in a month with this monthly plan`
        },
        {
            id: 'bd7a42cbea-c1b1-46c2-aed5-3ad53abb28ba',
            no:"6",
            no1:"3",
            label: "Rooms",
            msg:"Listed",
            width:wp('53%'),
            msg1:"Booked",
            description:`You will get 20 listing to post in a month with this monthly plan`
        },
    
        {
            id: 'bd547ac4bea-c1b1-46c2-aed5-3ad53abb28ba',
            no:"2",
            no1:"9",
            label: "Proposals",
            msg:"Posted",
            width:wp('33%'),
            msg1:"Submitted",
            description:`You will get 20 listing to post in a month with this monthly plan`
        },
    ];

    const DATAL = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            label: "ABC Rental Agency",
            msg:"Room : 3",
            desc:"Received : 3H Ago",
            img:require('../../../../../assets/photo.png'),
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            label: "ABC Rental Agency",
            msg:"Room : 3",
            desc:"Received : 3H Ago",
            img:require('../../../../../assets/photo.png'),
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            label: "ABC Rental Agency",
            msg:"Room : 3",
            desc:"Received : 3H Ago",
            img:require('../../../../../assets/photo.png'),
        },
    
    ];


    return (
        <View style={styles.container}>
        <Header
        leftImgName={require('../../../../../assets/drawerIcon.png')}
        onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
        <ScrollView>
        <View style={styles.txtView}>
            <Apptext style={styles.rms} >My Job Post</Apptext>
        </View>
        <View style={styles.whiteBox}>
        <View style={{flexDirection:'row', alignItems:'center',}}>
        <View style={styles.imgView}>
        <Image style={{marginTop:15,}} source={require('../../../../../assets/mbl.png')} />
        </View>
        <Apptext style={styles.listingTxt}>
        Start listing your extra home with an agency and make money
        </Apptext>
        </View>
        <TouchableOpacity style={styles.lilBtn} >
        <Apptext style={styles.BtnTxt} >Start Listing</Apptext>
        </TouchableOpacity>
        </View>
        <View style={[styles.txtView, { marginTop:wp('9%')}]}>
            <Apptext style={styles.rms} >Rooms</Apptext>
            <TouchableOpacity>
            <Apptext style={styles.dtls} >See Details</Apptext>
            </TouchableOpacity>
        </View>
        <View style={styles.marginView} >
        <FlatList
                    data={DATA}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <ServiceRoomComp
                        labelValue={item.label}
                        AvailableRooms={item.no}
                        BookedRooms={item.no1}
                        width={item.width}
                        firstTxt={item.msg}
                        scndTxt={item.msg1}
                        />
                    )}
                />
          <View style={{flexDirection:'row',marginTop:wp('5%'), justifyContent:'space-between'}}>
            <Apptext style={styles.rms} >Received Proposals</Apptext>
        </View>
        <View style={{marginTop:21}}>
        <FlatList
                    data={DATAL}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <ProposalComp
                        showProposals={true}
                        name={item.label}
                        location={item.msg}
                        description={item.desc}
                        img={item.img}

                        />
                    )}
                />
        </View>
        <View style={[styles.txtView ]}>
            <Apptext style={[styles.rms, {marginHorizontal:-13, fontSize:20}]} >Payments Reports</Apptext>
            <TouchableOpacity>
            <Apptext style={styles.dtls} >Details</Apptext>
            </TouchableOpacity>
        </View>
        <View style={{marginTop:wp('7%')}}>
        <ReportComp
        firstHead={"Personal Balance"}
        firstPrc={"$500.00"}
        scndPrc={"$500.00"}
        thirdPrc={"$500.00"}
        frstPrc={"$500.00"}
        sncdHead={"Pending Payments"}
        thirdHead={"This month Payments"}
        frthHead={"October Payments"}
        />
        </View>
        </View> 
        </ScrollView>
        </View>
    )
}

export default ServiceHome;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        zIndex:999
    },
    whiteBox:{
        // flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:wp('90%'),
        alignSelf:'center',
        marginTop:wp('5%'),
        backgroundColor:"white",
        height:wp('51%'),
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 3,
    },
    imgView:{
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:"red",
        width:wp('30%')
    },
    listingTxt:{
        width:wp('55%'),
        // backgroundColor:"red",
        fontFamily:'Poppins-Medium',
        fontSize:17,
        color:DefaultStyles.colors.black
    },  
    lilBtn:{
        alignItems:'center',
        justifyContent:'center',
        width:103, 
        height:28,
        marginTop:-20,
        marginLeft:wp('5%'),
        backgroundColor:DefaultStyles.colors.primary,
        borderRadius:30
    },  
    BtnTxt:{
        fontFamily:'Poppins-Regular',
        fontSize:13,
        color:DefaultStyles.colors.white
    },
    txtView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:wp('3%'),
        marginHorizontal:wp('5%')
    },
    rms:{
        fontFamily:'Poppins-SemiBold',
        fontSize:17
    },
    dtls:{
        color:DefaultStyles.colors.primary,textDecorationLine: 'underline', 
    },
    marginView:{
        marginHorizontal:wp('5%'),
        marginTop:wp('6%')
    },
    ltst:{
        fontSize:20,
        fontFamily:'Poppins-Medium'
    }



});
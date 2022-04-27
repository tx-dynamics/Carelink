import React, { useEffect, useState } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import AuthNavigator from '../screens/authScreens/authNavigator';
import DefaultStyles from "../config/Styles";
import Apptext from "../components/Apptext";
import AgencyHome from "./appScreens/AgencySide/AgencyHome/AgencyHome";
import AgencySearch from "./appScreens/AgencySide/AgencySearch/AgencySearch";
import AgencyNotifications from "./appScreens/AgencySide/AgencyNotifications/AgencyNotifications";
import AgencyProfile from "./appScreens/AgencySide/AgencyProfile/AgencyProfile";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useSelector } from 'react-redux';
import RoomsProposals from "./appScreens/AgencySide/AgencyHome/RoomsProposals";
import RoomsDetails from "./appScreens/AgencySide/AgencyHome/RoomsDetails";
import ClientProfile from "./appScreens/AgencySide/AgencyProfile/ClientProfile";
import ListingDetails from "./appScreens/AgencySide/AgencySearch/ListingDetails";
import SendProposal from "./appScreens/AgencySide/AgencySearch/SendProposal";
import Messages from "./appScreens/AgencySide/Messages/Messages";
import ChatDetail from "./appScreens/AgencySide/Messages/ChatDetail";
import DrawerContent from "./Drawer/DrawerContent";
import Help from "./appScreens/AgencySide/Help/Help";
import SavedListing from "./appScreens/AgencySide/AgencySearch/SavedListing";
import ServiceHome from "./appScreens/ServiceSide/ServiceHome/ServiceHome";
import ServiceRooms from "./appScreens/ServiceSide/ServiceRooms";
import ServiceChatDetail from "./appScreens/ServiceSide/ServiceMessages/ServiceChatDetail";
import ServiceMessages from "./appScreens/ServiceSide/ServiceMessages/ServiceMessages";
import ReceivedProposal from "./appScreens/ServiceSide/ServiceRooms/ReceivedProposal";
import ProposalTerms from "./appScreens/ServiceSide/ServiceRooms/ProposalTerms";
import ProposalAccept from "./appScreens/ServiceSide/ServiceRooms/ProposalAccept";
import ServiceClientProfile from "./appScreens/ServiceSide/ServiceProfile/ServiceClientProfile";
import StartContract from "./appScreens/AgencySide/Contract/StartContract";
import MakeContract from "./appScreens/AgencySide/Contract/MakeContract";
import Rates from "./appScreens/AgencySide/Rates";
import ContractRead from "./appScreens/AgencySide/Contract/ContractRead";
import Read1 from "./appScreens/AgencySide/Contract/Read1";
import Read2 from "./appScreens/AgencySide/Contract/Read2";
import Read3 from "./appScreens/AgencySide/Contract/Read3";



const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator()
const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            // drawerStyle={isLargeScreen ? null : { width: '100%' }}
            drawerStyle={{
                //   borderRadius: wp("8%"),
                //   borderWidth: 2,
                //   backgroundColor:"red",
                borderColor: DefaultStyles.colors.primary,
                //   overflow: "hidden",
                width: wp("100%"),
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="Drawer" component={AppNavigator} />
        </Drawer.Navigator>

        // <Drawer.Navigator
        //     drawerStyle={{backgroundColor:DefaultStyles.colors.white, width: '75%'}}
        //     drawerContent={props => <DrawerContent {...props} />}>
        //      <Drawer.Screen name="Drawer" component={AppNavigator} />
        // </Drawer.Navigator>
    )
}


const WithoutBottomTabnavigator = () => {

    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <StackNavigator.Screen name="RoomsProposals" component={RoomsProposals} />
            <StackNavigator.Screen name="RoomsDetails" component={RoomsDetails} />
            <StackNavigator.Screen name="ClientProfile" component={ClientProfile} />
            <StackNavigator.Screen name="ListingDetails" component={ListingDetails} />
            <StackNavigator.Screen name="SendProposal" component={SendProposal} />
            <StackNavigator.Screen name="Messages" component={Messages} />
            <StackNavigator.Screen name="ChatDetail" component={ChatDetail} />
            <StackNavigator.Screen name="StartContract" component={StartContract} />
            <StackNavigator.Screen name="MakeContract" component={MakeContract} />
            <StackNavigator.Screen name="ContractRead" component={ContractRead} />
            <StackNavigator.Screen name="Read1" component={Read1} />
            <StackNavigator.Screen name="Read2" component={Read2} />
            <StackNavigator.Screen name="Read3" component={Read3} />

            <StackNavigator.Screen name="Rates" component={Rates} />
            <StackNavigator.Screen name="ServiceChatDetail" component={ServiceChatDetail} />
            <StackNavigator.Screen name="Help" component={Help} />
            <StackNavigator.Screen name="SavedListing" component={SavedListing} />
            <StackNavigator.Screen name="ReceivedProposal" component={ReceivedProposal} />
            <StackNavigator.Screen name="ProposalTerms" component={ProposalTerms} />
            <StackNavigator.Screen name="ProposalAccept" component={ProposalAccept} />


        </StackNavigator.Navigator>
    )
}


const AppNavigator = () => {

    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen name="Root" options={{ headerShown: false }}>
                {props => <MyTabs {...props} />}
            </StackNavigator.Screen>

            <StackNavigator.Screen name="withoutBottomTabnavigator" component={WithoutBottomTabnavigator}
                options={{ headerShown: false }} />
        </StackNavigator.Navigator>

    )
}


const GeneralNavigator = () => {

    return (

        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>

            <StackNavigator.Screen name="HomeNavigator" component={HomeNavigator} />


        </StackNavigator.Navigator>
    )
}

const HomeNavigator = () => {
    const usertype = useSelector((state) => state.auth.usertype)
    return (

        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>
            {usertype === "ServiceSide" ?
                <StackNavigator.Screen name="ServiceHome" component={ServiceHome} />
                :
                <StackNavigator.Screen name="AgencyHome" component={AgencyHome} />
            }
        </StackNavigator.Navigator>
    )
}

const SearchNavigator = () => {

    const usertype = useSelector((state) => state.auth.usertype)
    return (

        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>
                {usertype === "ServiceSide" ?
                <StackNavigator.Screen name="ServiceRooms" component={ServiceRooms} />
                :
                <StackNavigator.Screen name="AgencySearch" component={AgencySearch} />
                }

        </StackNavigator.Navigator>
    )
}

const BellNavigator = () => {

    const usertype = useSelector((state) => state.auth.usertype)
   
    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>
                {usertype === "ServiceSide" ?
                <StackNavigator.Screen name="ServiceMessages" component={ServiceMessages} />
                :
                <StackNavigator.Screen name="AgencyNotifications" component={AgencyNotifications} />
                }

        </StackNavigator.Navigator>
    )
}

const ProfileNavigator = () => {

    return (

        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>

            <StackNavigator.Screen name="AgencyProfile" component={AgencyProfile} />
            <StackNavigator.Screen name="ServiceClientProfile" component={ServiceClientProfile} />


        </StackNavigator.Navigator>
    )
}

const MyTabs = () => {

    const usertype = useSelector((state) => state.auth.usertype)
    
    return (
        <Tab.Navigator
            // tabBarOptions={{
            //     keyboardHidesTabBar: true,
            // }}
            tabBarOptions={{
                showIcon: true,
                showLabel: false,
                keyboardHidesTabBar: true,
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: DefaultStyles.colors.textColor,
                // keyboardHidesTabBar: true,
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: DefaultStyles.colors.white,
                    border: 0,
                    height: wp('18%'),
                },
                tabBarLabelStyle: {
                    fontSize: wp('2%'),
                    fontFamily: "Poppins-Regular",
                    color: DefaultStyles.colors.primary
                },

            }}>

            <Tab.Screen name="GeneralNavigator" component={GeneralNavigator}
                options={{
                
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={usertype ==="ServiceSide" ? styles.scBox1 : styles.tabBox1}>
                                <Image
                                    source={usertype === "ServiceSide" ? require('../../assets/serviceHome.png') : require('../../assets/home.png')}
                                    resizeMode={"contain"} />
                            </View>
                            :

                            <View style={usertype ==="ServiceSide" ? styles.scBox : styles.tabBox}>
                                <Image
                                    style={{ tintColor: "black" }}
                                    source={usertype === "ServiceSide" ? require('../../assets/serviceHome.png') : require('../../assets/home.png')}
                                    resizeMode={"contain"} />
                            </View>
                    )
                }} />
            <Tab.Screen name="SearchNavigator" component={SearchNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                        <View style={usertype ==="ServiceSide" ? styles.scBox1 : styles.tabBox1}>
                                <Image
                                    style={{ tintColor: "white" }}
                                    source={usertype === "ServiceSide" ? require('../../assets/scTwo.png') : require('../../assets/search.png')}
                                    
                                    resizeMode={"contain"} />
                            </View>
                            :

                            <View style={usertype ==="ServiceSide" ? styles.scBox : styles.tabBox}>
                                <Image
                                    source={usertype === "ServiceSide" ? require('../../assets/scTwo.png') : require('../../assets/search.png')}
                                    resizeMode={"contain"} />
                            </View>
                    )
                }} />

            <Tab.Screen name="bell" component={BellNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                        <View style={usertype ==="ServiceSide" ? styles.scBox1 : styles.tabBox1}>
                                <Image
                                    style={{ tintColor: "white" }}
                                    source={usertype === "ServiceSide" ? require('../../assets/scMsg.png') : require('../../assets/bell.png')}
                                    resizeMode={"contain"} />
                            </View>
                            :
                            <View style={usertype ==="ServiceSide" ? styles.scBox : styles.tabBox}>

                                <Image
                                    source={usertype === "ServiceSide" ? require('../../assets/scMsg.png') : require('../../assets/bell.png')}
                                    resizeMode={"contain"} />
                            </View>
                    )
                }} />
            <Tab.Screen name="ProfileNavigator" component={ProfileNavigator}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Apptext style={{
                            fontSize: wp('1%'), fontFamily: "Poppins-Regular",
                            color: focused ? DefaultStyles.colors.white : DefaultStyles.colors.white
                        }}>
                            Home</Apptext>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ?
                        <View style={usertype ==="ServiceSide" ? styles.scBox1 : styles.tabBox1}>
                                <Image
                                    style={{ tintColor: "white" }}
                                    source={usertype === "ServiceSide" ? require('../../assets/scPrfl.png') : require('../../assets/profiles.png')}/>
                            </View>
                            :
                            <View style={usertype ==="ServiceSide" ? styles.scBox : styles.tabBox}>
                                <Image
                                    source={usertype === "ServiceSide" ? require('../../assets/scPrfl.png') : require('../../assets/profiles.png')}
                                     />
                            </View>
                    )
                }} />

        </Tab.Navigator>
    );
}



const MainNavigator = () => {

    const user = useSelector((state) => state.auth.user)

    console.log("chkk", user)

    if (user != false) {
        return <DrawerNavigator />
    }
    else {
        return <AuthNavigator />
    }

}

export default MainNavigator;

const styles = StyleSheet.create({
    tabBox: {
        height: wp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('10%'),
        borderRadius: 20,
        // backgroundColor: DefaultStyles.colors.primary
    },
    tabBox1: {
        height: wp('14%'),
        alignItems: 'center',
        justifyContent: 'center',
        width: wp("14%"),
        borderRadius: 25,
        backgroundColor: DefaultStyles.colors.primary
    },
    scBox: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        borderRadius: 20,
    },
    scBox1: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        borderRadius: 20,
        backgroundColor: DefaultStyles.colors.primary
    }
});
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

const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
            headerShown:false 
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
    
    return(
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
            <StackNavigator.Screen name="Help" component={Help} />
            
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

    return (

        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <StackNavigator.Screen name="AgencyHome" component={AgencyHome} />

        </StackNavigator.Navigator>
    )
}
const SearchNavigator = () => {

    return (

        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <StackNavigator.Screen name="AgencySearch" component={AgencySearch} />
        </StackNavigator.Navigator>
    )
}

const BellNavigator = () => {

    return (

        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <StackNavigator.Screen name="AgencyNotifications" component={AgencyNotifications} />

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

        </StackNavigator.Navigator>
    )
}

const MyTabs = () => {

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
                    tabBarLabel: ({ focused }) => (
                        <Apptext style={{ fontSize: wp('1%'), fontFamily: "Poppins-Regular",
                         color: focused ? DefaultStyles.colors.white : DefaultStyles.colors.white }}>
                             Home</Apptext>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={styles.tabBox1}>
                                <Image
                                    source={require('../../assets/home.png')}
                                    resizeMode={"contain"} />
                            </View>
                            :
                            
                            <View style={styles.tabBox}>
                                <Image
                                    style={{tintColor:"black"}}
                                    source={require('../../assets/home.png')}
                                    resizeMode={"contain"} />
                            </View>
                    )
                }} />
                 <Tab.Screen name="SearchNavigator" component={SearchNavigator}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Apptext style={{ fontSize: wp('1%'), fontFamily: "Poppins-Regular", 
                        color: focused ? DefaultStyles.colors.white : DefaultStyles.colors.white }}>
                            Home</Apptext>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={styles.tabBox1}>
                                <Image
                                    style={{tintColor:"white"}}
                                    source={require('../../assets/search.png')}
                                    resizeMode={"contain"} />
                            </View>
                            :
                            
                            <View style={styles.tabBox}>
                                <Image
                                    source={require('../../assets/search.png')}
                                    resizeMode={"contain"} />
                            </View>
                    )
                }} />

                <Tab.Screen name="bell" component={BellNavigator}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Apptext style={{ fontSize: wp('1%'), fontFamily: "Poppins-Regular", 
                        color: focused ? DefaultStyles.colors.white : DefaultStyles.colors.white }}>
                            Home</Apptext>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={styles.tabBox1}>
                                <Image
                                    style={{tintColor:"white"}}
                                    source={require('../../assets/bell.png')}
                                    resizeMode={"contain"} />
                            </View>
                            :
                            
                            <View style={styles.tabBox}>
                                <Image
                                    source={require('../../assets/bell.png')}
                                    resizeMode={"contain"} />
                            </View>
                    )
                }} />
                 <Tab.Screen name="ProfileNavigator" component={ProfileNavigator}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <Apptext style={{ fontSize: wp('1%'), fontFamily: "Poppins-Regular",
                        color: focused ? DefaultStyles.colors.white : DefaultStyles.colors.white }}>
                            Home</Apptext>
                    ),
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={styles.tabBox1}>
                                <Image
                                    style={{tintColor:"white"}}
                                    source={require('../../assets/profiles.png')}
                                    resizeMode={"contain"} />
                            </View>
                            :
                            
                            <View style={styles.tabBox}>
                                <Image
                                    source={require('../../assets/profiles.png')}
                                    resizeMode={"contain"} />
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
    }
});
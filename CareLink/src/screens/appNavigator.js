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
import EditProfile from "./appScreens/ServiceSide/ServiceProfile/EditProfile";
import Received from "./appScreens/ServiceSide/Contract/Received";
import Feedback from "./appScreens/ServiceSide/Feedback/Feedback";
import { routes } from "../Constants";
import AgencyDetail from "./appScreens/ServiceSide/AgencyDetail/AgencyDetail";
import BookedRooms from "./appScreens/ServiceSide/ServiceRooms/BookedRooms";
import AvailableRoom from "./appScreens/ServiceSide/ServiceRooms/AvailableRoom";
import ListingOptions from "./authScreens/ServiceSide/ListingOptions";
import Note from "./authScreens/ServiceSide/Pricing/Note";
import AgencyLocation from "./authScreens/Agency/AgencyLocation";
import AgencyMap from "./authScreens/Agency/AgencyMap";
import ListingSummary from "./authScreens/Agency/ListingSummary";
import AvailableList from "./appScreens/ServiceSide/RoomList/AvailableList";
import ListedList from "./appScreens/ServiceSide/RoomList/ListedList";
import BookedList from "./appScreens/ServiceSide/RoomList/BookedList";
import InactiveList from "./appScreens/ServiceSide/RoomList/InactiveList";
import InactiveRoom from "./appScreens/ServiceSide/ServiceRooms/InactiveRooms";
import CertifcateScreen from "./appScreens/ServiceSide/ServiceProfile/CertifcateScreen";
import CertifcateDetail from "./appScreens/ServiceSide/ServiceProfile/CertifcateDetail";
import PaymentPlans from "./authScreens/Payment/PaymentPlans";
import PaymentMethod from "./authScreens/Payment/PaymentMethod";
import SelectCard from "./authScreens/Payment/SelectCard";
import PaymentDone from "./authScreens/Payment/PaymentDone";
import SettingScreen from "./appScreens/ServiceSide/SettingScreen/SettingScreen";
import ChangePassword from "./appScreens/GlobalScreens/ChangePassword/ChangePassword";
import AppFeedback from "./appScreens/GlobalScreens/AppFeedback/AppFeedback";
import HelpCenter from "./appScreens/GlobalScreens/HelpCenter/HelpCenter";
import Policy from "./authScreens/Register/Policy";
import Terms from "./authScreens/Register/Terms";
import DeleteAccountPassword from "./appScreens/GlobalScreens/DeleteAccount/DeleteAccountPassword";
import DeleteAccountOTP from "./appScreens/GlobalScreens/DeleteAccount/DeleteAccountOTP";
import CustomerListing from "./appScreens/AgencySide/CustomerListing/CustomerListing";


const Tab = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerStyle={{
                borderColor: DefaultStyles.colors.primary,
                width: wp("100%"),
            }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen options={{ drawerStyle: { width: "100%" } }} name="Drawer" component={AppNavigator} />
        </Drawer.Navigator>
    )
}


const WithoutBottomTabnavigator = () => {
    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <StackNavigator.Screen name="RoomsProposals" component={RoomsProposals} />
            <StackNavigator.Screen name={routes.roomDetails} component={RoomsDetails} />
            <StackNavigator.Screen name="ClientProfile" component={ClientProfile} />
            <StackNavigator.Screen name="ListingDetails" component={ListingDetails} />
            <StackNavigator.Screen name={routes.sendProposal} component={SendProposal} />
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
            <StackNavigator.Screen name="Received" component={Received} />
            <StackNavigator.Screen name="Help" component={Help} />
            <StackNavigator.Screen name="SavedListing" component={SavedListing} />
            <StackNavigator.Screen name="ReceivedProposal" component={ReceivedProposal} />
            <StackNavigator.Screen name="ProposalTerms" component={ProposalTerms} />
            <StackNavigator.Screen name="ProposalAccept" component={ProposalAccept} />
            <StackNavigator.Screen name={routes.feedback} component={Feedback} />
            <StackNavigator.Screen name="EditProfile" component={EditProfile} />
            <StackNavigator.Screen name={routes.agencyDetail} component={AgencyDetail} />
            <StackNavigator.Screen name={routes.bookedRoom} component={BookedRooms} />
            <StackNavigator.Screen name={routes.availableRoom} component={AvailableRoom} />
            <StackNavigator.Screen name={routes.inactiveRoom} component={InactiveRoom} />
            <StackNavigator.Screen name={routes.listingOptions} component={ListingOptions} />
            <StackNavigator.Screen name="Note" component={Note} />
            <StackNavigator.Screen name="AgencyLocation" component={AgencyLocation} />
            <StackNavigator.Screen name="AgencyMap" component={AgencyMap} />
            <StackNavigator.Screen name={routes.listingSummary} component={ListingSummary} />
            <StackNavigator.Screen name={routes.availableList} component={AvailableList} />
            <StackNavigator.Screen name={routes.listedList} component={ListedList} />
            <StackNavigator.Screen name={routes.bookedList} component={BookedList} />
            <StackNavigator.Screen name={routes.inactiveList} component={InactiveList} />
            <StackNavigator.Screen name={routes.userCertificateList} component={CertifcateScreen} />
            <StackNavigator.Screen name={routes.certificateDetail} component={CertifcateDetail} />
            <StackNavigator.Screen name="PaymentPlans" component={PaymentPlans} />
            <StackNavigator.Screen name="PaymentMethod" component={PaymentMethod} />
            <StackNavigator.Screen name="SelectCard" component={SelectCard} />
            <StackNavigator.Screen name="PaymentDone" component={PaymentDone} />
            <StackNavigator.Screen name={routes.setting} component={SettingScreen} />
            <StackNavigator.Screen name={routes.changePassword} component={ChangePassword} />
            <StackNavigator.Screen name={routes.appFeedback} component={AppFeedback} />
            <StackNavigator.Screen name={routes.helpCenter} component={HelpCenter} />
            <StackNavigator.Screen name={routes.privacyPlicy} component={Policy} />
            <StackNavigator.Screen name={routes.termsAndCondition} component={Terms} />
            <StackNavigator.Screen name={routes.deleteAccountPassword} component={DeleteAccountPassword} />
            <StackNavigator.Screen name={routes.deleteAccountOTP} component={DeleteAccountOTP} />
            <StackNavigator.Screen name={routes.customerListing} component={CustomerListing} />

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
    const usertype = useSelector((state) => state.splash.userType)
    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}>
            {usertype == "ServiceSide" ?
                <StackNavigator.Screen name="ServiceHome" component={ServiceHome} />
                :
                <StackNavigator.Screen name="AgencyHome" component={AgencyHome} />
            }
        </StackNavigator.Navigator>
    )
}

const SearchNavigator = () => {
    const usertype = useSelector((state) => state.splash.userType)
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
    const usertype = useSelector((state) => state.splash.userType)
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
    const usertype = useSelector((state) => state.splash.userType)
    return (
        <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
            {usertype === "ServiceSide" ?
                <StackNavigator.Screen name="ServiceClientProfile" component={ServiceClientProfile} />
                :
                <StackNavigator.Screen name="AgencyProfile" component={AgencyProfile} />
            }
        </StackNavigator.Navigator>
    )
}

const MyTabs = () => {
    const usertype = useSelector((state) => state.splash.userType)
    return (
        <Tab.Navigator
            // tabBarOptions={{
            //     showIcon: true,
            //     showLabel: false,
            //     keyboardHidesTabBar: true,
            // }}
            screenOptions={{
                headerShown: false,
                showIcon: true,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: DefaultStyles.colors.textColor,
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
                            <View style={usertype === "ServiceSide" ? styles.scBox1 : styles.tabBox1}>
                                <Image
                                    style={[styles.iconSize, { tintColor: "white" }]}
                                    source={usertype === "ServiceSide" ?
                                        require('../../assets/serviceTab1.png')
                                        :

                                        require('../../assets/firstTab.png')}
                                    resizeMode={"contain"} />
                            </View>
                            :

                            <View style={usertype === "ServiceSide" ? styles.scBox : styles.tabBox}>
                                <Image
                                    style={[styles.iconSize, { tintColor: "black" }]}
                                    source={usertype === "ServiceSide" ?
                                        require('../../assets/serviceTab1.png')
                                        :
                                        require('../../assets/firstTab.png')}
                                    resizeMode={"contain"} />
                            </View>
                    )
                }} />
            <Tab.Screen name="SearchNavigator" component={SearchNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={usertype === "ServiceSide" ? styles.scBox1 : styles.tabBox1}>
                                <Image
                                    style={[styles.iconSize, { tintColor: "white" }]}
                                    source={usertype === "ServiceSide" ?
                                        require('../../assets/serviceTab2.png') :
                                        require('../../assets/scndTab.png')}

                                    resizeMode={"contain"} />
                            </View>
                            :

                            <View style={usertype === "ServiceSide" ? styles.scBox : styles.tabBox}>
                                <Image
                                    style={[styles.iconSize]}
                                    source={usertype === "ServiceSide" ? require('../../assets/serviceTab2.png')
                                        :
                                        require('../../assets/scndTab.png')}
                                    resizeMode={"contain"} />
                            </View>
                    )
                }} />
            <Tab.Screen name="bell" component={BellNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ?
                            <View style={usertype === "ServiceSide" ? styles.scBox1 : styles.tabBox1}>
                                <Image
                                    style={[styles.iconSize, { tintColor: "white" }]}
                                    source={usertype === "ServiceSide" ?
                                        require('../../assets/serviceTab3.png')
                                        :
                                        require('../../assets/thirdTab.png')}
                                    resizeMode={"contain"} />
                            </View>
                            :
                            <View style={usertype === "ServiceSide" ? styles.scBox : styles.tabBox}>

                                <Image
                                    style={[styles.iconSize]}
                                    source={usertype === "ServiceSide" ?
                                        require('../../assets/serviceTab3.png')
                                        :
                                        require('../../assets/thirdTab.png')}
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
                            <View style={usertype === "ServiceSide" ? styles.scBox1 : styles.tabBox1}>
                                <Image
                                    style={[styles.iconSize, { tintColor: "white" }]}
                                    source={usertype === "ServiceSide" ?
                                        require('../../assets/serviceTab4.png') :
                                        require('../../assets/frthTab.png')} />
                            </View>
                            :
                            <View style={usertype === "ServiceSide" ? styles.scBox : styles.tabBox}>
                                <Image
                                    style={[styles.iconSize]}
                                    source={usertype === "ServiceSide" ?
                                        require('../../assets/serviceTab4.png')
                                        :
                                        require('../../assets/frthTab.png')}
                                />
                            </View>
                    )
                }} />

        </Tab.Navigator>
    );
}



const MainNavigator = () => {
    const user = useSelector((state) => state.splash.value)

    console.log("chkk", user)

    if (user != null) {
        return <DrawerNavigator />
    }
    else {
        return <AuthNavigator />
    }

}

export default MainNavigator;

const styles = StyleSheet.create({
    tabBox: {
        height: wp(12),
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(12),
        borderRadius: wp(20),
    },
    tabBox1: {
        height: wp(12),
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(12),
        borderRadius: wp(20),
        backgroundColor: DefaultStyles.colors.primary
    },
    scBox: {
        height: wp(12),
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(12),
        borderRadius: wp(20),
    },
    scBox1: {
        height: wp(12),
        alignItems: 'center',
        justifyContent: 'center',
        width: wp(12),
        borderRadius: wp(20),
        backgroundColor: DefaultStyles.colors.primary
    },
    iconSize: {
        height: wp(8),
        width: wp(8)
    }
});
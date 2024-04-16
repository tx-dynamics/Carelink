import React from "react";
import { View, StyleSheet, TouchableOpacity, } from "react-native";
import DefaultStyles from "../../config/Styles";
import { widthPercentageToDP as wp, } from "react-native-responsive-screen";
import Apptext from "../../components/Apptext";
import FormButton from "../../components/FormButton";
import { DrawerActions } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { userSave } from "../../redux/Slices/splashSlice";
import { heightPixel, routes, widthPixel } from "../../Constants";
import Header from "../../components/Header";
import colors from "../../config/colors";
import AppGLobalView from "../../components/AppGlobalView/AppGLobalView";


function DrawerContent({ navigation, userImg, username, userEmail }) {
    const usertype = useSelector((state) => state.splash.userType)
    const dispatch = useDispatch()
    return (
        <AppGLobalView style={styles.container} >
            <View style={styles.DirectionView}>
                <Header headerLabel={"Side Menu"}
                    onPressLeft={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    leftImgStyle={styles.leftIconStyle} leftImgName={require("../../../assets/cross.png")} />
                <View style={{ }} >
                    {/* Single Item */}
                    <TouchableOpacity onPress={() => navigation.navigate("ProfileNavigator")} style={styles.items}>
                        <Apptext style={styles.itemsTxt}>Profile</Apptext>
                    </TouchableOpacity>
                    {/* ITEMS ENDS HERE */}

                    {/* Single Item */}
                    {
                        usertype === "ServiceSide" ?
                            <TouchableOpacity
                                onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.setting })}
                                style={styles.items}>
                                <Apptext style={styles.itemsTxt}>Settings & Privacy</Apptext>
                            </TouchableOpacity>
                            :
                            <View>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.activeContracts })}
                                    style={styles.items}>
                                    <Apptext style={styles.itemsTxt}>Active Contracts</Apptext>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "SavedListing" })}
                                    style={styles.items}>
                                    <Apptext style={styles.itemsTxt}>Saved Listings</Apptext>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "Rates" })}

                                    style={styles.items}>
                                    <Apptext style={styles.itemsTxt}>Rates</Apptext>
                                </TouchableOpacity>
                            </View>
                    }
                    {/* ITEMS ENDS HERE */}

                    {/* Single Item */}

                    {/* ITEMS ENDS HERE */}

                    {/* Single Item */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "Help" })}
                        style={styles.items}>
                        <Apptext style={styles.itemsTxt}>Help</Apptext>
                    </TouchableOpacity>
                    {/* ITEMS ENDS HERE */}
                </View>
            </View>
            <TouchableOpacity style={styles.items} onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: routes.deleteAccountPassword })}>
                <Apptext style={styles.itemsTxt}>Delete Account</Apptext>
            </TouchableOpacity>
            <View style={{ marginTop: wp('12%') }}>
                <FormButton onPress={() => dispatch(userSave(null))}
                    buttonTitle={"Log out"}
                    width={widthPixel(357)}
                    backgroundColor={DefaultStyles.colors.white}
                    color={"black"}
                    borderColor="black"
                    borderWidth={1}
                />
            </View>
        </AppGLobalView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "100%"
    },
    leftIconStyle: {
        width: widthPixel(25),
        height: widthPixel(25),
        tintColor: colors.black
    },
    bck: {
        marginTop: wp('10%'),
        marginHorizontal: wp('7%')
    },
    items: {
        alignSelf: 'center',
        marginTop: heightPixel(30)
    },
    itemsTxt: {
        fontSize: 17,
        fontFamily: 'Poppins-SemiBold',
        fontWeight:"600"
    }

});

export default DrawerContent;

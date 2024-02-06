import React from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import DefaultStyles from "../../config/Styles";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Apptext from "../../components/Apptext";
import FormButton from "../../components/FormButton";
import { DrawerActions } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
// import { userSave } from "../../../android/app/src/redux/Slices/splashSlice";
import { userSave } from "../../redux/Slices/splashSlice";
import { routes, widthPixel } from "../../Constants";


function DrawerContent({ navigation, userImg, username, userEmail }) {
    const backimg = require("../../../assets/cross.png");
    const usertype = useSelector((state) => state.splash.userType)
    const dispatch = useDispatch()

    return (

        <View style={styles.container} >
            <View style={styles.DirectionView}>
                <TouchableOpacity
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                    style={styles.bck}>
                    <Image style={{ tintColor: "black", width: 16, height: 16 }} source={backimg} />
                </TouchableOpacity>

                <View style={{ marginTop: wp('5%') }} >
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
                                    onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "RoomsProposals" })}
                                    style={styles.items}>
                                    <Apptext style={styles.itemsTxt}>My Jobs</Apptext>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: "100%"
    },
    bck: {
        marginTop: wp('10%'),
        marginHorizontal: wp('7%')
    },
    items: {
        alignSelf: 'center',
        marginTop: wp('10%')
    },
    itemsTxt: {
        fontSize: 17,
        fontFamily: 'Poppins-SemiBold'
    }

});

export default DrawerContent;

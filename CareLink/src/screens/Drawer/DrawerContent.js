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
import { useSelector } from 'react-redux';


function DrawerContent({ navigation, userImg, username, userEmail }) {
    const backimg = require("../../../assets/cross.png");
    const usertype = useSelector((state) => state.auth.usertype)

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
                    <TouchableOpacity style={styles.items}>
                        <Apptext style={styles.itemsTxt}>Profile</Apptext>
                    </TouchableOpacity>
                    {/* ITEMS ENDS HERE */}

                    {/* Single Item */}
                    {
                        usertype === "ServiceSide" ?
                            <TouchableOpacity
                                onPress={() => navigation.navigate("withoutBottomTabnavigator", { screen: "Feedback" })}
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
                    <TouchableOpacity style={styles.items}>
                        <Apptext style={styles.itemsTxt}>Articles & Guides</Apptext>
                    </TouchableOpacity>
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
            <View style={{ marginTop: wp('12%') }}>
                <FormButton
                    buttonTitle={"Log out"}
                    width={wp('70%')}
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

import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import DefaultStyles from "../../config/Styles";
import {
    DrawerContentScrollView,
    DrawerItem,
} from "@react-navigation/drawer";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Apptext from "../../components/Apptext";
import FormButton from "../../components/FormButton";
import { useNavigation, useIsFocused , DrawerActions} from '@react-navigation/native'


function DrawerContent({ navigation, userImg, username, userEmail }) {
    const backimg = require("../../../assets/cross.png");
    const [back1, setback1] = useState();
    const [back2, setback2] = useState();
    const [back3, setback3] = useState();
    const [back4, setback4] = useState();
    const [back5, setback5] = useState();
    const [back6, setback6] = useState();
    const [back7, setback7] = useState();
    const [back8, setback8] = useState();
    const [back9, setback9] = useState();
    const [back10, setback10] = useState();
    const [back11, setback11] = useState();
    const [back12, setback12] = useState();

    return (
        <View style={styles.container} >
            <View style={styles.DirectionView}>
                <TouchableOpacity
                    // onPress={() => navigation.goBack()}
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
                    <TouchableOpacity style={styles.items}>
                        <Apptext style={styles.itemsTxt}>My Jobs</Apptext>
                    </TouchableOpacity>
                    {/* ITEMS ENDS HERE */}

                    {/* Single Item */}
                    <TouchableOpacity style={styles.items}>
                        <Apptext style={styles.itemsTxt}>Saved Listings</Apptext>
                    </TouchableOpacity>
                    {/* ITEMS ENDS HERE */}

                    {/* Single Item */}
                    <TouchableOpacity style={styles.items}>
                        <Apptext style={styles.itemsTxt}>Payment Reports</Apptext>
                    </TouchableOpacity>
                    {/* ITEMS ENDS HERE */}

                    {/* Single Item */}
                    <TouchableOpacity style={styles.items}>
                        <Apptext style={styles.itemsTxt}>Articles & Guides</Apptext>
                    </TouchableOpacity>
                    {/* ITEMS ENDS HERE */}

                    {/* Single Item */}
                    <TouchableOpacity 
                    onPress={() => navigation.navigate("withoutBottomTabnavigator",{screen:"Help"})}
                    style={styles.items}>
                        <Apptext style={styles.itemsTxt}>Help</Apptext>
                    </TouchableOpacity>
                    {/* ITEMS ENDS HERE */}
                </View>
            </View>
            <View style={{ marginTop: wp('12%') }}>
                <FormButton
                    buttonTitle={"Log out"}
                    width={wp('75%')}
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
        // marginTop: 0,
        flex: 1,
        // flexGrow:1,
        // width: wp('90%'),
        // height:wp('100%'),
        // backgroundColor: "red"
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

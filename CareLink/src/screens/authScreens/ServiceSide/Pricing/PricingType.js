import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Modal, TouchableOpacity, FlatList, Image, ActivityIndicator, Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Apptext from '../../../../components/Apptext';
import DefaultStyles from '../../../../config/Styles';
import FormButton from '../../../../components/FormButton';
import DropDownPicker from 'react-native-dropdown-picker';

const PricingType = ({ navigation }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Fixed', value: 'Fixed' },
        { label: 'Starts at', value: 'Starts at' },
        { label: 'Hourly', value: 'Hourly' },
        { label: 'Free', value: 'Free' },
        { label: 'Don’t Show', value: 'Don’t Show' }

    ]);
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={{ marginHorizontal: wp('5%'), marginTop: 18 }}
                    source={require('../../../../../assets/leftArrow.png')} />
            </TouchableOpacity>
            <View>
                <Apptext style={styles.createTxt}>Set your pricing type </Apptext>
            </View>
            <Apptext style={styles.bkTxt} >Price Type:</Apptext>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                placeholder="Price Type"
                containerStyle={{ width: wp('90%'), marginTop: wp('7%'), alignSelf: 'center' }}
                style={{ width: wp('90%'), alignSelf: 'center' }}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />

            <View style={{ marginTop: wp('80%') }}>
                <FormButton
                    buttonTitle={"Next"}
                    width={"90%"}
                    onPress={() => navigation.navigate("Note")}
                />
            </View>
        </ScrollView>
    )
}

export default PricingType;


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
    inputContainer: {
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        height: 48,
        marginTop: wp('12%'),
        borderWidth: 1,
        borderColor: DefaultStyles.colors.black
    },
    insideDropDowm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: wp('2%'),
        marginHorizontal: wp('5%')
    },
    cutView: {
        width: 78,
        marginTop: -20,
        marginHorizontal: wp('5%'),
        height: 20,
        backgroundColor: "white"
    },
    descTxt: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    },
    bkTxt: {
        fontSize: 23,
        fontFamily: 'Poppins-Medium',
        marginHorizontal: wp('5%'),
        marginTop: wp('4%')
    },
    dropdown: {
        height: 190, borderRadius: 2, borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10, width: '90%',
        borderColor: "black", borderWidth: 1, borderTopColor: "white",
        alignSelf: 'center', backgroundColor: "red", marginTop: wp('68%')
    }
});
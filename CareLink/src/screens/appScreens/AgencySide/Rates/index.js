import React, { useState } from 'react';
import {
    StyleSheet, View
} from 'react-native';
import DefaultStyles from "../../../../config/Styles";
import Apptext from '../../../../components/Apptext';
import Header from '../../../../components/Header';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Table, Rows } from 'react-native-table-component';
import { heightPixel, widthPixel } from '../../../../Constants';
import AppDropDownPicker from '../../../../components/AppDropDownPicker/AppDropDownPicker';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';

const Rates = ({ navigation }) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [isIndex, setIndex] = useState(0)
    const [items, setItems] = useState([
        {
            id: 0,
            label: "General",
            value: "General",
            rate: [['Hourly', '$100',],
            ['Start At', '$80'],
            ['Fixed', '$90'],],
        },
        {
            id: 1,
            label: "Primary",
            value: "Primary",
            rate: [['Hourly', '$150',],
            ['Start At', '$120'],
            ['Fixed', '$100'],],
        },
        {
            id: 2,
            label: "XYZ Contract",
            value: "XYZ Contract",
            rate: [['Hourly', '$200',],
            ['Start At', '$180'],
            ['Fixed', '$190'],],
        },
    ])
    return (
        <AppGLobalView style={styles.container}>
            <Header headerLabel={"Rates"}
                leftImgName={require('../../../../../assets/headerBack.png')}
                onPressLeft={() => navigation.goBack()} />
            <Apptext style={[styles.msgTxt1]} >Check Rates State Wise </Apptext>
            <AppDropDownPicker mainViewStyle={{ marginTop: heightPixel(30), }} mainStyle={styles.dropDownMainStyle}
                title={"State"}
                open={open}
                setOpen={setOpen}
                items={items}
                setItems={setItems}
                value={value}
                setValue={setValue}
                onSelectItem={(v) => setIndex(v.id)}
            />
            <View style={styles.container1}>
                <Table
                    borderStyle={styles.tableStyle}>
                    <Rows data={items[isIndex].rate}
                        textStyle={styles.text}
                    />
                </Table>
            </View>
        </AppGLobalView>
    )
}

export default Rates;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
    },

    msgTxt1: {
        color: DefaultStyles.colors.black,
        marginHorizontal: wp('5%'),
        fontSize: 15, fontFamily: 'Poppins-Regular',
        // marginTop: heightPixel(10)
    },
    container1: {
        marginTop: heightPixel(50),
        left: 1,
        paddingHorizontal: widthPixel(20.7),
        backgroundColor: '#fff'
    },
    dropDownMainStyle: {
        paddingLeft: widthPixel(15),
    },
    text: {
        margin: 15,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center',
        fontSize: 16,
        color: DefaultStyles.colors.textColor
    },
    tableStyle: {
        borderWidth: 1,
        borderColor: DefaultStyles.colors.textColor,
    },
});
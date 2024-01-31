import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../../config/colors';
import { fontPixel, heightPixel, widthPixel } from '../../Constants';
import { fonts } from '../../Constants/Fonts';
const AppDropDownPicker = ({
    onChangeValue,
    open,
    setOpen,
    value,
    items,
    setValue,
    setItems,
    dropContainerStyle,
    mainStyle,
    listItemContStyle,
    listItemLabStyle,
    selectedItemLabStyle,
    title,
    mainViewStyle,
}) => {
    // const [items, setItems] = useState([
    //     {
    //         label: "yess",
    //         value: "yess"
    //     },
    //     {
    //         label: "No",
    //         value: "No"
    //     },
    // ])
    // const [value, setValue] = useState(null)
    // const [open, setOpen] = useState(false)
    return (
        <View style={[styles.mainView, mainViewStyle]}>
            {title &&
                <View style={styles.topView}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>}
            <DropDownPicker
                listMode='MODAL'
                onChangeValue={onChangeValue}
                open={open}
                setOpen={setOpen}
                value={value}
                items={items}
                setValue={setValue}
                setItems={setItems}
                dropDownDirection="DEFAULT"
                showTickIcon={false}
                style={[styles.dropDownStyle, mainStyle]}
                dropDownContainerStyle={[styles.dropDownContainerStyle, dropContainerStyle]}
                listItemContainerStyle={[styles.listItemContainerStyle, listItemContStyle]}
                listItemLabelStyle={[styles.listItemLabelStyle, listItemLabStyle]}
                selectedItemLabelStyle={[styles.selectedItemLabelStyle, selectedItemLabStyle]}
            />
        </View>
    )
}

export default AppDropDownPicker

const styles = StyleSheet.create({
    mainView: {
        // marginTop: heightPixel(20)
    },
    topView: {
        zIndex: 11111,
        position: "absolute",
        backgroundColor: colors.white,
        top: heightPixel(.5),
        left: widthPixel(36),
        paddingHorizontal: widthPixel(1),
        // height: heightPixel(22),
    },
    titleText: {
        bottom: heightPixel(2),
        color: colors.black,
        fontSize: fontPixel(16),
        fontFamily: fonts.Poppins_Medium,
    },
    dropDownStyle: {
        marginTop: heightPixel(10),
        alignSelf: "center",
        width: widthPixel(374),
        height: heightPixel(48),
        borderColor: colors.black,
        borderRadius: 10,
    },
    dropDownContainerStyle: {
        alignSelf: "center",
        borderRadius: widthPixel(10),
        // backgroundColor: colors.white,
        backgroundColor: colors.white,
        borderWidth: 1,
        width: widthPixel(374),
        // left: -11,
        // marginTop: heightPixel(10),
    },
    listItemContainerStyle: {
        // height: heightPixel(55)
    },
    listItemLabelStyle: {
        // marginTop: heightPixel(10),
        paddingVertical: heightPixel(10),
        paddingLeft: widthPixel(10),
        borderRadius: 5,
        fontFamily: fonts.Poppins_Regular,
        color: colors.black,
        justifyContent: 'space-between',
    },
    selectedItemLabelStyle: {
        paddingVertical: heightPixel(10),
        backgroundColor: colors.grash,
        color: colors.black,
    },
})
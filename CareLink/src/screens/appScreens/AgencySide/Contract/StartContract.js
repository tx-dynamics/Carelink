import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import DefaultStyles from "../../../../config/Styles";
import Header from '../../../../components/Header';
import FormButton from '../../../../components/FormButton';
import { appIcons } from '../../../../Constants/Utilities/assets';
import { heightPixel, routes, widthPixel } from '../../../../Constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppTextInput from '../../../../components/AppTextInput/AppTextInput';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import AppDropDownPicker from '../../../../components/AppDropDownPicker/AppDropDownPicker';
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView';
const StartContract = ({ navigation }) => {
    const [agency, setAgency] = useState("Agency Name")
    const [provider, setProviderName] = useState("Provider Name")
    const [open, setOpen] = useState(false)
    const [dateStart, setDateStart] = useState(new Date())
    const [dateEnd, setDateEnd] = useState(new Date())
    const [isStart, setStart] = useState(true)
    const [openType, setOpenType] = useState(false)
    const [value, setValue] = useState("")
    const [items, setItems] = useState([
        {
            id: 0,
            label: "General",
            value: "General"
        },
        {
            id: 1,
            label: "Primary",
            value: "Primary"
        },
        {
            id: 2,
            label: "XYZ Contract",
            value: "XYZ Contract"
        },
    ])
    const onStartOpen = () => {
        setOpen(true)
        setStart(true)
    }
    const onEndOpen = () => {
        setOpen(true)
        setStart(false)
    }
    return (
        <AppGLobalView style={styles.container}>
            <Header headerLabel={"Create Contract"}
                leftImgName={appIcons.headerBack}
                onPressLeft={() => navigation.goBack()} />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <AppTextInput title={"Agency"} />
                <AppTextInput title={"Provider"} />
                <AppTextInput right={appIcons.datePciker} value={moment(dateStart).format("DD-mm-yyyy")} editable={false} title={"Start Date"} onPress={onStartOpen} />
                <AppTextInput right={appIcons.datePciker} value={moment(dateEnd).format("DD-mm-yyyy")} editable={false} title={"End Date"} onPress={onEndOpen} />
                <AppDropDownPicker mainViewStyle={styles.dropDownStyle} mainStyle={styles.dropDownMainStyle}
                    title={"Contract Type"}
                    open={openType}
                    setOpen={setOpenType}
                    items={items}
                    setItems={setItems}
                    value={value}
                    setValue={setValue}
                    onChangeValue={(v) => setValue(v)}
                />
            </KeyboardAwareScrollView>
            <FormButton buttonTitle={"Continue"}
                // onPress={() => navigation.navigate(routes.roomDetails, { review: true })} 
                onPress={() => navigation.navigate("Read1")}
            />
            <DatePicker
                minimumDate={moment(Date.now())}
                mode='date'
                modal
                open={open}
                date={isStart ? dateStart : dateEnd}
                onConfirm={(date) => {
                    setOpen(false)
                    isStart ? setDateStart(date) : setDateEnd(date)
                }}
                onCancel={() => { setOpen(false) }}
            />
        </AppGLobalView>
    )
}

export default StartContract;
const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        paddingBottom: heightPixel(20)
    },
    dropDownStyle: {
        marginVertical: heightPixel(20),
    },
    dropDownMainStyle: { paddingLeft: widthPixel(20), },

});
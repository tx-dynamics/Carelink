import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../config/colors'
import { heightPixel } from '../../../Constants'
import IconHeaderComp from '../../../components/IconHeaderComp'
import { iconPath } from '../../../config/icon'
import LeftBoldTitle from '../../../components/LeftBoldTitle/LeftBoldTitle'
import AppTextInput from '../../../components/AppTextInput/AppTextInput'
import AppDropDownPicker from '../../../components/AppDropDownPicker/AppDropDownPicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormButton from '../../../components/FormButton'
import VerificationModal from '../../../components/VerificationModal/VerificationModal'
import { validInfo } from '../../../Constants/Utilities/validations'
const AddInformation = ({ navigation }) => {
    const [value, setValue] = useState("")
    const [open, setOpen] = useState(false)
    const [age, setAge] = useState("")
    const [exp, setExp] = useState("")
    const [visible, setVisible] = useState(false)
    const [items, setItems] = useState([
        {
            id: 0,
            label: "Single",
            value: "Single"
        },
        {
            id: 1,
            label: "Married",
            value: "Married"
        },
        {
            id: 2,
            label: "Divorced",
            value: "Divorced"
        },
    ])
    const onPressComplete = () => {
        //APK // if (validInfo(age, value, exp)) {
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
            navigation.navigate("PaymentPlans")
        }, 1500);
        // }
    }
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <IconHeaderComp title={"Verification Process"}
                    onPress={() => { navigation.goBack() }}
                    imgName={iconPath.leftArrow} />
                <LeftBoldTitle title={"Enter your Information"} />
                <View style={styles.marginView}>
                    <AppTextInput title={"Your Age"} value={age} onChangeText={setAge} keyboardType='number-pad' />
                </View>
                <View style={styles.marginView}>
                    <AppDropDownPicker
                        title={"Marital Status"}
                        open={open}
                        setOpen={setOpen}
                        items={items}
                        setItems={setItems}
                        value={value}
                        setValue={setValue}
                        onChangeValue={(v) => setValue(v)}
                    />
                </View>
                <View style={styles.marginView}>
                    <AppTextInput
                        value={exp}
                        onChangeText={setExp}
                        title={"Experience (Optional)"}
                        keyboardType='number-pad' />
                </View>
            </KeyboardAwareScrollView>
            <FormButton buttonTitle={"Complete Verification"} onPress={onPressComplete} />
            <VerificationModal
                visible={visible}
                title={"Verification Submitted"}
                midText={"Your are successfully submitted your verification"}
                subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis mauris at at nullam. Risus enim tellus pretium faucibus."}
            />
        </View>
    )
}

export default AddInformation

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: heightPixel(20)
    },
    marginView: {
        marginTop: heightPixel(25)
    },
})
import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../config/colors'
import AppStatusbar from '../../../components/AppStatusbar/AppStatusbar'
import IconHeaderComp from '../../../components/IconHeaderComp'
import { iconPath } from '../../../config/icon'
import { heightPixel } from '../../../Constants'
import ServiceProviderInfo from '../../../components/ServiceProviderInfo/ServiceProviderInfo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../../../components/FormButton'
import SuccessfullListedModal from '../../../components/SuccessfullListedModal/SuccessfullListedModal'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../redux/actions/authAction'

const ListingSummary = ({ navigation }) => {
    const [isVisible, setVisible] = useState(false)
    const dispatch = useDispatch()

    const onPressGoTo = () => {
        setVisible(false)
        dispatch(setUser(true))
        navigation.navigate("HomeNavigator")
    }
    const onPressListNow = () => {
        setVisible(true)
    }
    return (
        <View style={styles.container}>
            <AppStatusbar />
            <IconHeaderComp
                title={"Summary"}
                heading={"Listing Summary"}
                imgName={iconPath.leftArrow}
                onPress={() => navigation.goBack()}
            />
            <KeyboardAwareScrollView >
                <ServiceProviderInfo
                    attachBath
                    days={"20"}
                    floor={"2nd"}
                    availableOn={"November 15"}
                    images location={"ABC Block, New york, USA"}
                    note={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel in ipsum duis suspendisse. Ut urna, tristique magnis mauris, volutpat purus"} />
            </KeyboardAwareScrollView>
            <FormButton
                buttonTitle={"List Now"}
                onPress={onPressListNow}
            />
            <SuccessfullListedModal visible={isVisible} onPress={onPressGoTo} />
        </View>
    )
}

export default ListingSummary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: heightPixel(20)
    },
})
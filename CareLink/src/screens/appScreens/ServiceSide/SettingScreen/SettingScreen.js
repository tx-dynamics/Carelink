import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../../config/colors'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'
import LeftSideBoldHeading from '../../../../components/LeftSideBoldHeading/LeftSideBoldHeading'
import SettingBox from '../../../../components/SettingBox/SettingBox'
import { heightPixel, routes } from '../../../../Constants'
import AppGLobalView from '../../../../components/AppGlobalView/AppGLobalView'

const SettingScreen = ({ navigation, route }) => {
    const [isOn, setOn] = useState(false)
    const settingData = [
        {
            id: 1,
            title: "Notification",
            radio: true,
        },
        {
            id: 2,
            title: "Change Password",
            route: routes.changePassword,
        },
        {
            id: 3,
            title: "Feedback",
            route: routes.appFeedback,
        },
        {
            id: 4,
            title: "Terms of Use",
            route: routes.termsAndCondition,
        },
        {
            id: 5,
            title: "Privacy Policy",
            route: routes.privacyPlicy,
        },
    ]
    return (
        <AppGLobalView style={styles.container}>
            <IconHeaderComp
                title={"Settings"}
                imgName={iconPath.leftArrow}
                onPress={() => navigation.goBack()}
            />
            {/* <LeftSideBoldHeading title={"Settings"} /> */}
            <FlatList showsVerticalScrollIndicator={false} style={{ marginTop: heightPixel(20) }} data={settingData} renderItem={({ item, index }) => <SettingBox
                isOn={isOn}
                onToggle={(v) => setOn(v)}
                disable={item.radio}
                radio={item.radio}
                title={item.title}
                onPress={() => item.route && navigation.navigate(item.route)}
            />} />

        </AppGLobalView>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    }
})
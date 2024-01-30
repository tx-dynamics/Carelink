import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../config/colors'
import { heightPixel } from '../../../Constants'
import IconHeaderComp from '../../../components/IconHeaderComp'
import { iconPath } from '../../../config/icon'
import LeftBoldTitle from '../../../components/LeftBoldTitle/LeftBoldTitle'

const AddInformation = ({ navigation }) => {
    return (
        <View style={{
            backgroundColor: colors.white,
            flex: 1,
            justifyContent: "space-between",
            paddingBottom: heightPixel(20)
        }}>
            <View>
                <IconHeaderComp title={"Verification Process"} heading={"Verification Process"}
                    onPress={() => { navigation.goBack() }}
                    imgName={iconPath.leftArrow} />
                <LeftBoldTitle title={"Enter your Information"} />
            </View>
        </View>
    )
}

export default AddInformation

const styles = StyleSheet.create({})
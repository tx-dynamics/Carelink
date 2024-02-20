import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppStatusbar from '../../../../components/AppStatusbar/AppStatusbar'
import { heightPixel, routes, widthPixel } from '../../../../Constants'
import { appIcons } from '../../../../Constants/Utilities/assets'
import colors from '../../../../config/colors'
import Header from '../../../../components/Header'
import ServiceListingComp from '../../../../components/ServiceListingComp'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FormButton from '../../../../components/FormButton'
import ServiceProviderInfo from '../../../../components/ServiceProviderInfo/ServiceProviderInfo'
import IconHeaderComp from '../../../../components/IconHeaderComp'
import { iconPath } from '../../../../config/icon'

const BookedRooms = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppStatusbar />
            <Header headerLabel={"Booked Room"} leftImgName={appIcons.headerBack}
                onPressLeft={() => navigation.goBack()} />
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
                <ServiceListingComp containerStyle={{ marginTop: heightPixel(1), marginBottom: 0, }} reviews onPress={() => navigation.navigate(routes.agencyDetail, { isChat: false })} pic={appIcons.dummyPic1}
                    showProposals={true}
                    showTags={false}
                    name={"ABC Rental Agency"}
                    location={"7+ Year Experience"}
                    rightTxt={""}
                />
                <ServiceProviderInfo
                    days={"20"}
                    floor={"2nd"}
                    availableOn={"November 15"}
                    images location={"ABC Block, New york, USA"}
                    note={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel in ipsum duis suspendisse. Ut urna, tristique magnis mauris, volutpat purus"} />
            </KeyboardAwareScrollView>
            <FormButton
                onPress={() => navigation.navigate(routes.feedback)}
                buttonTitle={"Mark to Complete"} />
        </View>
    )
}

export default BookedRooms

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    leftImgStyle: {
        width: widthPixel(23),
        height: heightPixel(16),
    },
})
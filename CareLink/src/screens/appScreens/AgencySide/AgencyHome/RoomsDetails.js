import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultStyles from "../../../../config/Styles";
import FormButton from '../../../../components/FormButton';
import Header from '../../../../components/Header';
import { appIcons } from '../../../../Constants/Utilities/assets';
import UserInfoComp from '../../../../components/UserInfoComp/UserInfoComp';
import ServiceProviderInfo from '../../../../components/ServiceProviderInfo/ServiceProviderInfo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { heightPixel, routes, widthPixel } from '../../../../Constants';

const RoomsDetails = ({ navigation }) => {
    const [liked, setLiked] = useState(false)
    return (
        <View style={styles.container}>
            <Header
                headerLabel={"Listing Details"}
                leftImgName={appIcons.headerBack}
                onPressRight={() => setLiked(!liked)}
                rightImgStyle={styles.rightIconStyle}
                onPressLeft={() => navigation.goBack()}
                rightImg={liked ? appIcons.heartRed : appIcons.heartBlank} />
            <KeyboardAwareScrollView >
                <UserInfoComp pic={appIcons.dummyUser} title={"James Clear"} />
                <ServiceProviderInfo
                    images
                    days={"20"}
                    floor={"2nd"}
                    availableOn={"November 15"}
                    location={"ABC Block, New york, USA"}
                    note={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vel in ipsum duis suspendisse. Ut urna, tristique magnis mauris, volutpat purus"} />
            </KeyboardAwareScrollView>
            <FormButton buttonTitle={"Submit Proposal"} onPress={() => navigation.navigate(routes.sendProposal)} />
        </View>
    )
}

export default RoomsDetails;

const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        paddingBottom: heightPixel(20)
    },
    rightIconStyle: {
        width: widthPixel(30),
        height: widthPixel(30),
    },
});
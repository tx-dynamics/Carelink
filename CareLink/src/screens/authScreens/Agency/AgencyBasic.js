import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DefaultStyles from "../../../config/Styles";
import FormButton from '../../../components/FormButton';
import IconHeaderComp from '../../../components/IconHeaderComp';
import { iconPath } from '../../../config/icon';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { heightPixel, routes } from '../../../Constants';
import AppTextInput from '../../../components/AppTextInput/AppTextInput';

const AgencyBasic = ({ navigation }) => {
    const [agencyName, setAgencyName] = useState("")
    const [isExperience, setExperience] = useState("")
    const [about, setAbout] = useState("")
    return (
        <View style={styles.container}>
            <IconHeaderComp title={"Enter Information"}
                onPress={() => { navigation.goBack() }}
                imgName={iconPath.leftArrow}
                heading={"Enter your agency name and about"} />
            <KeyboardAwareScrollView>
                <AppTextInput
                    value={agencyName}
                    title={"Agency name"}
                    onChangeText={setAgencyName}
                    mainViewStyle={styles.agencyStyle} />
                <AppTextInput
                    value={isExperience}
                    title={"Experience"}
                    onChangeText={setExperience} />
                <AppTextInput
                    multiline
                    value={about}
                    title={"About"}
                    onChangeText={setAbout}
                    containerStyle={styles.aboutHeight}
                    mainViewStyle={styles.aboutMainStyle} />
            </KeyboardAwareScrollView>
            <FormButton
                buttonTitle={"Next"}
                onPress={() => navigation.navigate(routes.agencyPhotos)} />
        </View>
    )
}

export default AgencyBasic;


const styles = StyleSheet.create({
    container: {
        backgroundColor: DefaultStyles.colors.white,
        flex: 1,
        paddingBottom: heightPixel(20)
    },
    createTxt: {
        marginTop: wp('8%'),
        color: DefaultStyles.colors.black,
        fontFamily: 'Poppins-Regular',
        fontSize: wp('6%'),
        marginHorizontal: wp('5%')
    },
    createTxt1: {
        alignSelf: 'center', fontSize: 13, fontFamily: 'Poppins-Regular'
    },
    termsTxt: {
        width: wp('90%'), marginTop: 41,
        alignSelf: 'center'
    },
    hyperLink: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        textDecorationLine: 'underline',
        color: "#004cbe"
    },
    agencyStyle: {
        marginTop: heightPixel(40),
    },
    aboutMainStyle: {
        marginBottom: heightPixel(20),
    },
    aboutHeight: {
        height: null,
        maxHeight: heightPixel(300),
        minHeight: heightPixel(80),
    }
});
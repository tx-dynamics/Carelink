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
import { RedFlashMessage, SuccessFlashMessage } from '../../../Constants/Utilities/assets/Snakbar';
import { useDispatch, useSelector } from 'react-redux';
import { fromProfile } from '../../../redux/Slices/appSlice';
import AppGLobalView from '../../../components/AppGlobalView/AppGLobalView';

const AgencyBasic = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const [agencyName, setAgencyName] = useState("")
    const [isExperience, setExperience] = useState("")
    const [about, setAbout] = useState("")
    const isFromProfile = useSelector((state) => state.appSlice.fromProfile)

    const onPressButton = () => {
        if (isFromProfile) {
            navigation.goBack()
            // SuccessFlashMessage("Information Changed")
            dispatch(fromProfile(false))
        }
        else {
            navigation.navigate(routes.agencyPhotos)
        }
    }


    // checking agency basics
    const checkBasics = () => {
        try {
          if (!agencyName.trim()) {
            RedFlashMessage('Agency Name is required.');
            return false;
          } else if (agencyName.length < 3) {
            RedFlashMessage('Agency Name should be at least 3 characters long.');
            return false;
          }
      
          if (!isExperience.trim()) {
            RedFlashMessage('Experience is required.');
            return false;
          } else if (isExperience.length < 5) {
            RedFlashMessage('Experience should be at least 5 characters long.');
            return false;
          }
      
          if (!about.trim()) {
            RedFlashMessage('About is required.');
            return false;
          } else if (about.length < 10) {
            RedFlashMessage('About should be at least 10 characters long.');
            return false;
          }
      
          return true; // All checks passed
        } catch (error) {
          console.error("Error while checking data in agency basics:", error);
        //   RedFlashMessage('An error occurred while checking agency basics. Please try again later.');
          return false;
        }
      };
      
    return (
        <AppGLobalView style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <IconHeaderComp title={isFromProfile ? "About" : "Enter Information"}
                    onPress={() => { navigation.goBack() }}
                    imgName={iconPath.leftArrow}
                    heading={isFromProfile ? "About Us" : "Enter your agency name and about"} />
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
                buttonTitle={isFromProfile ? "Change" : "Next"}
                onPress={onPressButton} />
        </AppGLobalView>
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
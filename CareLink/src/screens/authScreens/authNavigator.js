import React, { useEffect } from "react"
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../authScreens/Splash/Splash';
import Step1 from '../authScreens/OnBoarding/Step1';
import Step2 from "./OnBoarding/Step2";
import Step3 from "./OnBoarding/Step3";
import AskRegister from "./AskRegister";
import Register from "./Register";
import Policy from "./Register/Policy";
import Terms from "./Register/Terms";
import EmailVerification from "./Verify/EmailVerfication";
import Verified from "./Verify/Verified";
import Success from "./Verify/Success";
import AgencyBasic from "./Agency/AgencyBasic";
import AgencyPhotos from "./Agency/AgencyPhotos";
import AgencyLocation from "./Agency/AgencyLocation";
import AgencyMap from "./Agency/AgencyMap";
import PaymentPlans from "./Payment/PaymentPlans";
import PaymentMethod from "./Payment/PaymentMethod";
import SelectCard from "./Payment/SelectCard";
import PaymentDone from "./Payment/PaymentDone";
import PayPalDetails from "./Payment/PayPalDetails";
import AddCard from "./Payment/AddCard";
import ListingOptions from "./ServiceSide/ListingOptions";
import SelectCareGiver from "./ProviderScreens/SelectCareGiver";
import ActivitySelect from "./ProviderScreens/ActivitySelect";
import ReviewDetails from "./ProviderScreens/ReviewDetails";
import CareGiver from "./ProviderScreens/CareGiver";
import TellDescription from "./ProviderScreens/TellDescription";
import Schedule from "./ProviderScreens/Schedule";
import RoomsAvailable from "./ServiceSide/RoomsAvailable";
import RoomsCalender from "./ServiceSide/Calender/RoomsCalender";
import HourlyPricing from "./ServiceSide/Pricing/HourlyPricing";
import Note from "./ServiceSide/Pricing/Note";
import PricingType from "./ServiceSide/Pricing/PricingType";
import { routes } from "../../Constants";
import ListingSummary from "./Agency/ListingSummary";
import LoginScreen from "./Login";
import ForgetEmailScreen from "./ForgetPasswordScreens/ForgetEmailScreen";
import ForgetUpdateScreen from "./ForgetPasswordScreens/ForgetPasswordUpdate";
import AddDocuments from "./VerificationProcess/AddDocuments";
import AddInformation from "./VerificationProcess/AddInformation";


const AuthStack = createNativeStackNavigator()

const SplashNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <AuthStack.Screen name="Splash" component={Splash} />
            <AuthStack.Screen name="Step1" component={Step1} />
            <AuthStack.Screen name="Step2" component={Step2} />
            <AuthStack.Screen name="Step3" component={Step3} />
            <AuthStack.Screen name="AskRegister" component={AskRegister} />
            <AuthStack.Screen name="Register" component={Register} />
            <AuthStack.Screen name={routes.loginScreen} component={LoginScreen} />
            <AuthStack.Screen name={routes.forgetPasswordEmail} component={ForgetEmailScreen} />
            <AuthStack.Screen name={routes.forgetPasswordUpdate} component={ForgetUpdateScreen} />
            <AuthStack.Screen name={routes.addDocuments} component={AddDocuments} />
            <AuthStack.Screen name={routes.addInformation} component={AddInformation} />
            <AuthStack.Screen name="Terms" component={Terms} />
            <AuthStack.Screen name="Policy" component={Policy} />
            <AuthStack.Screen name="EmailVerification" component={EmailVerification} />
            <AuthStack.Screen name="Verified" component={Verified} />
            <AuthStack.Screen name="Success" component={Success} />
            <AuthStack.Screen name="AgencyBasic" component={AgencyBasic} />
            <AuthStack.Screen name="AgencyPhotos" component={AgencyPhotos} />
            <AuthStack.Screen name="AgencyLocation" component={AgencyLocation} />
            <AuthStack.Screen name="AgencyMap" component={AgencyMap} />
            <AuthStack.Screen name={routes.listingSummary} component={ListingSummary} />
            <AuthStack.Screen name="PaymentPlans" component={PaymentPlans} />
            <AuthStack.Screen name="PaymentMethod" component={PaymentMethod} />
            <AuthStack.Screen name="SelectCard" component={SelectCard} />
            <AuthStack.Screen name="PaymentDone" component={PaymentDone} />
            <AuthStack.Screen name="PayPalDetails" component={PayPalDetails} />
            <AuthStack.Screen name="AddCard" component={AddCard} />
            <AuthStack.Screen name="ListingOptions" component={ListingOptions} />
            <AuthStack.Screen name="SelectCareGiver" component={SelectCareGiver} />
            <AuthStack.Screen name="ActivitySelect" component={ActivitySelect} />
            <AuthStack.Screen name="ReviewDetails" component={ReviewDetails} />
            <AuthStack.Screen name="CareGiver" component={CareGiver} />
            <AuthStack.Screen name="TellDescription" component={TellDescription} />
            <AuthStack.Screen name="Schedule" component={Schedule} />
            <AuthStack.Screen name="RoomsAvailable" component={RoomsAvailable} />
            <AuthStack.Screen name="RoomsCalender" component={RoomsCalender} />
            <AuthStack.Screen name="HourlyPricing" component={HourlyPricing} />
            <AuthStack.Screen name="Note" component={Note} />
            <AuthStack.Screen name="PricingType" component={PricingType} />

        </AuthStack.Navigator>
    )
}

const AuthNavigator = () => {
    return (

        <SplashNavigator />
    )


}

export default AuthNavigator
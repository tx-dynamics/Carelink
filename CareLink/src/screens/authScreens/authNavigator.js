import React, { useEffect } from "react"
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


const AuthStack = createNativeStackNavigator()

const SplashNavigator = () => {
    return (
        <AuthStack.Navigator
        screenOptions = {{
            headerShown: false
        }}>
            <AuthStack.Screen name ="Splash" component={Splash}/>
            <AuthStack.Screen name ="Step1" component={Step1}/>
            <AuthStack.Screen name ="Step2" component={Step2}/>
            <AuthStack.Screen name ="Step3" component={Step3}/>
            <AuthStack.Screen name ="AskRegister" component={AskRegister}/>
            <AuthStack.Screen name ="Register" component={Register}/>
            <AuthStack.Screen name ="Terms" component={Terms}/>
            <AuthStack.Screen name ="Policy" component={Policy}/>
            <AuthStack.Screen name ="EmailVerification" component={EmailVerification}/>
            <AuthStack.Screen name ="Verified" component={Verified}/>
            <AuthStack.Screen name ="Success" component={Success}/>
            <AuthStack.Screen name ="AgencyBasic" component={AgencyBasic}/>
            <AuthStack.Screen name ="AgencyPhotos" component={AgencyPhotos}/>
            <AuthStack.Screen name ="AgencyLocation" component={AgencyLocation}/>
            <AuthStack.Screen name ="AgencyMap" component={AgencyMap}/>
            <AuthStack.Screen name ="PaymentPlans" component={PaymentPlans}/>
            <AuthStack.Screen name ="PaymentMethod" component={PaymentMethod}/>
            <AuthStack.Screen name ="SelectCard" component={SelectCard}/>
            <AuthStack.Screen name ="PaymentDone" component={PaymentDone}/>
            <AuthStack.Screen name ="PayPalDetails" component={PayPalDetails}/>
            <AuthStack.Screen name ="AddCard" component={AddCard}/>



        </AuthStack.Navigator>
    )
}

const AuthNavigator = () => {  

         return <SplashNavigator />
     
    
    
}

export default AuthNavigator
import React, { useEffect } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../authScreens/Splash/Splash';
import Step1 from '../authScreens/OnBoarding/Step1';
import Step2 from "./OnBoarding/Step2";
import Step3 from "./OnBoarding/Step3";
import AskRegister from "./AskRegister";
import Register from "./Register";


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

            
        </AuthStack.Navigator>
    )
}

const AuthNavigator = () => {  

         return <SplashNavigator />
     
    
    
}

export default AuthNavigator
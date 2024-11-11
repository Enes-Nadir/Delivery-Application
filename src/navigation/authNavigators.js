import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SignInScreen from '../screens/authScreens/SignInScreen'
import SignUpScreen from '../screens/authScreens/SignUpScreen';
import BottomTabs from './BottomTab';
import Details from '../screens/Details';
import CartScreen from '../screens/CartScreen';


const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen 
                name ="SignInScreen"
                component ={SignInScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen 
                name ="SignUpScreen"
                component ={SignUpScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen 
                name ="BottomTabs"
                component ={BottomTabs}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <Auth.Screen 
                name ="details"
                component ={Details}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
             <Auth.Screen 
                name ="CartScreen"
                component ={CartScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Auth.Navigator>
    )
}
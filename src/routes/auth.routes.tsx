import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import { SignIn } from '../screens/Login';
import { SplashAnimated } from '../screens/SplashAnimated';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator initialRouteName="SignIn" 
            screenOptions={{
            headerShown: false
        }}>
            <Screen 
                name="SignIn"
                component={SignIn}
            />
        </Navigator>
    )
}
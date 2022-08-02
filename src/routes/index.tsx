import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppHRoutes } from './appH.routes';

import { useAuth } from '../hooks/auth';
import { SplashAnimated } from '../screens/SplashAnimated';

export function Routes(){
    const { user } = useAuth();

    console.log(user);
    return(
        
        <NavigationContainer >
             {user.id ? <AppHRoutes /> : <AuthRoutes />}
        </NavigationContainer>   
    );
};


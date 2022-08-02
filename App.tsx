import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import theme from './src/global/theme';
import AppLoading from 'expo-app-loading';


import { AuthProvider } from './src/hooks/auth';
import { SplashAnimated } from './src/screens/SplashAnimated';
import { Routes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App(){
  const[callRoutes, setCallRoutes] = useState(false);

  function handleCallAppRoutes(){
      setCallRoutes(true);
  }

  const [fontsLoadded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoadded){
    return <AppLoading />
  }
  
  return(
    <ThemeProvider theme={theme}>
      <StatusBar />

      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
            {
              callRoutes === false ? 
              <SplashAnimated handleCallAppRoutes={handleCallAppRoutes}/> : 
              <Routes />
            }    
        </AuthProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};
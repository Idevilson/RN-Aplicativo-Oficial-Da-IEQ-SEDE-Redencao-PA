import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();


import { Home } from '../screens/Home';
import { Cronograma } from '../screens/Cronograma';
import { Resumo } from '../screens/Resumo'

import { Feather } from '@expo/vector-icons';

export function AppHRoutes(){

    return(
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props}/>}
        >
        
            <Drawer.Screen 
                name="Página Inicial"
                component={Home}
                options={{
                    drawerActiveTintColor: "#684CD5",
                    drawerIcon: ({ color }) => <Feather name="home" size={20} color={color}/>
                }}
            />

            <Drawer.Screen 
                name="Cronograma"
                component={Cronograma}
                options={{
                    drawerActiveTintColor: "#684CD5",
                    drawerIcon: ({ color }) => <Feather name="clock" size={20} color={color}/>
                }}
            />

            <Drawer.Screen 
                name="Resumo"
                component={Resumo}
                options={{
                    drawerActiveTintColor: "#684CD5",
                    drawerIcon: ({ color }) => <Feather name="clipboard" size={20} color={color}/>
                }}
            />
        
        </Drawer.Navigator>
    )
}
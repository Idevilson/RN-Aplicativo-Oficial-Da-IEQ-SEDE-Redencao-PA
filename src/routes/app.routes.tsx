import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from '../global/theme';

const { Navigator, Screen } = createBottomTabNavigator();

import { Account } from '../screens/Account';
import { Cronograma } from '../screens/Cronograma';
import { Resumo } from '../screens/Resumo';

export function AppRoutes(){
    return(
        <Navigator 
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.primaryBlue,
                tabBarInactiveTintColor: theme.colors.Titles,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                }
            }}
        >   
            <Screen 
                name="Avisos"
                component={Account}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name="person-outline"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen 
                name="Cronograma"
                component={Cronograma}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name="schedule"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />

            <Screen 
                name="Resumo"
                component={Resumo}
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons
                            name="post-add"
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Navigator>
    )
}
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home";
import Login from "./Screens/Login";
// Importa otras pantallas aquí

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainStack() {
    return (
        <Stack.Navigator>
            {/* Aquí puedes agregar más pantallas dentro del Stack.Navigator */}
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Menu' component={MainTab} />

        </Stack.Navigator>
    )
}

function MainTab() {
    return (
        <Tab.Navigator>
            {/* Configura las pestañas aquí */}
            <Tab.Screen 
            name='Home' 
            component={Home} 
            options={{
                tabBarLabel: () => null,
                headerShown: false}}
            
            />
            {/* Agrega más pestañas aquí */}
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
}

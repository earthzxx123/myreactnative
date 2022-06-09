import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/week6/Home';


const Stack = createStackNavigatortor();

export default function HomeStack() {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home", hearderShow: false }}
            />
            <Stack.Screen
                name="Ex1"
                component={Ex1}
                options={{ title: "Exercise 1" }}
            />
            <Stack.Screen
                name="Ex2"
                component={Ex2}
                options={{ title: "Exercise 2" }}
            />
        </Stack.Navigator>
    );

}




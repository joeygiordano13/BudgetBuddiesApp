import React from 'react';
import { StackActions } from 'react-navigation';
import { NavigationContainer } from 'react-navigation/native';
import { createStackNavigator } from 'react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={home}/>
                <Stack.Screen name="Login" component={loginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

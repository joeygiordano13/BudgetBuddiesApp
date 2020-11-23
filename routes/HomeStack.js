import React from 'react';
import { createNavigationContainer } from 'react-navigation';
//import { StackActions } from 'react-navigation';
//import { NavigationContainer } from 'react-navigation/native';
import { createStackNavigator } from 'react-navigation/stack';
import HomeTabs from './BottomTabNavigator';

const Stack = createStackNavigator();

export default class HomeStack extends React.Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeTabs} />
            </Stack.Navigator>
        );
    }
}

HomeStack = createNavigationContainer(Stack);

export default HomeStack;
 
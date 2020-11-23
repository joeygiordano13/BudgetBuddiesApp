import React from 'react';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './src/screens/loginScreen';
import { createStackNavigator } from 'react-navigation-stack';
import HomeTabs from './routes/BottomTabNavigator';

const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
        return (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeTabs} />
          </Stack.Navigator>
        );
    }
}

export default App;
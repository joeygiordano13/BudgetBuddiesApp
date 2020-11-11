import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Budgets from '../screens/budgets';
import Leaderboard from '../screens/leaderboard';
import Settings from '../screens/settings';

const screens = {
    Home: {
        screen: Home
    },
    Budgets: {
        screen: Budgets
    },
    Leaderboard: {
        screen: Leaderboard
    }, 
    Settings: {
        screen: Settings
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
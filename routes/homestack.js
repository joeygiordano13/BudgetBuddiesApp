import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Budgets from '../screens/budgets';
import Leaderboard from '../screens/leaderboard';
import Settings from '../screens/settings';
import Calendars from '../screens/calendar';

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
    Calendar: {
        screen: Calendars
    },
    Settings: {
        screen: Settings
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
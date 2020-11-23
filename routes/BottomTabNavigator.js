import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome";

import Home from '../screens/home';
import Budgets from '../screens/budgets';
import Leaderboard from '../screens/leaderboard';
import Calendars from '../screens/calendar';
import Settings from '../screens/settings';


class HomeScreen extends React.Component {
  render() {
    return(
      <Home/>
    );
  }
}

class BudgetsScreen extends React.Component {
  render() {
    return(
      <Budgets/>
    );
  }
}

class LeaderboardScreen extends React.Component {
  render() {
    return(
      <Leaderboard/>
    );
  }
}

class CalendarsScreen extends React.Component {
  render() {
    return(
      <Calendars/>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return(
      <Settings/>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    Budgets: {
      screen: BudgetsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="line-chart" size={25} color={tintColor} />
        )
      }
    },
    Leaderboard: {
      screen: LeaderboardScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="users" size={25} color={tintColor} />
        )
      }
    },
    Calendars: {
      screen: CalendarsScreen, 
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="calendar" size={25} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen, 
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cogs" size={25} color={tintColor} />
        )
      }
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#19C0FF'
      //activeTintColor: '#eb6e3d'
    }
  }
);

const HomeTabs = createAppContainer(bottomTabNavigator);

export default HomeTabs;
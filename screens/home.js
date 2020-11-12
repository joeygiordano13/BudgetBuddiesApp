import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer, createStackNavigator } from 'react-navigation';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
        <Button
          title="Budgets"
          onPress={() => navigation.navigate('Budgets')}
        />
        <Button
          title="Leaderboard"
          onPress={() => navigation.navigate('Leaderboard')}
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'left', 
        justifyContent: 'left',
        padding: 20,
    },
});
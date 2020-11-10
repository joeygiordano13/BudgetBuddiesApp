import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { NativeRouter, Route, Link } from "react-router-native";
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Budget Buddies!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

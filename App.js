import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import { AppLoading } from 'expo';
import Header from './components/header';
import Navigator from './routes/homestack';


//import { StatusBar } from 'expo-status-bar';
//import { NativeRouter, Route, Link } from "react-router-native";
//import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <Navigator />
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

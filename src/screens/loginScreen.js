import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from 'react-navigation/native';
import Login from '../components/login';

export default function LoginScreen({ navigation }) {
    return (
      <Login/>
    );
}
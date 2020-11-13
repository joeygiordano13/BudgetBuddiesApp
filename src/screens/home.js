import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from 'react-navigation/native';

export default function Home({ navigation }) {
    return (
      <View style={styles.extras}>
        <Button onPress={navigation.navigate('Login')} Text="Logout"/>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'left',
        justifyContent: 'center',
        padding: 20,
    },
    extras: {
        flex: 1, 
        alignItems: 'right',
        padding: 10,
    }
});
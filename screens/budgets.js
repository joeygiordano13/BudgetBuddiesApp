import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Budgets() {
    return (
        <View style={styles.container}>
            <Text>Budgets</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
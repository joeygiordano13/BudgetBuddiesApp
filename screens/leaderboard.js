import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Leaderboard() {
    return (
        <View style={styles.container}>
            <Text>Leaderboard</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
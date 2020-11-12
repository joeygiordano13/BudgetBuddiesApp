import React, { useState } from 'react';
//import { render } from 'react-dom';
import { StyleSheet, View, Text } from 'react-native';
//import { SearchBar } from 'react-native-elements';
import FriendSearchBar from '../components/friendsearchbar'


export default function Leaderboard() {
    return (
        <View style={styles.container}>
            <FriendSearchBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
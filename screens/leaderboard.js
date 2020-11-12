import React, { useState } from 'react';
//import { render } from 'react-dom';
import { StyleSheet, View, Text } from 'react-native';
//import { SearchBar } from 'react-native-elements';
import FriendSearchBar from '../components/friendsearchbar'


export default function Leaderboard() {
    return (
        <View style={styles.bottom}>
            <FriendSearchBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    bottom: {  
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30
    },
});
import React from 'react';
//import { render } from 'react-dom';
import { StyleSheet, View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';


export default function Leaderboard() {

    return (
        <View style={styles.container}>
            <Text>Sample text</Text>
            <SearchBar
                placeholder="Find a new Budget Buddy!..."
                //onChangeText={this.updateSearch}
                //value={search}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
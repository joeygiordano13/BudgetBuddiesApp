import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

const DATA = [
    {
      id: 'b7328938364',
      title: 'Your Worthless Budget',
    }
  ];

const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
const App = () => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );
}

export default function Budgets() {
    return (
        <View style={styles.container}>
            <Button
                title="Add a new Budget"
                onPress={() => alert('Sample Budget!')}
            />
            <FlatList
                //data={DATA}
                //renderItem={renderItem}
                //keyExtractor={item => item.id}
            />
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
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
});
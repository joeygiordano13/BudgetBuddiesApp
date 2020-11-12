import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function Calendars() {
    return (
        <View style={styles.container}>
            <Calendar
                // Initially visible month. Default = Date()
                current={'2020-11-11'}
                // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                minDate={'2020-11-1'}
                // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                maxDate={'2020-11-31'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
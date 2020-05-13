import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import SelectedWorkouts from './SelectedWorkouts'

const SessionWorkouts = props => {
    return <View style={styles.sessionWorkouts}>
        <View style={styles.summary}>
            <Text style={styles.date}>{props.date}</Text>
        </View>
        <Button title="Show workout details" />
    </View>
}

const styles = StyleSheet.create({
    sessionWorkouts: {
        shadowColor: 'black',
        backgroundColor: 'white',
        shadowRadius: 20,
        borderRadius: 20,
        margin: 17,
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    date: {
        fontSize: 20,
        color: 'black'
    }

});

export default SessionWorkouts
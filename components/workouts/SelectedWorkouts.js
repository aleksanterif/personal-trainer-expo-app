import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Button } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import Colors from '../../styles/Colors'

const SelectedWorkouts = props => {
    return (
        <View style={styles.selectedWorkouts}>
            <Text style={styles.workoutData}>
                <Text style={styles.title}>{props.title}</Text>
            </Text>
            {/* this touchablefeedback onPress event needs to be forwarded to the component that uses this cardholder */}
            <View styles={styles.button}>
                {props.delete &&
                    <TouchableNativeFeedback onPress={props.remove}>
                        <MaterialCommunityIcons name='alpha-x-box' color={'red'} size={30} />
                    </TouchableNativeFeedback>
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    selectedWorkouts: {
        padding: 10,
        backgroundColor: Colors.secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 4,
        borderRadius: 15,
        overflow: 'scroll'
    },
    workoutData: {
        flexDirection: 'row',
        alignItems: "center"
    },
    title: {
        fontSize: 20
    },
    titleHolder: {
        backgroundColor: Colors.secondary,

    },
    button: { marginLeft: 20 }
})

export default SelectedWorkouts
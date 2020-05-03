import React from "react";
import { View, Text, Image, StyleSheet, Button, TouchableNativeFeedback } from "react-native";
import Colors from '../../styles/Colors'


const WorkoutCard = (props) => {

    return (
        <TouchableNativeFeedback onPress={props.viewDetail}>
            <View style={styles.workout}>
                <Image style={styles.image} source={{ uri: props.image }} />
                <Text style={styles.title}> {props.title}</Text>
                <View style={styles.buttons}>
                    <Button color={Colors.secondary} title="View details" onPress={props.viewDetail} />
                    <Button color={Colors.secondary} title="This could be in my workout" onPress={props.addToChosenWorkouts} />
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    workout: {
        shadowColor: 'black',
        backgroundColor: 'white',
        height: 270,
        shadowRadius: 20,
        borderRadius: 20,
        elevation: 10,
        margin: 17,

    },
    image: {
        height: '60%',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden"
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    buttons: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default WorkoutCard;

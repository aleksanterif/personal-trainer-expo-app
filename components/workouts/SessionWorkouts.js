import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import SelectedWorkouts from "./SelectedWorkouts";

const SessionWorkouts = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.sessionWorkouts}>
            <View style={styles.summary}>
                <Text>Workout date</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button
                title="details"
                onPress={() => {
                    //this way we can manage state both ways
                    setOpen((prevState) => !prevState);
                }}
            />
            {open && (
                <View>
                    {props.workouts.map((selectedWorkouts) => (
                        <SelectedWorkouts key={selectedWorkouts.workoutId} title={selectedWorkouts.title} />
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    sessionWorkouts: {
        shadowColor: "black",
        backgroundColor: "white",
        shadowRadius: 20,
        borderRadius: 20,
        margin: 17,
    },
    summary: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    date: {
        fontSize: 20,
        color: "black",
    },
});

export default SessionWorkouts;

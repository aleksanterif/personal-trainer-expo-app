import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import SelectedWorkouts from "../../components/workouts/SelectedWorkouts";
import * as chosenWorkoutActions from "../../store/actions/chosenWorkouts"

const ChosenWorkouts = (props) => {
    const workoutItems = useSelector((state) => {
        const transformedWorkoutItems = [];
        for (const key in state.chosenWorkouts.workouts) {
            transformedWorkoutItems.push({
                workoutId: key,
                title: state.chosenWorkouts.workouts[key].workoutTitle,
            });
        }
        return transformedWorkoutItems;
    });


    const dispatch = useDispatch()
    return (
        <View style={styles.screen}>
            <View style={styles.button}>
                <Button title="aloita reeni :D" disabled={workoutItems.length === 0} />
            </View>
            <View>
                <FlatList
                    data={workoutItems}
                    keyExtractor={(item) => item.workoutId}
                    renderItem={(itemData) => (
                        <SelectedWorkouts title={itemData.item.title} remove={() => {
                            dispatch(chosenWorkoutActions.removeFromChosenWorkouts(itemData.item.workoutId))
                        }} />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        margin: 15,
    },
    button: {
        flexDirection: "row",
    },
});

export default ChosenWorkouts;

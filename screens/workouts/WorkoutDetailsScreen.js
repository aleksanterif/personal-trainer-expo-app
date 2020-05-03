import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

const WorkoutDetailsScreen = (props) => {
    //get the props from parameters that are received, workouts are stored in redux
    const workoutId = props.navigation.getParam("workoutId");
    //get the workouts that are stored in the redux
    const selectedWorkout = useSelector((state) =>
        // get the certain workout that is extracted from the route parameters
        state.workouts.availableWorkouts.find((workout) => workout.id === workoutId)
    );

    //functional form to get the information out of the route parameters, navData objects has navigation prop
    WorkoutDetailsScreen.navigationOptions = navData => {
        return {
            headerTitle: navData.navigation.getParam('workoutTitle')
        }
    }

    return (
        <View>
            <Text>{selectedWorkout.title} </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default WorkoutDetailsScreen;

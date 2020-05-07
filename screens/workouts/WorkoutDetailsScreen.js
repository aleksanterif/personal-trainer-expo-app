import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from '../../styles/Colors'
import * as chosenActions from '../../store/actions/chosenWorkouts'

const WorkoutDetailsScreen = (props) => {
    //get the props from parameters that are received, workouts are stored in redux
    const workoutId = props.navigation.getParam("workoutId");
    //get the workouts that are stored in the redux
    const selectedWorkout = useSelector((state) =>
        // get the certain workout that is extracted from the route parameters
        state.workouts.availableWorkouts.find((workout) => workout.id === workoutId)
    );

    const dispatch = useDispatch()

    //functional form to get the information out of the route parameters, navData objects has navigation prop
    WorkoutDetailsScreen.navigationOptions = (navData) => {
        return {
            headerTitle: navData.navigation.getParam("workoutTitle"),
        };
    };

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedWorkout.imageUrl }} />
            <View style={styles.button}>
                <Button color={Colors.secondary} title="Could be in my workout" onPress={() => {
                    dispatch(chosenActions.addToChosenWorkouts(selectedWorkout))
                }} />
            </View>
            <Text style={styles.description}>{selectedWorkout.description}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250
    },
    description: {
        fontSize: 17,
        margin: 5,
        textAlign: 'center',
        fontWeight: "bold"

    },
    button: {
        alignItems: 'center',
        margin: 10
    }
});

export default WorkoutDetailsScreen;

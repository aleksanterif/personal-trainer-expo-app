import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../styles/Colors";
import SelectedWorkouts from "../../components/workouts/SelectedWorkouts";
import * as chosenWorkoutActions from "../../store/actions/chosenWorkouts";
import * as sessionActions from "../../store/actions/sessions";

const ChosenWorkouts = (props) => {
  const workoutItems = useSelector((state) => {
    const transformedWorkoutItems = [];
    for (const key in state.chosenWorkouts.workouts) {
      transformedWorkoutItems.push({
        workoutId: key,
        title: state.chosenWorkouts.workouts[key].workoutTitle,
        description: state.chosenWorkouts.workouts[key].description,
        image: state.chosenWorkouts.workouts[key].imageUrl,
      });
    }
    return transformedWorkoutItems;
  });

  const dispatch = useDispatch();
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.text}>Selected workouts</Text>
        <FlatList
          data={workoutItems}
          keyExtractor={(item) => item.workoutId}
          renderItem={(itemData) => (
            <SelectedWorkouts
              title={itemData.item.title}
              delete
              remove={() => {
                dispatch(
                  chosenWorkoutActions.removeFromChosenWorkouts(
                    itemData.item.workoutId
                  )
                );
              }}
            />
          )}
        />
      </View>
      <View style={styles.button}>
        <Button
          color={Colors.primary}
          title="Create a workout session"
          disabled={workoutItems.length === 0}
          onPress={() => {
            dispatch(sessionActions.addSession(workoutItems));
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 15,
    display: "flex",
  },
  button: {
    marginTop: 15,
    width: "100%",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
});

export default ChosenWorkouts;

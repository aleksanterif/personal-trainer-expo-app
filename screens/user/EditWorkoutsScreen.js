import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as workoutActions from "../../store/actions/workouts";
import Colors from "../../styles/Colors";

const EditWorkoutScreen = (props) => {
  const workoutId = props.navigation.getParam("workoutId");
  const editedWorkout = useSelector((state) =>
    state.workouts.userWorkouts.find((workout) => workout.id === workoutId)
  );

  const [title, setTitle] = useState(editedWorkout.title);
  const [description, setDescription] = useState(editedWorkout.description);
  const [url, setUrl] = useState(editedWorkout.imageUrl);
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(workoutActions.updateWorkout(workoutId, title, description, url));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> Title </Text>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={(input) => setTitle(input)}
        ></TextInput>
      </View>
      <View>
        <Text style={styles.title}> Description </Text>
        <TextInput
          style={styles.textInput}
          value={description}
          onChangeText={(input) => setDescription(input)}
        ></TextInput>
      </View>
      <View>
        <Text style={styles.title}>
          Imageurl (for example https://pictureofmydog.com/images/bordercollie)
        </Text>
        <TextInput
          style={styles.textInput}
          value={url}
          onChangeText={(input) => setUrl(input)}
        ></TextInput>
      </View>
      <Button
        disabled={
          title.length === 0 || description.length === 0 || url.length === 0
        }
        color={Colors.secondary}
        title="Save changes"
        onPress={submit}
      />
    </View>
  );
};

EditWorkoutScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Editing",
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  title: {
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "bold",
  },
  textInput: {
    marginBottom: 10,
    //without this input field is too small on android
    paddingVertical: 0,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
  },
});

export default EditWorkoutScreen;

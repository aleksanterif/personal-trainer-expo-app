import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as workoutActions from "../../store/actions/workouts";
import Colors from "../../styles/Colors";

const AddWorkoutScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const dispatch = useDispatch();

  const submit = () => {
    Alert.alert(
      "",
      "Are you sure, you want to create a new workout called " + title + "?",
      [
        {
          text: "Cancel",
          style: "Default",
        },
        {
          text: "OK",
          onPress: () =>
            dispatch(workoutActions.createWorkout(title, description, url)),
        },
      ]
    );
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
          Imageurl (for example https://pictureofmydog.com)
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
        title="Add a new workout"
        onPress={submit}
      />
    </View>
  );
};

AddWorkoutScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Add a single new workout",
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

export default AddWorkoutScreen;

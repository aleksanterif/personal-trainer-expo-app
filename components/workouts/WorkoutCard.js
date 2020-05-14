import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../../styles/Colors";

const WorkoutCard = (props) => {
  return (
    <TouchableNativeFeedback onPress={props.viewDetail}>
      <View style={styles.workout}>
        <Image style={styles.image} source={{ uri: props.image }} />
        <View>
          <Text style={styles.title}> {props.title}</Text>
          {props.infoscreen && (
            <Text style={styles.description}>{props.description}</Text>
          )}
        </View>
        {props.mainscreen && (
          <View style={styles.buttons}>
            <Button
              color={Colors.secondary}
              title="View details"
              onPress={props.viewDetail}
            />
            <Button
              color={Colors.secondary}
              title="This could be in my workout"
              onPress={props.addToChosenWorkouts}
            />
          </View>
        )}
        {props.userscreen && (
          <View style={styles.buttonsUser}>
            <Button
              color={Colors.secondary}
              title="Delete workout"
              onPress={props.delete}
            />
            <Button
              color={Colors.secondary}
              title="Edit workout"
              onPress={props.edit}
            />
          </View>
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  workout: {
    shadowColor: "black",
    backgroundColor: "white",
    height: 270,
    shadowRadius: 20,
    borderRadius: 20,
    elevation: 10,
    margin: 17,
  },
  image: {
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttons: {
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonsUser: {
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  description: {
    fontSize: 17,
  },
});

export default WorkoutCard;

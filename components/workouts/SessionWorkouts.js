import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../../styles/Colors";
import WorkoutCard from "./WorkoutCard";

const SessionWorkouts = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.sessionWorkouts}>
      <View style={styles.summary}>
        <Text style={styles.text}>Workout date</Text>
        <Text style={styles.text}>{props.date}</Text>
      </View>
      <Button
        color={Colors.secondary}
        title="workout details"
        onPress={() => {
          //this way we can manage state both ways
          setOpen((prevState) => !prevState);
        }}
      />
      {open && (
        <View>
          {props.workouts.map((selectedWorkouts) => (
            <WorkoutCard
              infoscreen
              key={selectedWorkouts.workoutId}
              title={selectedWorkouts.title}
              image={selectedWorkouts.image}
              description={selectedWorkouts.description}
            />
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
  text: {
    fontSize: 20,
    color: "black",
  },
});

export default SessionWorkouts;

import React from "react";
import { FlatList, Text } from "react-native";
//ability to tap into redux store and fetch all the workouts from there
import { useSelector } from "react-redux";

const WorkoutsMainScreen = (props) => {
    const workouts = useSelector((state) => state.workouts.availableWorkouts);
    return (
        <FlatList
            data={workouts}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
        />
    );
};

export default WorkoutsMainScreen;

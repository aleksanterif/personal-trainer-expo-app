import React from "react";
import { FlatList } from "react-native";
//ability to tap into redux store and fetch all the workouts from there
import { useSelector } from "react-redux";
import WorkoutCard from "../../components/workouts/WorkoutCard"

const WorkoutsMainScreen = (props) => {
    const workouts = useSelector((state) => state.workouts.availableWorkouts);
    return (
        <FlatList
            data={workouts}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <WorkoutCard
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    viewDetail={() => { }}
                    addToChosenWorkouts={() => { }}
                />
            )}
        />
    );
};

WorkoutsMainScreen.navigationOptions = {
    headerTitle: "All workouts",
};

export default WorkoutsMainScreen;

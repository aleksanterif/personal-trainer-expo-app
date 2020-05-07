import { ADD_TO_CHOSENWORKOUTS } from "../actions/chosenWorkouts";
import ChosenWorkout from "../../models/chosenWorkout";

const initialState = {
    workouts: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        //handeled with separate case inorder to avoid getting the default state
        //because here the state is hoped to be changed
        case ADD_TO_CHOSENWORKOUTS:
            const addedWorkout = action.workout;
            const workoutTitle = addedWorkout.title;

            if (state.workouts[addedWorkout.id]) {
                //if we already have chosen the workout
                const updatedWorkout = new ChosenWorkout(
                    state.workouts[addedWorkout.id].title
                )
                return {
                    ...state,
                    workouts: { ...state.workouts, [addedWorkout.id]: updatedWorkout },
                };
            } else {
                const newChosenWorkout = new ChosenWorkout(workoutTitle);
                return {
                    ...state,
                    workouts: { ...state.workouts, [addedWorkout.id]: newChosenWorkout },
                };
            }
    }
    return state;
};

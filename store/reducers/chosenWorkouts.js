import { ADD_TO_CHOSENWORKOUTS, REMOVE_FROM_CHOSENWORKOUTS } from "../actions/chosenWorkouts";
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

            const newChosenWorkout = new ChosenWorkout(workoutTitle);
            return {
                ...state,
                workouts: { ...state.workouts, [addedWorkout.id]: newChosenWorkout },
            };

        case REMOVE_FROM_CHOSENWORKOUTS:
            const updatedChosenWorkouts = { ...state.workouts }
            delete updatedChosenWorkouts[action.wid]
            return {
                ...state,
                workouts: updatedChosenWorkouts
            }
    }
    return state;
};

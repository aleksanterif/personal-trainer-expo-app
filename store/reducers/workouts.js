import WORKOUTS from "../../data/workout-data";
import {
  DELETE_WORKOUT,
  CREATE_WORKOUT,
  UPDATE_WORKOUT,
} from "../actions/workouts";
import Workout from "../../models/workout";

const initialState = {
  //this comes from dummydata
  availableWorkouts: WORKOUTS,
  //after authentication users should be able to add their own workouts
  userWorkouts: WORKOUTS.filter((workout) => workout.creatorId === "VanDam12"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WORKOUT:
      const newWorkout = new Workout(
        new Date().toString(),
        "VanDam12",
        action.workoutData.title,
        action.workoutData.imageUrl,
        action.workoutData.description
      );
      return {
        ...state,
        //with concat we can add this to our existing array
        availableWorkouts: state.availableWorkouts.concat(newWorkout),
        userWorkouts: state.availableWorkouts.concat(newWorkout),
      };
    case UPDATE_WORKOUT:
      //first we need to find the index of the selected id
      const workoutIndex = state.userWorkouts.findIndex(
        (workout) => workout.id === action.wid
      );
      //and then pass the updated information
      const updatedWorkout = new Workout(
        action.wid,
        //get the right creator
        state.userWorkouts[workoutIndex].creatorId,
        action.workoutData.title,
        action.workoutData.imageUrl,
        action.workoutData.description
      );
      //and then update the state by grabbing the current index and replacing that
      // with the newly created model
      const updatedUserWorkouts = [...state.userWorkouts];
      updatedUserWorkouts[workoutIndex] = updatedWorkout;

      const availableWorkoutIndex = state.availableWorkouts.findIndex(
        (workout) => workout.id === action.wid
      );

      const updatedAvailableWorkouts = [...state.availableWorkouts];
      updatedAvailableWorkouts[availableWorkoutIndex] = updatedWorkout;

      return {
        ...state,
        availableWorkouts: updatedAvailableWorkouts,
        userWorkouts: updatedUserWorkouts,
      };

    case DELETE_WORKOUT:
      return {
        ...state,
        //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
        // Filter returns a new array that runs a function trough all items
        // if it gets true it keeps the item, if false it removes it
        userWorkouts: state.userWorkouts.filter(
          // if it doesnt match it returns true so the one that does match will return false
          (workout) => workout.id !== action.wid
        ),
        availableWorkouts: state.availableWorkouts.filter(
          // if it doesnt match it returns true so the one that does match will return false
          (workout) => workout.id !== action.wid
        ),
      };
  }

  return state;
};

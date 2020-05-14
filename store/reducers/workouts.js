import WORKOUTS from "../../data/workout-data";
import { DELETE_WORKOUT } from "../actions/workouts";

const initialState = {
  availableWorkouts: WORKOUTS,
  //after authentication users should be able to add their own workouts
  userWorkouts: WORKOUTS.filter((workout) => workout.creatorId === "VanDam12"),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_WORKOUT:
      return {
        ...state,
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

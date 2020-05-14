export const DELETE_WORKOUT = "DELETE_WORKOUT";

export const deleteWorkout = (workoutId) => {
  return { type: DELETE_WORKOUT, wid: workoutId };
};

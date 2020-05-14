export const DELETE_WORKOUT = "DELETE_WORKOUT";
export const CREATE_WORKOUT = "CREATE_WORKOUT";
export const UPDATE_WORKOUT = "UPDATE_WORKOUT";

export const deleteWorkout = (workoutId) => {
  return { type: DELETE_WORKOUT, wid: workoutId };
};

export const createWorkout = (title, description, imageUrl) => {
  return {
    type: CREATE_WORKOUT,
    workoutData: {
      title: title,
      description: description,
      imageUrl: imageUrl,
    },
  };
};

export const updateWorkout = (id, title, description, imageUrl) => {
  return {
    type: UPDATE_WORKOUT,
    wid: id,
    workoutData: {
      title: title,
      description: description,
      imageUrl: imageUrl,
    },
  };
};

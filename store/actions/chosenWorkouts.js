//generating the action that is needed in the reducer
export const ADD_TO_CHOSENWORKOUTS = 'ADD_TO_CHOSENWORKOUTS';

//function to create the wanted action, workout key will be passed in to the reducer
export const addToChosenWorkouts = workout => {
    return { type: ADD_TO_CHOSENWORKOUTS, workout: workout }
}

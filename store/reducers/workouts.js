import WORKOUTS from '../../data/workout-data';

const initialState = {
    availableWorkouts: WORKOUTS,
    //after authentication users should be able to add their own workouts
    userWorkouts: WORKOUTS.filter(workout => workout.creatorId === 'VanDam12')
};


export default (state = initialState, action) => {
    return state
};
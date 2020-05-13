export const ADD_SESSION = 'ADD_SESSION'

export const addSession = (workoutItems) => {
    return {
        type: ADD_SESSION, sessionData: { workoutItems: workoutItems }
    }
}
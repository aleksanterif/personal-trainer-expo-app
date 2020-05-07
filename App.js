import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import workoutsReducer from './store/reducers/workouts'
import WorkoutNavigator from './navigation/WorkoutNavigator'
import chosenWorkoutsReducer from './store/reducers/chosenWorkouts'

//Map and combine the workouts stored in the reducer redux, contains the whole "big state"
const rootReducer = combineReducers({
  workouts: workoutsReducer,
  chosenWorkouts: chosenWorkoutsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <WorkoutNavigator />
    </Provider>
  );
}


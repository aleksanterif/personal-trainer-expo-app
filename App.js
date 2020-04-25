import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import workoutsReducer from './store/reducers/workouts'
import WorkoutNavigator from './navigation/WorkoutNavigator'

const rootReducer = combineReducers({
  workouts: workoutsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <WorkoutNavigator />
    </Provider>
  );
}


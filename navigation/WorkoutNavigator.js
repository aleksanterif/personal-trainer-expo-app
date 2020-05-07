import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import WorkoutsMainScreen from '../screens/workouts/WorkoutsMainScreen';
import WorkoutDetailsScreen from '../screens/workouts/WorkoutDetailsScreen';
import ChosenWorkouts from '../screens/workouts/ChosenWorkouts'
import Colors from '../styles/Colors';

const WorkoutsNavigator = createStackNavigator({
    //assert the title of the right page
    Workouts: WorkoutsMainScreen,
    WorkoutDetails: WorkoutDetailsScreen,
    ChosenWorkouts: ChosenWorkouts
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: 'white'
    }
})

export default createAppContainer(WorkoutsNavigator)
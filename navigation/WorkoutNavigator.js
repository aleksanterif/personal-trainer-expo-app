import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import WorkoutsMainScreen from '../screens/workouts/WorkoutsMainScreen';
import Colors from '../styles/Colors';

const WorkoutsNavigator = createStackNavigator({
    //assert the title of the right page
    Workouts: WorkoutsMainScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: 'white'
    }
})

export default createAppContainer(WorkoutsNavigator)
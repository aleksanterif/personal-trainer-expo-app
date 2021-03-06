import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import WorkoutsMainScreen from "../screens/workouts/WorkoutsMainScreen";
import WorkoutDetailsScreen from "../screens/workouts/WorkoutDetailsScreen";
import ChosenWorkouts from "../screens/workouts/ChosenWorkouts";
import SessionsScreen from "../screens/workouts/SessionsScreen";
import UserWorkoutsScreen from "../screens/user/UserWorkoutsScreen";
import EditWorkoutScreen from "../screens/user/EditWorkoutsScreen";
import AddWorkoutScreen from "../screens/user/AddWorkoutScreen";
import Colors from "../styles/Colors";

const WorkoutsNavigator = createStackNavigator(
  {
    //assert the title of the right page
    Workouts: WorkoutsMainScreen,
    WorkoutDetails: WorkoutDetailsScreen,
    ChosenWorkouts: ChosenWorkouts,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: "white",
    },
  }
);

const SessionsNavigator = createStackNavigator(
  {
    Sessions: SessionsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: "white",
    },
  }
);

const UserNavigator = createStackNavigator(
  {
    UserWorkouts: UserWorkoutsScreen,
    EditWorkout: EditWorkoutScreen,
    AddWorkout: AddWorkoutScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: "white",
    },
  }
);

const combinedNavigator = createDrawerNavigator(
  {
    Workouts: WorkoutsNavigator,
    Session: SessionsNavigator,
    User: UserNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondary,
    },
  }
);
export default createAppContainer(combinedNavigator);

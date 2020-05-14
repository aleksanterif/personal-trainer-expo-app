import React from "react";
import { FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/workouts/WorkoutIcon";
import WorkoutCard from "../../components/workouts/WorkoutCard";
import * as userWorkoutsActions from "../../store/actions/workouts";

const UserWorkoutsScreen = (props) => {
  const userWorkouts = useSelector((state) => state.workouts.userWorkouts);
  const dispatch = useDispatch();
  console.log(userWorkouts);
  const editWorkout = (id) => {
    props.navigation.navigate("EditWorkout", { workoutId: id });
  };

  return (
    <FlatList
      data={userWorkouts}
      renderItem={({ item }) => (
        <WorkoutCard
          userscreen
          key={item.id}
          image={item.imageUrl}
          title={item.title}
          description={item.description}
          delete={() => {
            dispatch(userWorkoutsActions.deleteWorkout(item.id));
          }}
          edit={() => {
            editWorkout(item.id);
          }}
        />
      )}
    />
  );
};

UserWorkoutsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your created workouts",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="HamburgerMenu"
          iconName={"chevron-double-right"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={"bolnisi-cross"}
          onPress={() => {
            navData.navigation.navigate("AddWorkout");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserWorkoutsScreen;

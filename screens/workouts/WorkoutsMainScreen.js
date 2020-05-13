import React from "react";
import { FlatList } from "react-native";
//ability to tap into redux store and fetch all the workouts from there
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../../components/workouts/WorkoutIcon";
import WorkoutCard from "../../components/workouts/WorkoutCard";
import * as chosenActions from '../../store/actions/chosenWorkouts';

const WorkoutsMainScreen = (props) => {
    const workouts = useSelector((state) => state.workouts.availableWorkouts);
    const dispatch = useDispatch();
    return (
        <FlatList
            data={workouts}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
                <WorkoutCard
                    mainscreen
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    viewDetail={() => {
                        props.navigation.navigate("WorkoutDetails", {
                            workoutId: itemData.item.id,
                            workoutTitle: itemData.item.title
                        });
                    }}
                    addToChosenWorkouts={() => {
                        //addToChosenWorkouts is the action creating function
                        dispatch(chosenActions.addToChosenWorkouts(itemData.item))
                    }}
                />
            )}
        />
    );
};

WorkoutsMainScreen.navigationOptions = navData => {
    return {
        headerTitle: "All workouts",
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='HamburgerMenu' iconName={'chevron-double-right'} onPress={() => { navData.navigation.toggleDrawer() }} />
        </HeaderButtons>,
        headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Selected workouts' iconName={'dumbbell'} onPress={() => { navData.navigation.navigate('ChosenWorkouts') }} />
        </HeaderButtons>
        )
    }
};

export default WorkoutsMainScreen;

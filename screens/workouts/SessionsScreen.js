import React from 'react';
import { View, FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from "../../components/workouts/WorkoutIcon";
import SessionWorkouts from "../../components/workouts/SessionWorkouts"

const SessionsScreen = props => {
    //first session is from the app.js where we combine all redux states
    //second one is from redux reducers the "real" sessions list
    const sessions = useSelector(state => state.sessions.sessions);
    console.log(sessions)
    return (
        <FlatList
            data={sessions}
            renderItem={({ item }) => <SessionWorkouts date={item.formattedDate} />}
        />
    )
}

SessionsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your sessions',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='HamburgerMenu' iconName={'chevron-double-right'} onPress={() => { navData.navigation.toggleDrawer() }} />
        </HeaderButtons>

    }
}

export default SessionsScreen
import { ADD_SESSION } from "../actions/sessions";
import Session from "../../models/session";

const initialState = {
    sessions: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SESSION:
            const newSession = new Session(
                new Date().toString(),
                action.sessionData.workoutItems,
                new Date()
            );
            return {
                //if the state comes from database its important that its copied here even though now its empty
                ...state,
                //with concat we can add the new state on top of the old state
                sessions: state.sessions.concat(newSession)
            }
    }
    return state;
};

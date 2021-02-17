import { userActionTypes } from '../user/user.types';

interface UserAction {
    type:typeof userActionTypes.SET_CURRENT_USER,
    payload:[]
}

interface UserState {
    currentUser:[],
}

const initialState:UserState = {
    currentUser: null,
};

export const userReducer = (state = initialState, action:UserAction):UserState => {
    console.log(action);

    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        default:
            return state;
    }
};

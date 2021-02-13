import { userActionTypes } from '../user/user.types';

interface UserState {
    currentUser: any,
    error?: string
}

interface UserAction {
    type: string,
    payload?: any
}

const initialState: UserState = {
    currentUser: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        case userActionTypes.USER_LOGIN_EEROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

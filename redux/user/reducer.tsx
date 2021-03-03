import { userLoginAction } from './actions';
import { userActionTypes } from './types';

interface userState {
    user?: any
}
const initialState: userState = {
    user: {},
};

export const userReducer = (
    state = initialState,
    action: userLoginAction,
): userState => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};

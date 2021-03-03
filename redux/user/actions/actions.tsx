import { userActionTypes } from '../types';
import { userLoginAction, userParam } from '../actions/index';

export const addUser = (user: userParam): userLoginAction => {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload: user,
    };
};

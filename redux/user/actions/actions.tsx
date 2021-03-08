import { userActionTypes } from '../types';
import { userLoginAction } from '../actions/index';

export const addUser = (user): userLoginAction => {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payload: user,
    };
};

import { userActionTypes } from '../types';

export interface userParam {
    msg: string,
    user: {
        avatar: string;
        email: string;
        name: string;
        role: string;
        root: boolean;
    }
}

export interface userLoginAction {
    type: userActionTypes.SET_CURRENT_USER,
    payload: {
        msg: string,
        user: {
            avatar: string;
            email: string;
            name: string;
            role: string;
            root: boolean;
        }
    }
}

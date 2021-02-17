import { userActionTypes } from '../user/user.types';

interface UserInterface {
    currentUser: {
        avatar: string
        email: string
        name: string
        role: string
        root: boolean
    }
    token: string
}

interface UserReturn {
    type: typeof userActionTypes.SET_CURRENT_USER,
    payload: UserInterface
}

export const setCurrentUser = (user: UserInterface): UserReturn => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
});

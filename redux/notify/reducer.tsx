import { notifyActionTypes } from './types';

const initialState = {
    notify: {},
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const notifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case notifyActionTypes.NOTIFY:
            return {
                ...state,
                notify: action.payload,
            };
        default:
            return state;
    }
};

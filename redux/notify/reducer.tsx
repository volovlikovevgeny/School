import { notifyActionTypes } from './types';


interface notifyState {
    notify: {
        error?: string,
        success?: any,
    }
}

const initialState:notifyState = {
    notify: {},
};

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


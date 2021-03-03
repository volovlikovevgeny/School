import { notifyActionTypes } from './notify.types';
import { NotifyAction } from './actions/index';

interface NotifyState {
    notify: {
        error?: string;
        success?: string;
        loading?: boolean;
    }
    error?: string;
    success?: string;
    loading?: boolean;
}

const initialState: NotifyState = {
    notify: {},
};

export const notifyReducer = (
    state = initialState,
    action: NotifyAction,
): NotifyState => {
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

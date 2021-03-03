import { combineReducers } from 'redux';
import { notifyReducer } from './notify/notify.reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
    notify: notifyReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

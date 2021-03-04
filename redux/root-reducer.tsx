import { combineReducers } from 'redux';
import { notifyReducer } from './notify/notify.reducer';
import { userReducer } from './user/reducer';
import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user','notify'],
};
 const rootReducer = combineReducers({
    notify: notifyReducer,
    user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

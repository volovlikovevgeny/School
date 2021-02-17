import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from './user/user.reducer';
import { notifyReducer } from './notify/reducer';
import {cartReducer} from './cart/reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user','cart'],
};

const rootReducer = combineReducers({
    user: userReducer,
    notify: notifyReducer,
    cart:cartReducer,
});

export default persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>

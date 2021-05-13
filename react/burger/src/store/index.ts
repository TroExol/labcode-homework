// *** NPM ***
import { createStore, compose, combineReducers } from 'redux';

import { loadFromLocalStorage, saveToLocalStorage } from '../utils/local-storage';
import ingredientsReducer from './ingredients';

const LOCAL_STORAGE_REDUX_NAME = 'REDUX_STATE';

// *** REDUX STORE ***
const composeEnhancers =
    process.env.NODE_ENV === 'development'
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
});

const store = createStore(
    rootReducer,
    loadFromLocalStorage<StoreType>(LOCAL_STORAGE_REDUX_NAME),
    composeEnhancers(),
);

store.subscribe(() => {
    saveToLocalStorage(store.getState(), LOCAL_STORAGE_REDUX_NAME);
});

export type StoreType = ReturnType<typeof rootReducer>;
export type StoreDispatchType = typeof store.dispatch;
export default store;

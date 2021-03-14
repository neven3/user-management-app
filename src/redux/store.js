import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import modalReducer from './modal/modalReducer';
import userReducer from './user/userReducer';

const store = createStore(
    combineReducers({
        modal: modalReducer,
        user: userReducer
    }),
    applyMiddleware(thunk)
);

export default store;
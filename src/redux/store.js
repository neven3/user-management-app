import { createStore } from 'redux';
import modalReducer from './modal/modalReducer';

const store = createStore(modalReducer);

export default store;
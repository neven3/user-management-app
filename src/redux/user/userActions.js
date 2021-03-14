import { SET_USERS, ADD_USER, LOGIN_USER, LOGOUT_USER } from './userTypes';
import getUsers from '../../services/getUsers';
import createNewUser from '../../services/createNewUser';
import login from '../../services/login';

// todo: error handling

export function setUsers({ users, filter }) {
    return {
        type: SET_USERS,
        payload: { users, filter }
    };
}

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    };
}

export function loginUser() {
    debugger
    return {
        type: LOGIN_USER
    };
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    };
}

export function handleLogout() {
    return (dispatch) => {
        localStorage.removeItem('userToken');
        dispatch(logoutUser());
    }
}

export function handleLogin(credentials) {
    return async (dispatch) => {
        try {
            const token = await login(credentials);
            localStorage.setItem('userToken', token);
            dispatch(loginUser());
        } catch (err) {
            console.log({ err });
            debugger
            throw err;
        }
    };
}

export function createUser(userValues) {
    return async (dispatch) => {
        try {
            const newUser = await createNewUser(userValues);
            dispatch(addUser(newUser));
        } catch (err) {
            console.log(err)
            debugger
            throw err;
        }
    };
}

export function fetchUsers(filter) {
    return async (dispatch) => {
        try {
            const users = await getUsers();
            dispatch(setUsers({ users, filter }));
        } catch (err) {
            console.log({ err })
            debugger
            throw err;
        }
    };
}
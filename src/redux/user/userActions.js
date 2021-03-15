import { toast } from 'react-toastify';

import { SET_USERS, ADD_USER, LOGIN_USER, LOGOUT_USER, SET_PREVIEW_IMAGE } from './userTypes';
import { login, getUsers, createNewUser } from '../../services';
import { closeModal } from '../modal/modalActions';
import { saveUserToLocalStorage } from '../../utils';

export function setUsers({ users, filter }) {
    return {
        type: SET_USERS,
        payload: { users, filter }
    };
}

export function setPreviewImage(image) {
    return {
        type: SET_PREVIEW_IMAGE,
        payload: image
    };
}

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    };
}

export function loginUser() {
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
            toast.error(`Error logging in: ${err}`);
        }
    };
}

export function createUser(userValues) {
    return async (dispatch) => {
        try {
            const newUser = await createNewUser(userValues);
            saveUserToLocalStorage(newUser);
            dispatch(addUser(newUser));
            toast.success('Successfully created new user');
            dispatch(closeModal());
        } catch (err) {
            toast.error(`Error creating new user: ${err.message}`);
        }
    };
}

export function fetchUsers(filter) {
    return async (dispatch) => {
        try {
            const users = await getUsers();
            const locallyCreatedUsers = JSON.parse(localStorage.getItem('createdUsersList'));

            if (locallyCreatedUsers) {
                users.push(...locallyCreatedUsers);
            }

            dispatch(setUsers({ users, filter }));
        } catch (err) {
            toast.error(`Error fetching users: ${err.message}`);
            throw err;
        }
    };
}
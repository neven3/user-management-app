import { SET_USERS, ADD_USER, LOGIN_USER, LOGOUT_USER } from './userTypes';
import { checkIfStringsIncludeFilter } from '../../utils';

const initialUsersState = {
    userList: [],
    isLoggedIn: Boolean(localStorage.getItem('userToken'))
};

function userReducer(state = initialUsersState, action) {
    switch (action.type) {
        case SET_USERS:
            const { users, filter } = action.payload;

            if (filter.length >= 2) {
                const filteredUserList = users.filter(user => {
                    const { first_name, last_name } = user;
                    const wholeName = `${first_name} ${last_name}`;

                    return checkIfStringsIncludeFilter(filter, first_name, last_name, wholeName);
                });

                return {
                    ...state,
                    userList: filteredUserList
                };
            } else {
                return {
                    ...state,
                    userList: users
                };
            }
        case ADD_USER:
            const newUser = action.payload;

            return {
                ...state,
                userList: [newUser, ...state.userList]
            };
        case LOGIN_USER:
            return {
                ...state,
                isLoggedIn: true
            };
        case LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false
            };
        default:
            return {
                ...state
            };
    }
}

export default userReducer;
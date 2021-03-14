import { SET_USERS, ADD_USER, LOGIN_USER, LOGOUT_USER } from './userTypes';

// todo: extract filter callback

const initialUsersState = {
    userList: [],
    isLoggedIn: localStorage.getItem('userToken')
};

function userReducer(state = initialUsersState, action) {
    switch (action.type) {
        case SET_USERS:
            const { users, filter } = action.payload;

            if (filter.length >= 2) {
                const filteredUserList = users.filter(user => {
                    return (
                        user.first_name.toLowerCase().includes(filter.toLowerCase())
                        || user.last_name.toLowerCase().includes(filter.toLowerCase())
                        || `${user.first_name} ${user.last_name}`.toLowerCase().includes(filter.toLowerCase())
                    );
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
                userList: [...state.userList, newUser]
            };
        case LOGIN_USER:
            debugger
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
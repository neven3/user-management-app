import React from 'react';
import PropTypes from 'prop-types';

import UserCard from '../components/UserCard';

function UserList(props) {
    const { userList, emptyState } = props;

    return (
        !emptyState ? (
            <div className="user-list">
                {userList.map(user => (
                    <UserCard user={user} key={user.id} />
                ))}
            </div>
        ) : (
            <div className="user-list-empty-state">No users</div>
        )
    );
}

UserList.propTypes = {
    userList: PropTypes.arrayOf(PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.string
    })).isRequired,
    emptyState: PropTypes.bool.isRequired
};

export default UserList;
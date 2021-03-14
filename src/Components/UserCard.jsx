import React from 'react';
import PropTypes from 'prop-types';

function UserCard(props) {
    const { first_name, last_name, avatar } = props.user;

    return (
        <div className="card">
            <div className="card-image">
                <img src={avatar} alt="user" />
            </div>
            <div className="card-details">
                <p>{first_name}</p>
                <p>{last_name}</p>
            </div>
        </div>
    );
}

UserCard.propTypes = {
    user: PropTypes.shape({
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
    }).isRequired
};

export default UserCard;
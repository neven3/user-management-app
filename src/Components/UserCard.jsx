import React from 'react';

// todo: prop-types

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

export default UserCard;
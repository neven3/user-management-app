import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { handleLogout } from '../redux/user/userActions';

// todo: prop-types

function Navigation(props) {
    const { isLoggedIn, handleLogout } = props;

    return (
        <nav>
            {isLoggedIn &&
                <button
                    className="logout-btn"
                    onClick={() => handleLogout()}
                >
                    <Link to="/">Logout</Link>
                </button>
            }
            <h1>User Management App</h1>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout: () => dispatch(handleLogout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
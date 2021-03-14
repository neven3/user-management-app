import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import { handleLogin } from '../../redux/user/userActions';

function LoginPage(props) {
    const { isLoggedIn, handleLogin } = props;

    if (isLoggedIn) {
        return <Redirect to="/main" />
    }

    return (
        <div className="screen-container">
            <main>
                <div className="content-container">
                    <h2>Login</h2>
                    <LoginForm onSubmit={handleLogin} />
                </div>
            </main>
        </div>
    );
}

LoginPage.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin: (credentials) => dispatch(handleLogin(credentials))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
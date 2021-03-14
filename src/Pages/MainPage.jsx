import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CreateNewUserModal from '../components/CreateNewUserModal';
import UserList from '../components/UserList';
import { openModal, closeModal } from '../redux/modal/modalActions';
import { createUser, fetchUsers } from '../redux/user/userActions';

function MainPage(props) {
    const { isModalOpen, openModal, closeModal, userList, fetchUsers, createUser, isLoggedIn } = props;
    const [searchBarValue, setSearchBarValue] = useState('');

    useEffect(() => {
        fetchUsers(searchBarValue);
        // eslint-disable-next-line
    }, [searchBarValue])

    if (!isLoggedIn) {
        return <Redirect to="/" />
    }

    return (
        <div className="screen-container">
            <main>
                <div className="content-container">
                    <div className="form-control">
                        <input
                            placeholder="Search"
                            onChange={(e) => setSearchBarValue(e.target.value)}
                            type="search"
                            name="search"
                            id="search"
                            value={searchBarValue}
                        />
                    </div>
                    <button
                        className="create-new-btn"
                        onClick={openModal}
                    >
                        + Add new user
                    </button>
                    <CreateNewUserModal {...{ isModalOpen, closeModal, createUser }} />
                </div>
                <UserList
                    userList={userList}
                    emptyState={userList.length === 0}
                />
            </main>
        </div >
    );
}

MainPage.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    userList: PropTypes.arrayOf(PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string,
        avatar: PropTypes.string
    })).isRequired,
    fetchUsers: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.modal.isModalOpen,
        userList: state.user.userList,
        isLoggedIn: state.user.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal()),
        fetchUsers: (filter) => dispatch(fetchUsers(filter)),
        createUser: (user) => dispatch(createUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
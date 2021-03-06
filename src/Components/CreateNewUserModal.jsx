import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import CreateNewUserForm from './CreateNewUserForm';

function CreateNewUserModal(props) {
    const { isModalOpen, closeModal, createUser } = props;

    Modal.setAppElement('#root');

    return (
        <Modal
            className="modal"
            overlayClassName="overlay"
            isOpen={isModalOpen}
            onRequestClose={closeModal}
        >
            <button className="close-modal-btn" onClick={closeModal}>X</button>
            <CreateNewUserForm onSubmit={(values) => { createUser(values) }} />
        </Modal>
    );
}

CreateNewUserModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired
};

export default CreateNewUserModal;
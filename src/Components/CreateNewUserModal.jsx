import React from 'react';
import Modal from 'react-modal';

import CreateNewUserForm from './CreateNewUserForm';

// todo: prop-types
// todo: error handling

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
            <CreateNewUserForm onSubmit={(values) => {
                try {
                    createUser(values);
                    closeModal();
                } catch (err) {
                    console.log({ err })
                    debugger
                }
            }} />
        </Modal>
    );
}

export default CreateNewUserModal;
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormControl from './FormControl';
import ImagePreview from './ImagePreview';

function CreateNewUserForm(props) {
    const { onSubmit, previewImage } = props;

    const initialValues = {
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
    };

    const validationSchema = Yup.object({
        email: Yup
            .string()
            .email('Invalid e-mail format')
            .required('Required'),
        first_name: Yup
            .string()
            .required('Required'),
        last_name: Yup
            .string()
            .required('Required'),
        avatar: Yup
            .string()
            .url('Invalid URL')
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <FormControl
                    type="text"
                    name="first_name"
                    label="First name"
                />
                <FormControl
                    type="text"
                    name="last_name"
                    label="Last name"
                />
                <FormControl
                    type="text"
                    name="email"
                    label="E-mail"
                />
                {!previewImage && (<FormControl
                    type="text"
                    name="avatar"
                    label="Avatar URL"
                />)}
                <ImagePreview />
                <button className="submit-btn" type="submit">Create User</button>
            </Form>
        </Formik>
    );
}

CreateNewUserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    previewImage: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        previewImage: state.user.previewImage
    };
}

export default connect(mapStateToProps, null)(CreateNewUserForm);
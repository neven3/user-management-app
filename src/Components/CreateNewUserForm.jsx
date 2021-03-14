import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import FormControl from './FormControl';

function CreateNewUserForm(props) {
    const { onSubmit } = props;
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
                <FormControl
                    type="text"
                    name="avatar"
                    label="Avatar URL"
                />
                <button className="submit-btn" type="submit">Create User</button>
            </Form>
        </Formik>
    );
}

CreateNewUserForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default CreateNewUserForm;
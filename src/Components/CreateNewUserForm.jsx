import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import FormValidationMessage from './FormValidationMessage';

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
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div className="form-control">
                    <label htmlFor="first_name">First name</label>
                    <Field
                        type="text"
                        name="first_name"
                        id="first_name"
                    />
                    <ErrorMessage name="first_name" component={FormValidationMessage} />
                </div>
                <div className="form-control">
                    <label htmlFor="last_name">Last name</label>
                    <Field
                        type="text"
                        name="last_name"
                        id="last_name"
                    />
                    <ErrorMessage name="last_name" component={FormValidationMessage} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <Field
                        type="text"
                        name="email"
                        id="email"
                    />
                    <ErrorMessage name="email" component={FormValidationMessage} />
                </div>
                <div className="form-control">
                    <label htmlFor="avatar">Avatar URL</label>
                    <Field
                        type="text"
                        name="avatar"
                        id="avatar"
                    />
                    <ErrorMessage name="avatar" component={FormValidationMessage} />
                </div>
                <button className="submit-btn" type="submit">Login</button>
            </Form>
        </Formik>
    );
}

export default CreateNewUserForm;
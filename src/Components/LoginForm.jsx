import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import FormValidationMessage from './FormValidationMessage';

function LoginForm(props) {
    const { onSubmit } = props;
    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup
            .string()
            .email('Invalid e-mail format')
            .required('Required'),
        password: Yup
            .string()
            .required('Required')
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
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
                    <label htmlFor="password">Password</label>
                    <Field
                        type="password"
                        name="password"
                        id="password"
                    />
                    <ErrorMessage name="password" component={FormValidationMessage} />
                </div>
                <button className="submit-btn" type="submit">Login</button>
            </Form>
        </Formik>
    );
}

export default LoginForm;
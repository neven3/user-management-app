import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import FormControl from './FormControl';

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
                <FormControl
                    type="text"
                    name="email"
                    label="E-mail"
                />
                <FormControl
                    type="password"
                    name="password"
                    label="Password"
                />
                <button className="submit-btn" type="submit">Login</button>
            </Form>
        </Formik>
    );
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
import React from 'react';
import { Field, ErrorMessage } from 'formik';

import FormValidationMessage from './FormValidationMessage';

// todo: prop-types

function FormControl(props) {
    const { type, label, name } = props;
    return (
        <div className="form-control">
            <label htmlFor="email">{label}</label>
            <div className="input-container">
                <Field
                    type={type}
                    name={name}
                    id={name}
                />
            </div>
            <ErrorMessage name={name} component={FormValidationMessage} />
        </div>
    );
}

export default FormControl;
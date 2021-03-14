import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import FormValidationMessage from './FormValidationMessage';

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

FormControl.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default FormControl;
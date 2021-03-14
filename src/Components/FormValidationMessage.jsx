import React from 'react';
import PropTypes from 'prop-types';

function FormValidationMessage(props) {
    return (
        <p className="error">{props.children}</p>
    );
}

FormValidationMessage.propTypes = {
    children: PropTypes.elementType
};

export default FormValidationMessage;
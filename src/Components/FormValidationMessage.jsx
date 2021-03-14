import React from 'react';

// todo: prop-types

function FormValidationMessage(props) {
    return (
        <p className="error">{props.children}</p>
    );
}

export default FormValidationMessage;
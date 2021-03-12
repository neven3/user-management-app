import React from 'react';

function FormValidationMessage(props) {
    return (
        <p className="error">{props.children}</p>
    );
}

export default FormValidationMessage;
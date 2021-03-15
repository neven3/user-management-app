import React from 'react';
import PropTypes from 'prop-types';

function AddRemoveImageButton(props) {
    const { callback, textContent } = props;

    return (
        <button
            className="add-image-btn"
            onClick={(event) => {
                event.preventDefault();
                callback();
            }}
        >
            {textContent}
        </button>
    );
}

AddRemoveImageButton.propTypes = {
    callback: PropTypes.func.isRequired,
    textContent: PropTypes.string.isRequired
};

export default AddRemoveImageButton;
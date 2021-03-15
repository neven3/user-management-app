import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ImageCropper from './ImageCropper';
import AddRemoveImageButton from './AddRemoveImageButton';
import { setPreviewImage } from '../redux/user/userActions';

function ImageFileInput(props) {
    const { previewImage, setPreviewImage } = props;
    const [image, setImage] = useState();
    const fileInputRef = useRef();

    useEffect(() => {
        if (image) {
            const fileReader = new FileReader();

            fileReader.onloadend = () => {
                setPreviewImage(fileReader.result);
            };

            fileReader.readAsDataURL(image);
        } else {
            setPreviewImage(null);
        }
        // eslint-disable-next-line
    }, [image]);

    return (
        <div>
            {previewImage ? (
                <div>
                    <ImageCropper src={previewImage} />
                    <AddRemoveImageButton
                        callback={() => setImage(null)}
                        textContent="Remove Image"
                    />
                </div>

            ) : (
                <AddRemoveImageButton
                    callback={() => fileInputRef.current.click()}
                    textContent="Add Image"
                />
            )}
            <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                ref={fileInputRef}
                onChange={(event) => {
                    const file = event.target.files[0];

                    if (file && file.type.slice(0, 5) === 'image') {
                        setImage(file);
                    } else {
                        setImage(null);
                    }
                }}
            />
        </div>
    );
}

ImageFileInput.propTypes = {
    previewImage: PropTypes.string,
    setPreviewImage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        previewImage: state.user.previewImage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPreviewImage: (image) => dispatch(setPreviewImage(image))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageFileInput);
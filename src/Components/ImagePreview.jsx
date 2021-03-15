import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import ImageCropper from './ImageCropper';
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
    }, [image]);

    return (
        <div>
            {previewImage ? (
                <div style={{ position: 'relative' }}>
                    <ImageCropper src={previewImage} />
                    <button
                        className="add-image-btn"
                        onClick={(event) => {
                            event.preventDefault();
                            setImage(null);
                        }}
                    >
                        Remove Image
                    </button>
                </div>

            ) : (
                <button
                    className="add-image-btn"
                    onClick={(event) => {
                        event.preventDefault();
                        fileInputRef.current.click();
                    }}
                >
                    Add Image
                </button>
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
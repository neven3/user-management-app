import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.min.css';
import React, { useEffect, useRef } from 'react';


function ImageCropper(props) {
    const imageElement = useRef(null);

    useEffect(() => {
        new Cropper(imageElement.current, {
            zoomable: false,
            scalable: false,
            aspectRatio: 1,
        });
    }, []);


    return (
        <div className="img-container">
            <img
                src={props.src}
                ref={imageElement}
                width="200px"
                alt="Source"
            />
        </div>
    );
}

export default ImageCropper;
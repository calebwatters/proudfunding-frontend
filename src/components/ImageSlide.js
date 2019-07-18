import React from 'react'

const ImageSlide = ({ url }) => {
    const styles = {
        maxHeight: '17vw'};

    return (
        <img className="image-slider"style={styles} src={url} />
    );
}

export default ImageSlide
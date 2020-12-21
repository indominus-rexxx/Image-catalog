import React from 'react';

const ImageItem = ({ id, tag, image, setTag }) => {

    return (
        <li key={id}
            onClick={() => setTag(tag)}>
            <div className='edge'>
                <embed src={image}></embed>
            </div>
        </li>
    )
}

export default ImageItem;
import React from 'react';

const Modal = ({item, toggle}) => {

    return (
        (<div id='modal'>
            <p>{item.name}</p>
            <span id='exit' onClick={() => toggle(false)}>X</span>
            <span>{item.price}</span>
            <img id='modalImg' src={item.imageUrl} />
        </div>) 
    );
};

export default Modal;
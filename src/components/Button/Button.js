import React from 'react';
import './button.css';

const Button = (props) => {

    const { disabled, handleOnClick, title } = props;

    return (
        <div>
            <button disabled={disabled} onClick={handleOnClick}>{title}</button>
        </div>
    );
}

export default Button;
import React from 'react';
import './button.css';

const Button = (props) => {

    const { disabled, handleOnClick, title } = props;
    const disabledClassName = disabled ? 'disabled' : '';

    return (
        <div>
            <button disabled={disabled} className={disabledClassName} onClick={handleOnClick}>{title}</button>
        </div>
    );
}

export default Button;
import React from 'react';
import './input.css';

const Input = (props) => {
    const { placeholder, type, value } = props;

    return (
        <input type={type} placeholder={placeholder} value={value} />
    );
}

export default Input;
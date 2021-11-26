import React from 'react';
import './input.css';

const Input = (props) => {
    const { placeholder, type, onChange } = props;

    return (
        <input type={type} placeholder={placeholder} onChange={onChange} />
    );
}

export default Input;
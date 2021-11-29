import React from 'react';
import './input.css';

const Input = (props) => {
    const { placeholder, type, onChange, name } = props;

    return (
        <input type={type} placeholder={placeholder} onChange={onChange} name={name} />
    );
}

export default Input;
import React, { useState } from 'react';
import Heading from '../Heading';
import Button from '../Button';
import Input from '../Input';
import './newsletter.css';
import { } from '../../api';

const Newsletter = () => {
    const [inputValue, setInputValue] = useState("");

    const handleOnClick = (e) => {

        console.log(inputValue);
    };

    return (
        <div className="newsletter">
            <Heading title="Newsletter" />
            <p>Stay up to date with our latest news and products.</p>
            <div className="inputButton">
                <Input type="text" placeholder="Your email address" onChange={(e) => setInputValue(e.target.value)} />
                <Button title="SUBSCRIBE" handleOnClick={handleOnClick} />
            </div>
            <p className="p2">Your email is safe with us, we don't spam.</p>
        </div>
    );
};

export default Newsletter;

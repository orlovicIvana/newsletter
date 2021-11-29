import React, { useState } from 'react';
import Heading from '../Heading';
import Button from '../Button';
import Input from '../Input';
import './newsletter.css';
import axios from 'axios';

const Newsletter = () => {
    const [inputValue, setInputValue] = useState("");
    const [disable, setDisable] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (inputValue !== '') {

            const res = await axios.post('http://192.168.100.103:1337/api/subscribe', { email: inputValue });
            console.log(res.data);
        }

    };

    return (
        <div className="newsletter">
            <Heading title="Newsletter" />
            <p>Stay up to date with our latest news and products.</p>
            <form onSubmit={onSubmit}>
                <Input type="email" placeholder="Your email address" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
                <Button title="SUBSCRIBE" disabled={disable} />
            </form>
            <p className="p2">Your email is safe with us, we don't spam.</p>
        </div >
    );
};

export default Newsletter;

import React, { useState } from 'react';
import Heading from '../Heading';
import Button from '../Button';
import Input from '../Input';
import './newsletter.css';
import axios from 'axios';

const Newsletter = () => {
    const [disable, setDisable] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const inputValue = e.target[0].value;

        if (inputValue !== '') {
            setDisable(true)

            try {
                const res = await axios.post('http://192.168.100.103:1337/api/subscribe', { name: "Ivana", email: inputValue })
                console.log(res.data)
                setDisable(false)
            }
            catch (e) {
                console.log("Error message:", e)
                setDisable(false)
            }
            return true;

        }
        return false;
    };

    return (
        <div className="newsletter">
            <Heading title="Newsletter" />
            <p>Stay up to date with our latest news and products.</p>
            <form method="POST" onSubmit={onSubmit}>
                <Input type="email" placeholder="Your email address" />
                <Button title="SUBSCRIBE" disabled={disable} />
            </form>
            <p className="p2">Your email is safe with us, we don't spam.</p>
        </div >
    );
};

export default Newsletter;

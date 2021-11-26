import React from 'react';
import Heading from '../Heading';
import Button from '../Button';
import Input from '../Input';
import './newsletter.css';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <Heading title="Newsletter" />
            <p>Stay up to date with our latest news and products.</p>
            <div className="inputButton">
                <Input type="text" placeholder="Your email address" />
                <Button title="SUBSCRIBE" />
            </div>
            <p className="p2">Your email is safe with us, we don't spam.</p>
        </div>
    );
};

export default Newsletter;

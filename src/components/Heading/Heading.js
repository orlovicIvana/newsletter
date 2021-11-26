import React from 'react';
import './heading.css';

const Heading = (props) => {
    //console.log(props);
    const { title, className } = props;

    return (
        <h1 className={className}>{title}</h1>
    );
}

export default Heading;
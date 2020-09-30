import React from 'react';
import './errorMessage.css';
import img from './error.png';

const ErrorMessage = () => {
    return (
        <>
            <div className="img__block">
                <img src={img} alt="error"/>
            </div>
            <span>Error</span>
        </>
    )
}

export default ErrorMessage;
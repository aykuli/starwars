import React from 'react';

import './error-indicator.css';
import icon from './boom.svg';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <div>
                <p className="boom">BOOM!</p>
                <span>Something has gone terrribly wrong,</span>
                <span>but we already send droid to fix it.</span>
            </div>
        </div>
    )
};

export default ErrorIndicator;


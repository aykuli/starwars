import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
    return isLoggedIn ? 
        <Redirect to="/" />
        : <div className="jumbotron">
            <h3>Login to see secret page</h3>
            <button 
                className="btn btn-primary"
                onClick={onLogin}>
                Login
            </button>
        </div>
}

export default LoginPage;
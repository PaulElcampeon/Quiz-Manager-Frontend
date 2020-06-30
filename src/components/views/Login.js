import React from 'react';
import LoginForm from '../items/LoginForm';

const Login = (props) => {

    return (
        <div className="login">
            <div className="top_div">
                <LoginForm/>
            </div>
            <div className="bottom_div">
                <h1>QUIZ MANAGER</h1>
            </div>
        </div>
    )
}

export default Login;
import React from 'react';


const LoginForm = (props) => {

    return (
        <div className="loginForm_holder">
            <div className="loginInput">
                <input type="text" placeholder="username" />
            </div>
            <div className="loginInput">
                <input type="password" placeholder="password" />
            </div>
            <div className="loginBtn">
                <input type="button" value="login" />
            </div>
        </div>
    )
}

export default LoginForm;
import React from 'react';
import LoginForm from '../items/LoginForm';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";


const Login = (props) => {
    const storeExtractor = useSelector(store => store);
    const { loggedIn } = storeExtractor;

    return (
        <div>
            {loggedIn ? <Redirect to={"/quizzes"} /> :
                <div className="login">
                    <div className="top_div">
                        <LoginForm />
                    </div>
                    <div className="bottom_div">
                        <h1>QUIZ MANAGER</h1>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login;
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../../store/actions';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {

    //Redux tools
    const dispatch = useDispatch();
    const storeExtractor = useSelector(store => store);
    const loggedIn = storeExtractor.loggedIn;

    //Managing component state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleOnClick = () => {
        dispatch(loginAction({ username: username, password: password }));
    }

    //show the spinning thing until we get from the store that we are loggedIn, if we are loggedIn then we redirect to quizzes view
    return (
        <div>
            {loggedIn ? <Redirect to={{ pathname: "/quizzes", state: { from: props.location } }} />
                :
                <div className="loginForm_holder">
                    <div className="loginInput">
                        <input type="text" placeholder="username" value={username} onChange={handleChangeUsername} />
                    </div>
                    <div className="loginInput">
                        <input type="password" placeholder="password" value={password} onChange={handleChangePassword} />
                    </div>
                    <div className="loginBtn">
                        <input type="button" value="login" onClick={handleOnClick} />
                    </div>
                </div>}
        </div>
    )
}

export default LoginForm;
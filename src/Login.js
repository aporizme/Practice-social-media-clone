import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from "./reducer";
function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img className="logo" src={require("./img/fblogo.png")} alt=""/>
                <img className="text" src={require("./img/fbtext.png")} alt=""/>
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login

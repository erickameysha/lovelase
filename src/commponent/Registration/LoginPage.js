import React from 'react';
import {Link} from "react-router-dom";
import {Login} from "../FormsComponent/Login";
import SignUp from "../FormsComponent/SignUp";

const LoginPage = () => {
    return (
        <div>
           <h1>Login</h1>
            <SignUp/>
           <p>
               or <Link to={'/registration'} >registration</Link>
           </p>
        </div>
    );
};

export default LoginPage;
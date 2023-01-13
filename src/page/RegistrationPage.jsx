import React from 'react';
import LoginPage from "./LoginPage";
import {Link} from "react-router-dom";
import SignUp from "../commponent/formes/SignUp";

const RegistrationPage = () => {
    return (
        <div>
            <h1>     Registration</h1>
            <SignUp/>
            or <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default RegistrationPage;
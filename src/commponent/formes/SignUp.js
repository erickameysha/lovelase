import React from 'react';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import Form from "./Form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../store/userSlice";


const SignUp = () => {
    const dispatch = useDispatch();
    const push= useNavigate();
    const auth = getAuth();
    const handleRegister = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(console.error)
    }

    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    )
}

export default SignUp;
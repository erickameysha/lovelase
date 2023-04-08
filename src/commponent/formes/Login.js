import React from 'react';
import Form from "./Form";
import {useDispatch} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {logDOM} from "@testing-library/react";
import {setUser} from "../../store/userSlice";
import {useNavigate} from "react-router-dom";
//2
//test11
const Login = () => {
const dispatch = useDispatch()
    const push= useNavigate()
    const auth = getAuth()
  const handleLogin =(email, password)=>{


      signInWithEmailAndPassword(auth, email,password)
          .then(({user}) => {
              console.log(user);
              dispatch(setUser({
                  email: user.email,
                  id: user.uid,
                  token: user.accessToken,
              }));
              push('/');
          })
          .catch(() => alert('Invalid user!'))
  }
    return (
        <div>
            <Form title={'sign in'}
            handleClick={handleLogin}/>
        </div>
    );
};

export default Login;
import React from 'react';
import './Signup.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import  auth  from '../../../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] =useState('');
    const navigate = useNavigate();


    const [ createUserWithEmailAndPassword, user] =useCreateUserWithEmailAndPassword(auth)

    const handlePassword = event =>{
        setPassword(event.target.value)
    }
 
    const handlConfirmPasswordlBlur = event =>{
        setConfirmPassword(event.target.value)

    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }

    if(user){
        navigate('/')
    }


    const handleCreateUser = event => {
        event.preventDefault();
        if(password !== confirmpassword){
            setError("Your Password didn,t match")
            return;
        }
        if(password.length <6){
            setError("Password must be 6 charecters or longer");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }
    

    return (
        <div className='form-container'>
           <form>
           <div>
            <h2 className='form-title'>SignUp</h2>
            <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required placeholder='Enter Your Email' />
            </div>
            <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <input onBlur={handlePassword} type="password" name="password" id="" placeholder='Enter Your Password' required/>
            </div>
            <div className='input-group'>
                <label htmlFor='password'> Confirm Password</label>
                <input onBlur={handlConfirmPasswordlBlur} type="password" name="confirm-password" id="" placeholder='Confirm Your Password' required/>
            </div>
            <p style={{color:'red'}}>
                {error}
            </p>
            <input onClick={handleCreateUser} className='form-submit' type="submit" value="SignUp"></input>
            </div>
            <p>All Ready Have An Account?<Link className='form-link' to="/login">Login</Link></p>
            <SocialLogin></SocialLogin>
           </form>
        </div>
    );
};

export default Signup;
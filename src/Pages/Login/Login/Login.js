import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';



const Login = () => {
      
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();
     

     const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const location = useLocation();    
      const from = location.state?.from?.pathname || '/';

     const handleEmailBlur = event =>{
         setEmail(event.target.value)
     }

     const handlePasswordBlur = event =>{
         setPassword(event.target.value)
     }

     if(user){
        navigate(from,{replace: true})
    }

  
     const handleUserSignIn =event =>{
         event.preventDeafault();
         signInWithEmailAndPassword(email, password);
     }

    return (
    <>
    <div className='form-container'>
           <form>
           <div>
            <h2 className='form-title'>Login</h2>
            <div className='input-group'>
                <label htmlFor='email'>Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter Your Email' required/>
            </div>
            <div className='input-group'>
                <label htmlFor='password'>Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Enter Your password' required />
            </div>
            <p style={{color:'red'}}>{error?.message}</p>
            {
                loading && <p>loading...</p>
            }
            <input onClick={handleUserSignIn} className ='form-submit' type="submit" value="Login"></input>
            </div>
            <p>New Patient?<Link className='form-link' to="/signup">Create An Account</Link></p>
            <SocialLogin></SocialLogin>
           </form>
           
        </div>
       

    </>
        
    );
};

export default Login;
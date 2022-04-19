import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';

const SocialLogin = () => {
    return (
        <div>
            <div>
                <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className = 'bg-primary w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{height: '1px'}} className = 'bg-primary w-50'></div>
                   
                </div>
                <button className='btn btn-info w-100 d-block mx-auto'>
                <img style={{width:"30px"}} src={google} alt=''></img>
               <span className='px-3'>Google Sign In</span> </button>
                <button className='btn btn-primary w-100 mt-3 mb-2 mx-auto d-block'>
                <img style={{width:"30px"}} src={facebook} alt=''></img>
                <span className='px-3'>Facebook Sign In</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;
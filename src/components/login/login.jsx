import React, { useState } from 'react'
import api from '../../API/API'

import './Login.scss'
import {useNavigate,Link} from 'react-router-dom'
import {BsPerson} from 'react-icons/bs';
import {BiLock} from 'react-icons/bi';
import {FcGoogle} from 'react-icons/fc';
import {FaFacebook} from 'react-icons/fa';
import LandingPage from '../landingpage/LandingPage';






function Login() {
    
    let [username,setUsername]=useState("");
    let [password,setPassword]=useState("");
    let navigate = useNavigate();
    
    let handleSubmit = (e)=>{
        
       e.preventDefault();
       if(username==='' || password===''){
           alert('fill everything!!')
           return
       }
       const form = {username:username,password:password}
       // console.log(form);

       async function post_req(form){
           console.log(form);
           
           const response = await api.post('/login/login-create',form);
           // response.data = form
           console.log(response);
           console.log('response===',response.data);
       }
       post_req(form)
       // this.setState({Username:'',Password:''})
   }
  return (
      <>
    <div className='login-container'>
        
        <div className='sign-in'>
                <h1>Sign-In</h1>
                <form id='myForm' onSubmit={handleSubmit}>
               
                <div className='text-field'>
                <BsPerson/>
                <input name='Username' type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username' required/>
                </div>
                    
                <div className='text-field'>
                <BiLock/>
                <input name='Password' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' required></input>
                </div>
                
                <div className='forgot-password'>
                    <Link to={LandingPage}>Forgot Password?</Link>
                </div>
                
                <button className='button' type='submit' onClick={()=>navigate("/HomePage")}>Login</button>
            </form>
            <div className='quick-sign-in'>
                <div className='google-sign-in'><FcGoogle/></div>
                <div className='fb-sign-in'><FaFacebook/></div>
            </div>

        </div>
        <div className='sign-up'>
        <p>Don't have an account? 
        <Link to="/signup"> Signup here</Link>
        </p>
        </div>
        </div>
        </>
        
  )
}




export default Login
import React from 'react';
import {useState} from 'react';
import './Signup.css';
function Signup(){
    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [username,setUsername]=useState("");
    const [email_id,setEmail_id]=useState("");
    const [dob,setDob]=useState("");
    const [password,setPassword]=useState("");
    const [confirm_password,setConfirm_password]=useState("");

    return(
        <>
        <div className="Signup">
            <h1>Create Account</h1>
            <form id="signup-form">
                <div className="text-field">
                <input name="first-name" type="text" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} placeholder='First Name' required/>
                </div>
                
                <div className="text-field">
                <input name="last-name" type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} placeholder='Last Name' required/>
                </div>
               
                <div className="text-field">
                <input name="username" type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username' required/>
                </div>

                <div className="text-field">
                <input name="first-name" type="text" value={email_id} onChange={(e)=>{setEmail_id(e.target.value)}} placeholder='Email-id' required/>
                </div>

                <div className="text-field">
                <input name="dob" type="text" value={dob} onChange={(e)=>{setDob(e.target.value)}} placeholder='Date-of-Birth' required/>
                </div>
                
                <div className="text-field">
                <input name="password" type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' required/>
                </div>

                <div className="text-field">
                <input name="confirm_password" type="text" value={confirm_password} onChange={(e)=>{setConfirm_password(e.target.value)}} placeholder='Confirm Password' required/>
                </div>
                
            </form>
            
        </div>
        </>
    )

}
export default Signup;

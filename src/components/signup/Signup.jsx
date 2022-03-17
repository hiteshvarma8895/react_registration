

import {useState} from 'react';

import './Signup.scss';
import {BsPerson} from 'react-icons/bs';
import {FiSmartphone} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';

import {BiLock} from 'react-icons/bi';

// import {useNavigate} from 'react-router-dom';
function Signup(){
    const initialValues=[{name:"",phone:"",email_id:"",password:"",confirm_password:""}];
    const [formValues,setFormValues]=useState(initialValues);
    const [data,setData]=useState();
    

    const handleSubmit=(event)=>{
        event.preventDefault();
        let regData={...formValues};
        setData([...data],regData);
        console.log(data)
        
        if(formValues.password !== formValues.confirm_password){
            alert("passwords don't match");
            return;
        }
        
        setFormValues([{name:"",phone:"",email_id:"",password:"",confirm_password:""}]);
    }
    
    const handleChange= (event)=>{
       const {name,value}=event.target;
    
        setFormValues({...formValues,[name]:value});
        // console.log(formValues);
    
    }
    

    return(
        <>
        <div className='signup-container'>
        <div className="Signup">
            <h1>Create Account</h1>
            <form id="signup-form" onSubmit={handleSubmit}>
                <div className="text-field">
                <BsPerson/>
                <input name="first-name" type="text" value={formValues.name} onChange={handleChange} placeholder='Name'  required/>
                </div>
                
                <div className="text-field">
                <FiSmartphone/>
                <input name="phone" type="text" value={formValues.phone} onChange={handleChange} placeholder='Phone Number' required/>
                </div>

                <div className="text-field">
                <HiOutlineMail/>
                <input name="email" type="email" value={formValues.email_id} onChange={handleChange} placeholder='Email' required/>
                </div>
                
                <div className="text-field">
                <BiLock/>
                <input name="password" type="password" value={formValues.password} onChange={handleChange} placeholder='Password' pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" title='Password must contain minimum eight characters, at least one letter, one number and one special character'  required/>
                </div>

                <div className="text-field">
                <BiLock/>
                <input name="confirm_password" type="text" value={formValues.confirm_password} onChange={handleChange} placeholder='Confirm Password' pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"  required />
                </div>
                
                <button className='button' type='submit' >Create Account</button>
            </form>
            
        </div>
        </div>
        </>
    )

}
export default Signup;

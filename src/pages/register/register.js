import React, {useState, useEffect } from "react";
import facebook from './facebook.svg';
import google from './google.svg';
import './register.css';
import { Button } from 'react-bootstrap'
import { toast,ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";

const Register = ()=> {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) =>{
    e.preventDefault();
    if(email,name,password,confirm && password === confirm){ 
      try {
        setLoading(true);
        const {data} = await axios.post('http://localhost:8080/email',{
          email,name,password,confirm
        });
        setLoading(false);
        console.log("success");
        toast.success(data.name);
    }catch(err){
      setLoading(false);
      toast.error(err.response && err.response.data.name
        ? err.response.data.name : err.name);
    }
  }
  else{
    toast.error('Provide full value');
  }
}

   return(
     <div>
     <div className="blue">
        <div className="header">
          <h1>Create your Account</h1>
          <h4 className="h4">Please fill all forms to continued</h4>
        </div>

        <form onSubmit={submitHandler}>
          <label className="label">Full Name</label><br></br>
          <input type='text' placeholder=" " onChange={(e)=>setName(e.target.value)}  className="input" ></input><br></br>
          <label className="label">Email or Phone Number</label><br></br>
          <input type='email' placeholder=" " onChange={(e)=>setEmail(e.target.value)}  className="input"></input><br></br>
          <label className="label">Password</label><br></br>
          <input type='password' className="input" onChange={(e)=>setPassword(e.target.value)}></input><br></br>
          <label className="label">Confirm Password</label><br></br>
          <input type='password' className="input" onChange={(e)=>setConfirm(e.target.value)}></input><br></br>
          <input type='checkbox'></input>
          <label>By signing up, you agree to <strong><u>Terms & Condition</u></strong></label><br></br>
          <Button variant="outline-primary" disabled={loading} type="submit" className='facebook'>{loading ? `Sending...`: `Login`}</Button>
        </form>
        <label> or</label><br></br>
        <Button variant="outline-dark" className='facebook'>Continue with Facebook</Button>
        <Button variant="outline-info" className='google'>Continue with Google</Button>
     </div>
     <div>
       <h5 className="h5">Already have account? <a href="#">Log in</a></h5>
     </div>

     <ToastContainer position="bottom-center" limit={1}/>
     </div>
   )
  }
 
 export default Register
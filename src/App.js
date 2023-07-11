import React,{useState} from 'react'
import './App.css';
import axios from 'axios';

const App = () => {
  const [data,setData]=useState({

    username:'',email:'',
    password:'',confirmpassword:"",
  })
  const {username,password,email,confirmPassword}=data;
  const changeHandler =e =>{
setData({...data,[e.target.name]:e.target.value});
  }
  const submitHandler= e=>{
    e.preventDefault()
    if(password!==confirmPassword){
      alert("passwords do not match");
    }
    else
     axios.post('https://loginform-2f043-default-rtdb.firebaseio.com/loginform.json',data).then(()=>alert("submitted successfully"))
    }
    return (
    <div>
      <center>
            <form onSubmit={submitHandler}>
            <div className="body">
            <h1>Sign up Form</h1>
              </div>
              
                     <h2>Enter your name:</h2><br />
                    <input type='name' name='username' placeholder='Username' value={username} onChange={changeHandler} /><br />
                   <h2> Enter your Email address:</h2><br />
                       <input type='email' name= "email" placeholder='Enter your email' value={email} onChange={changeHandler} /><br />
           <h2>Create a New password:</h2><br />
             <input type='password' name='password' placeholder='Password' value={password} onChange={changeHandler}/><br />
               <  h2> Confirm Password:</h2><br />
            <input type='password'name="confirmPassword"  placeholder='Confirm Password' value={confirmPassword} onChange={changeHandler}/><br /><br />       
               
               <input type='submit' name='submit'/>
              
          </form>
          
          </center>
          </div>
      
  )
}

export default App

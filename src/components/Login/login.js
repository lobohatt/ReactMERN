import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {history} from '../../routers/Approuter';
require('./login.css');



const Login = ()=>{

    const [userDetails,setuserDetails] = useState({
       email:'',
       password:''
    });

    const [formError,setFormError] = useState({});

    const handleChange = (e) => {
      setuserDetails({...userDetails,[e.target.name]:e.target.value})
      let err = formError;
      delete err[e.target.name]
      setFormError(err);
    };

    const handleSubmit = async(e) => {
      e.preventDefault();

      const error = {};

      if(userDetails.email === ''){
       error['email'] = 'Please Enter Email Address'
      }
      if(userDetails.password === ''){
       error['password'] = 'Please Enter your Password'   
      }

      if(!error){

      }else{
          setFormError(error);
      }

      
       const data = {
          email: userDetails.email,
          password: userDetails.password
      }

      const Data = JSON.stringify(data)


    if(Object.keys(formError).length === 0) {
      
     const res = await Axios.post(`https://mernapp-project.herokuapp.com/student/login`,Data,{
         headers:{ Accept: 'application/json',
         'Content-Type': 'application/json',}
     }) 
     
      if(res.data.success === true){
          console.log(res.data.token)
          const data = res.data.token
       localStorage.setItem('token',data)
       setuserDetails({email:'',password:''});
       history.push("/home")
      Swal.fire({
          title: 'Loggedin Successfully',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          position: 'center',
        })
      
    }
}
    };

return (

<div className="Login">
    <h1>Login</h1>
    <form method="post">
        <input type="email" name="email" placeholder="Email" required="required" onChange={handleChange} value={userDetails.email} />
        {formError.email && <p style={{color:"red"}}>{formError.email}</p>}
        <input type="password" name="password" placeholder="Password" required="required" onChange={handleChange} value={userDetails.password} />
        {formError.password && <p style={{color:"red"}}>{formError.password}</p>}
        <button type="button" class="btn btn-primary btn-block btn-large" onClick={handleSubmit}>Let me in.</button>
        <Link style={{color:"yellow"}} to="/signup">Signup</Link>
    </form>
</div>

)

};

export default Login;


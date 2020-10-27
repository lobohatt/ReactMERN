import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {history} from '../../routers/Approuter';
require('./sign.css');



const Signup = ()=>{

const [userDetails,setuserDetails] = useState({

firstname:'',
lastname:'',
email:'',
password:'',
phonenumber:'',
city:'',
country:'',
age:'',
company:'',
school:'',
hometown:'',
gender:'',
language:''

});

const onhandleChange = (e)=>{

    setuserDetails({...userDetails,[e.target.name]:e.target.value})
};

const onhandleSubmit = (e) =>{
 e.preventDefault()

 const data = userDetails;
 const Data = JSON.stringify(data);

 Axios.post(`https://mernapp-project.herokuapp.com/student/register`,Data,{
      headers:{ Accept: 'application/json',
         'Content-Type': 'application/json',}
 }).then((res)=>{
 
    if(res.data.success === true){
        localStorage.setItem('token',res.data.token)
        Swal.fire({
          title: 'Registered Successfully',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          position: 'center',
        })
        history.push('/')
    }
 }).catch((e)=>{
   console.log(e);
 })

};



return (
<div >
    <h1>Signup</h1>
    <form method="post">
    
        <input type="text" name="firstname" placeholder="firstname" required="required" onChange={onhandleChange} />
        <input type="text" name="lastname" placeholder="lastname" required="required" onChange={onhandleChange} />
        <input type="text" name="email" placeholder="email" required="required" onChange={onhandleChange}/>
        <input type="text" name="password" placeholder="password" required="required" onChange={onhandleChange} />
        <input type="text" name="phonenumber" placeholder="phonenumber: xxx-xxx-xxxx" required="required" onChange={onhandleChange} />
        <input type="text" name="city" placeholder="city" required="required" onChange={onhandleChange} />
        <input type="text" name="country" placeholder="country" required="required" onChange={onhandleChange} />
        <input type="number" name="age" placeholder="age" required="required" onChange={onhandleChange} />
        <input type="text" name="company" placeholder="company" required="required" onChange={onhandleChange} />
        <input type="text" name="school" placeholder="school" required="required" onChange={onhandleChange} />
        <input type="text" name="hometown" placeholder="hometown" required="required" onChange={onhandleChange} />
        <input type="text" name="gender" placeholder="gender" required="required" onChange={onhandleChange} />
        <input type="text" name="language" placeholder="language" required="required" />
        <button type="button" class="btn btn-primary btn-block btn-large" onClick={onhandleSubmit}>Register</button>
        <Link to="/login" style={{color:"yellow"}} >Already Registered Login</Link>
    </form>
</div>
)

};

export default Signup;


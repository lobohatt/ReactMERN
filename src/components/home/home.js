import React,{useEffect} from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import {history} from '../../routers/Approuter';
require('./home');

const Home = () => {



const handleClick = () => {

const token = localStorage.getItem('token');

 Axios.post(`https://mernapp-project.herokuapp.com/student/logout`,{},{
   headers:{Authorization: `Bearer ${token}`}
 })
 .then((res)=>{
  console.log(res.data.success)
 }).catch((e)=>{
console.log(e);
 })
 history.push('/')
 Swal.fire({
          title: 'Logout Sucessfullly',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          position: 'center',
        })
        localStorage.removeItem('token');
};

return (
<div>
<button onClick={handleClick}>Logout</button>
<Link style={{color:'lightblue',marginLeft:'40px'}} to="/profile">User Profile</Link>
</div>
)

};

export default Home;
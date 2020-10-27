import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUseraction} from '../../actions/useraction';
import Axios from 'axios';
import Swal from 'sweetalert2';



const UpdateProfile = (props)=>{

const [userDetails,setuserDetails] = useState({

firstname:'',
lastname:'',
age:'',

});

const handleChange = (e) => {

 setuserDetails({...userDetails,[e.target.name]: e.target.value})

};

const handleSubmit = (e) => {

  e.preventDefault();

  const Data = { 
    firstname: userDetails.firstname,
    lastname : userDetails.lastname,
    age: userDetails.age
    
  }

  

  const token = localStorage.getItem('token');
  console.log(token)

  Axios.post('https://mernapp-project.herokuapp.com/student/updateprofile',Data,{
    headers:{Authorization: `Bearer ${token}`}
  }).then((res)=>{
    console.log(res)
    if(res.data.success === true){
Swal.fire({
          title: 'User Updated Successfully',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          position: 'center',
        })
    }
  }).catch((err)=>{
    console.log(err)
  })
  


};







return (
<div style={{backgroundColor:"yellowgreen"}}>
    <h1>UPDATE PROFILE</h1>
    <form method="post">
       <p>Update first Name</p>
        <input type="text" name="firstname" placeholder="firstname" required="required"  onChange={handleChange}  />
        <p>Update last Name</p>
        <input type="text" name="lastname" placeholder="lastname" required="required" onChange={handleChange} />
        <p>Update Age</p>
        <input type="number" name="age" placeholder="age" required="required" onChange={handleChange}  />
        <button type="button" onClick={handleSubmit}>Update</button>

    </form>
</div>
)

};




export default UpdateProfile;


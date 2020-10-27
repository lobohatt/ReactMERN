import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUseraction} from '../../actions/useraction';
import Axios from 'axios';



const Userprofile = (props)=>{

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


useEffect(()=>{
 props.Profile();
},[])



return (
<div style={{backgroundColor:"yellowgreen"}}>
    <h1>PROFILE</h1>
    <form method="post">
    <Link to="/updateprofile" style={{backgroundColor:'tomato',marginLeft:"400px",color:'brown'}}>Update Profile</Link>
        <input type="text" name="firstname" placeholder="firstname" required="required" value={props.userDetails.firstname}  />
        <input type="text" name="lastname" placeholder="lastname" required="required" value={props.userDetails.lastname} />
        <input type="text" name="email" placeholder="email" required="required" value={props.userDetails.email} />
        <input type="text" name="phonenumber" placeholder="phonenumber: xxx-xxx-xxxx" required="required" value={props.userDetails.phonenumber}  />
        <input type="text" name="city" placeholder="city" required="required"  value={props.userDetails.city}/>
        <input type="text" name="country" placeholder="country" required="required" value={props.userDetails.country} />
        <input type="number" name="age" placeholder="age" required="required" value={props.userDetails.age} />
        <input type="text" name="company" placeholder="company" required="required"  value={props.userDetails.country}/>
        <input type="text" name="school" placeholder="school" required="required"  value={props.userDetails.school}/>
        <input type="text" name="hometown" placeholder="hometown" required="required"  value={props.userDetails.hometown}/>
        <input type="text" name="gender" placeholder="gender" required="required" value={props.userDetails.gender} />
        <input type="text" name="language" placeholder="language" required="required" value={props.userDetails.language} />
        
    </form>
</div>
)

};

const mapStateToProps  = (state) => {
  return {
    userDetails : state.Profile.details
  }
};

const mapDispatchToProps = (dispatch) => ({

  Profile : () => dispatch(getUseraction())
});



export default connect(mapStateToProps ,mapDispatchToProps)(Userprofile);


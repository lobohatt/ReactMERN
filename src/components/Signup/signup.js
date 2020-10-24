import React,{useState,useEffect} from 'react';
require('./sign.css');


const Signup = (props)=>{

return (
<div class="login">
    <h1>Signup</h1>
    <form method="post">
        <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large">Register</button>
    </form>
</div>
)

};

export default Signup;


import React from 'react';
import { Route, Redirect } from 'react-router-dom';



export const PrivateRoute = ({
  component:Component,
  token,
   ...rest
  }) => (
<Route {...rest} component={(props) => (
 token ? (
   <div>
     <Component {...props} />
   </div>
 ) : 
 (
   <Redirect to="/login" />
 )
)} />
);



export default PrivateRoute;

import Axios from 'axios';

export const Useraction = (list) => ({
  type: 'USER',
  list
});


export const getUseraction = () => {

 return (dispatch)=>{

  const token = localStorage.getItem('token');
  console.log(token);

  if(token){

  Axios.post(`https://mernapp-project.herokuapp.com/student/userprofile`,{},{headers:{
    Authorization: `Bearer ${token}`,
  }}).then((res)=>{
    console.log(res);
    dispatch(Useraction(res.data))
  }).catch((err)=>{
    console.log(err);
  })
}
}
};
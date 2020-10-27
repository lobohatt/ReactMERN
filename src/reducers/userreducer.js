
const initial = {
  details: []
}

const userDetails = (state = initial,action) => {

  switch(action.type){

    case 'USER': 
    return{
      ...state,
      details: action.list
    }
    default:
      return state;
  }

}; 

export default userDetails;
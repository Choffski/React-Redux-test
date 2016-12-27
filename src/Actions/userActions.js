import axios from 'axios'

export function getUsers() {
  return function(dispatch){

      dispatch({type: "FETCH_USERS_START"});
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) =>{
      dispatch({type: "FETCH_USERS_FULFILLED",payload: response.data})
    })
    .catch((err) =>{
      dispatch({type: "FETCH_USERS_REJECTED",payload: err})
    })

  }
}

export function fetchUser() {
  return{
    type:"FETCH_USERS_DUMMY",
    payload:{
      name:'Samuli',
      age:25
    }
  }
}


// export function getCurrentUser(){
//   return function(dispatch){
//     dispatch({'FETCH_CURRENT_USER'});
//
//   }
// }

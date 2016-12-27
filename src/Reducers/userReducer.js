
const initialState ={
  fetching:false,
  fetched:false,
  users:[],
  error:null
}

export default function reducer(state = initialState, action){

  switch (action.type) {
    case "FETCH_USERS_PENDING":{
      return {...state, fetching:true}
      break;
    }
    case "FETCH_USERS_FULFILLED":{
      return {...state, fetching:false, fetched:true, users:action.payload}
      break;
    }
    case "FETCH_USERS_DUMMY":{
      return {...state, fetching:false, fetched:true, users:action.payload}
    }
    case "FETCH_USERS_REJECTED":{
      return {...state, fetching:false, fetched:false, error:action.payload}
      break;
    }
    default:
    return state;

  }
return state;
}










// store.dispatch((dispatch) =>{
//   dispatch({type:'FETCH_USERS_START'})
//   axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((response) =>{
//       console.log(response.data);
//       if(response.data.length > 0){
//         dispatch({type:'FETCH_USERS_SUCCESS', payload:response.data});
//       }
//     })
//     .catch((err) =>{
//       dispatch({type:'FETCH_USERS_ERROR', payload:err});
//     })
// })
//
// store.dispatch({
//   type:'FETCH_USERS',
//   payload: axios.get('https://jsonplaceholder.typicode.com/users')
//
// })

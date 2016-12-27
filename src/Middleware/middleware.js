
export const logger = (store) => (next) => (action) =>{
  console.log('action happened, bro, ' + action.type);
  next(action);
}


export const error = (store) => (next) => (action) =>{
try{
  next(action);
} catch(e){
  console.log('wild error encountered: ' + e);
}
}

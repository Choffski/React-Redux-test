import { combineReducers } from 'redux'

import  userReducer  from './userReducer'
import  tweetReducer  from './tweetReducer'



const todoReducers = combineReducers({
  users: userReducer,
  tweets: tweetReducer
})

export default todoReducers;

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';


import * as userActions from '../../Actions/userActions'

import UserList from '../UserList/UserList';

class Main extends Component {

handleClick = () =>{
  this.props.dispatch(userActions.getUsers());

}

  componentWillMount(){
    this.props.dispatch(userActions.getUsers());
  }

  render() {

    const { users } = this.props;
    return (
      <div>

          {
            this.props.fetching?
            <h3>Loading...</h3>
             :
             <button onClick={this.handleClick.bind(this)} > Get some more users </button>
          }


          <UserList users={users}/>

      </div>
    );
  }
}

Main.contextTypes = {

}

function mapStateToProps(store) {
  return {
    users: store.users.users,
    fetched: store.users.fetched,
    fetching: store.users.fetching,
    error: store.users.error
   };
}



export default connect(mapStateToProps)(Main)

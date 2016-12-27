import React, { Component } from 'react';

import UserListItem from './UserListItem';

export default class UserList extends Component {

  componentWillReceiveProps()
{
  console.log(this.props);
}

  render() {
    let listItems;
    console.log('render');
    if(this.props.users){
    listItems= this.props.users.map(user => {
      console.log(user);
      return <UserListItem key={user.id} email={user.email} web={user.website} company={user.company.name} name={user.name}/>
    })
    }
      return (
      <div className="UserList">
        {listItems}
      </div>
    );
  }
}

UserList.contextTypes = {

}

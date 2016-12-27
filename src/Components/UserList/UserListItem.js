import React, { Component } from 'react';


export default class UserListItem extends Component {

  render() {

    const { user } = this.props;
    return (
      <div className="UserListItem">
        <div className="upperCard">
          <h3>{this.props.name}</h3>
        </div>
        <div className="middleCard">
          <p> {this.props.company}</p>
        </div>
        <div className="lowerCard">
          <p> Email: {this.props.email}</p>
          <p> Website: {this.props.web}</p>
        </div>

      </div>
    );
  }
}

UserListItem.contextTypes = {

}

import React, { Component } from 'react'

export class UserDetail extends Component {
  render() {
    const {user} = this.props;
      return(
        <div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
      )
  }
}

export default UserDetail

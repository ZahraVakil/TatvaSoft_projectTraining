import React, { Component } from 'react'

export class UserList extends Component {
  render() {
    const users=[
        {id: 1, name: 'Zahra'},
        {id: 2, name: 'Narjis'},
        {id: 3, name: 'Zaki'},
     ];
    return (
      <div>
        <table>
           <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
           </thead>
           <tbody>
        
                {users.map((user)=> (
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    </tr>
                ))}
           </tbody>
        </table>
      </div>
    )
  }
}

export default UserList

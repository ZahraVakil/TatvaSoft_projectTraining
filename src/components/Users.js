import React, { Component } from 'react'
import axios from 'axios'
import UserDetail from './UserDetail'

export class Users extends Component {
   //Day 11
    constructor(props) {
      super(props)
    
      this.state = {
         users: [],
      }
    }
    

    componentDidMount(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                console.log(response)
                this.setState({users: response.data});
              })
            
    }

  render() {
    const {users} = this.state;
    return(
        <>
        <div>List of Users</div>
        <div>
        {
            users.map((user) =><UserDetail key={user.id + user.username} user={user}/>)
        }
        </div>
        </>
    )

  }
}

export default Users

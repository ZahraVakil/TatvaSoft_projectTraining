import React from 'react'
import Title from '../components/Title';
import UserList from '../components/UserList';
import HOC from '../components/HOC';


const users=[
    {id: 1, name: 'Zahra'},
    {id: 2, name: 'Narjis'},
    {id: 3, name: 'Zaki'},
 ];

 const UserListWithHOC = HOC (UserList, users);
class Home extends React.Component{

    //Day 5
//     constructor(props) {
//       super(props)
    
//       this.state = {

//         title: 'My Website',
//         description:'Welcome to our store',
//         }

//   }
          render() {
            return(
                <div>
                    <h1>User List</h1>
                    <UserListWithHOC/>
                </div>

            )

//         const {title, description} = this.state;
//         return (
//             <div>
//                 <Title
//                 title= {title}
//                 description= {description}
//                />
//             </div>
//         )
 }
}

export default Home;
import React from 'react'
import Title from './Title'

function List() {
    //Day 6
       const titles= [
        {
            id:1,
            title: 'Home',
            description:'Welcome to my Store'
        },
        {
            id:2,
            title: 'About',
            description:'Thanks for visiting'
        }
    ]
     const titleList = titles.map(title=>
     <Title
        key={title.title}
        title={title}
     />)
  return (
    <div>
      {titleList}     
    </div>
  )
}

export default List

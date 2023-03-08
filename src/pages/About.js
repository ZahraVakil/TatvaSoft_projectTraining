import React from 'react'
import Title from '../components/Title'

const About = () =>{

    const title= 'About';
    const description=' thanks for visiting'

  return (
    <div>
     <Title 
      title= {title}
     description= {description}
     />
    </div>
  )
}

export default About

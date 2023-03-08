import React from 'react';
import './mystyle.css'


const Title =({title}) =>  {

    return(
        <div>
            <h1 className='title'>{title.title}</h1>
            <h3 className='desc'>{title.description}</h3>
           
        </div>
    )
}


export default React.memo(Title);
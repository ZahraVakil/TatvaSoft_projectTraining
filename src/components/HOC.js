import React from 'react'

const HOC = (HocComponent,data)=>{
    return class extends React.Component{
        render(){
            return <HocComponent data={data}/>;
        }
    }
}
export default HOC

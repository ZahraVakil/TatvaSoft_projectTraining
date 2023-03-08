import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           number: 0,
        }
      }

      increment(){
            this.setState({
                number: this.state.number+1
            } , ()=>{
                console.log('Callback value', this.state.count)  //second argument of setstate method
            } )

      }
  
    render() {
    return (
      <div>
        Number - {this.state.number}
        <button onClick={()=> this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter

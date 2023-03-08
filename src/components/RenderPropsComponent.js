import React, { Component } from 'react'

export class RenderPropsComponent extends Component {
    //Day 9
  render() {
    return (
      <>
      {this.props.render()}
      </>
    )
  }
}

export default RenderPropsComponent

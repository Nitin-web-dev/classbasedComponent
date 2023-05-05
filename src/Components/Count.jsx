import React, { Component } from 'react'

export default class Count extends Component {

    state = {
        count : 0,
    }

    addOne = () => {
        this.setState({ count:this.state.count + 1 })
    }

    minusOne = () => {
        this.setState({ count:this.state.count - 1 })
    }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <br />
        <button onClick={this.addOne}>Add One</button>
        <button onClick={this.minusOne}>Minus One</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
import TechList from './TechList'

export default class Main extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <main>
        <div>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={this.props.techs}  />
          </ul>
        </div>
      </main>
    )
  }
}

import React, { Component } from 'react'

export default class TechList extends Component {
    constructor(props) {
        super(props)
      }


  render() {
    const techs = this.props.techs
    const techList = techs.map((tech) => <li key={tech}>{tech}</li> )
    return techList
  }
}

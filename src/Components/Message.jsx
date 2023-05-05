import React, { Component } from "react";

export default class Message extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

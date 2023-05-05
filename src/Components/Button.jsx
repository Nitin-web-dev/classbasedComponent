import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { style, onClick, text } = this.props;
    return (
      <button style={style} onClick={onClick}>
        {text}
      </button>
    );
  }
}

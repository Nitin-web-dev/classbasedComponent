import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

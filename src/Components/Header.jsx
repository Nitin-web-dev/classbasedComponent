import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  greetPeopls = () => {
    alert("Welcome to 30 Days Of React Challenge, 2023");
  };

  render() {
    const { welcome, title, subtitle, author, date } = this.props.data;
    return (
      <header>
        <div>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {author.firstName} {author.lastName}
          </p>
          <p>
            <small> {date} </small>
          </p>
          <button onClick={this.greetPeopls}>Greet</button>
        </div>
      </header>
    );
  }
}

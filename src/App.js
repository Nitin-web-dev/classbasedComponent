import React, { Component } from "react";
import "./App.css";
// import Count from './Components/Count'
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default class App extends Component {
  state = {
    loggedIn: false,
    techs: ["HTML", "CSS", "JS"],
    message: "Click show time or Greet people to change me",
  };

  handleLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    });
  };

  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${date}, ${year}`;
  };

  handleTime = () => {
    let message = this.showDate(new Date());
    this.setState({ message: message });
  };

  greetPeople = () => {
    let message = "Welcome to 30 Days Of React Challenge, 2020";
    this.setState({ message: message });
  };

  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Ravi",
        lastName: "Kumar",
      },
      date: "May 2, 2023",
    };

    const techs = ["HTML", "CSS", "JavaScript"];

    return (
      <div className="App">
        <Header data={data} />
        <Main
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          loggedIn={this.state.loggedIn}
          handleLogin={this.handleLogin}
          message={this.state.message}
        />
        <Footer date={new Date()} />
        {/* <Count/> */}
      </div>
    );
  }
}

import React, { Component } from "react";
import Button from "./Button";
import Login from "./Login";
import Message from "./Message";
import TechList from "./TechList";
import Welcome from "./Welcome";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const buttonStyles = {
      backgroundColor: "#61dbfb",
      padding: 10,
      border: "none",
      borderRadius: 5,
      margin: "3px auto",
      cursor: "pointer",
      fontSize: 22,
      color: "white",
    };

    const { techs, greetPeople, handleTime, loggedIn, handleLogin, message } =
      this.props;

    const status = loggedIn ? <Welcome /> : <Login />;
    return (
      <main>
        <div>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>

          {techs.length === 3 && (
            <p>You have all the prerequisite courses to get started React</p>
          )}
          <div>
            <Button
              text="Show Time"
              onClick={handleTime}
              style={buttonStyles}
            />{" "}
            <Button
              text="Greet People"
              onClick={greetPeople}
              style={buttonStyles}
            />
            {!loggedIn && (
              <p>
                Please login to access more information about 30 Days Of React
                challenge
              </p>
            )}
          </div>

          <div style={{ margin: 30 }}>
            <Button
              text={loggedIn ? "Logout" : "Login"}
              style={buttonStyles}
              onClick={handleLogin}
            />
            <br />
            {status}
          </div>
          <Message message={message} />
        </div>
      </main>
    );
  }
}

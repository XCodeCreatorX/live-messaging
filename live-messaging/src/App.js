import React, { Component } from "react";
import "./App.css";
import { subscribeToTimer } from "./api";

class App extends Component {
  state = {
    msg: "no message yet",
  };

  componentDidMount() {
    subscribeToTimer((err, timestamp) =>
      this.setState({
        timestamp,
      })
    );
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is a message: {this.state.msg}
        </p>
      </div>
    );
  }
}

export default App;

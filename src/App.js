import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Ex05_4_ScrollToBottom from "./Ex05_4_ScrollToBottom";

class App extends Component {
  render() {
    return (
      <div>
        <Ex05_4_ScrollToBottom ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;

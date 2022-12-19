import React from "react";
import axios from "axios";
import MainPage from "./components/mainPage"
import "./styles.css";

export default class App extends React.Component {

  render() {
    return (
      <div>
        <MainPage />
      </div>
    );
  }
}
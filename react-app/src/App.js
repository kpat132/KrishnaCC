import React from "react";
import axios from "axios";
import MainPage from "./components/mainPage"
import {Header} from "./components/header"
import "./styles.scss";

export default class App extends React.Component {

  render() {
    return (
      <div className = "LoginPage">
        <Header />
        <MainPage />
      </div>
    );
  }
}
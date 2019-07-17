import React, { Component } from 'react';
import LoginComponent  from "./loginPage/loginComponent.jsx";

class HomePage extends Component {
  render() {
    return (
      <div>
        Home page2
        <LoginComponent/>
      </div>
    )
  }
}

export default HomePage;
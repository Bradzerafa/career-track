import React from "react";
import { Link } from "react-router-dom";

let location = window.location.pathname;

class NavBar extends React.Component {
  state = { loc: location };

  urlLocation = () => {
    console.log(window.location.pathname);
    this.setState(() => {
      return { loc: window.location.pathname };
    });
  };
  // Conditional routing needed to separate links based on if the user is in the front or backend of the application

  render() {
    if (this.state.loc.includes("app")) {
      return (
        <nav>
          <Link onClick={this.urlLocation} to="/">
            Home
          </Link>
          <Link onClick={this.urlLocation} to="/app/userProfile">
            My Profile
          </Link>
          <Link onClick={this.urlLocation} to="/app/userFinance">
            Financial
          </Link>
        </nav>
      );
    } else {
      return (
        <nav>
          <Link onClick={this.urlLocation} to="/">
            Home
          </Link>
          <Link onClick={this.urlLocation} to="/about">
            About
          </Link>
          <Link onClick={this.urlLocation} to="/contact">
            Contact
          </Link>
          <Link onClick={this.urlLocation} to="/auth">
            LogIn/SignUp
          </Link>
          <Link onClick={this.urlLocation} to="/app/userProfile">
            My Profile
          </Link>
        </nav>
      );
    }
  }
}

export default NavBar;

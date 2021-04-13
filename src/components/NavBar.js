import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  // Conditional routing needed to separate links based on if the user is in the front or backend of the application
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/auth">LogIn/SignUp</Link>
        <Link to="userProfile">My Profile</Link>
        <Link to="userFinance">Financial</Link>
      </nav>
    );
  }
}

export default NavBar;

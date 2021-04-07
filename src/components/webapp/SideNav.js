import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserFinance from "../finance/UserFinance";

class SideNav extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="userProfile">My Profile</Link>
          <Link to="userFinance">Financial</Link>
          <Route path="/userProfile" exact component={UserProfile} />
          <Route path="/userFinance" exact component={UserFinance} />
        </BrowserRouter>
      </div>
    );
  }
}

export default SideNav;

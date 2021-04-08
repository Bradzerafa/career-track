import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserFinance from "../finance/UserFinance";
import HomePage from "../website/HomePage";

class SideNav extends React.Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <Link to="userProfile">My Profile</Link>
            <Link to="userFinance">Financial</Link>

            <Route path="/" exact component={HomePage} />
            <Route
              path="/userProfile"
              exact
              component={() => (
                <UserProfile
                  name={this.props.name}
                  country={this.props.country}
                  profImg={this.props.profImg}
                  currJob={this.props.currJob}
                  currSalary={this.props.currSalary}
                  currGoal={this.props.currGoal}
                />
              )}
            />
            <Route
              path="/userFinance"
              exact
              component={() => (
                <UserFinance
                  currSalary={this.props.currSalary}
                  currGoal={this.props.currGoal}
                />
              )}
            />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default SideNav;

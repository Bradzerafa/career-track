import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UserProfile from "./UserProfile";
import UserFinance from "../finance/UserFinance";
import HomePage from "../website/HomePage";
import NavBar from "../NavBar";
import About from "../website/About";
import Contact from "../website/Contact";
import AuthForm from "../auth/AuthForm";

class NavRoute extends React.Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <NavBar />

            <Route path="/" exact component={HomePage} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/auth" exact component={AuthForm} />
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

export default NavRoute;

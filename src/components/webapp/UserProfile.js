import React, { Component } from "react";
import faker from "faker";

class UserProfile extends React.Component {
  state = {
    name: "",
    country: "",
    currJob: "",
    currSalary: "",
    currGoal: "",
  };

  componentDidMount() {
    this.setState({
      name: faker.name.findName(),
      country: faker.address.country(),
      currJob: faker.name.jobTitle(),
      currSalary: "60,000",
      currGoal: faker.random.float(),
    });
    console.log("Hello");
  }

  render() {
    return (
      <div>
        <h1>Welcome to Your Profile</h1>
        <img src={faker.internet.avatar()} alt="Profile Picture of Person" />
        <p>Name: {this.state.name}</p>
        <p>Country: {this.state.country}</p>
        <p>Current Job: {this.state.currJob}</p>
        <p>Current Salary: ${this.state.currSalary} AUD</p>
        <p>Current Savings Goal: ${this.state.currGoal} AUD</p>
      </div>
    );
  }
}

export default UserProfile;

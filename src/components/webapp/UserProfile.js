import React from "react";

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <h1>This is your Profile</h1>
        <img src={this.props.profImg} alt="User Avatar" />
        <p>Name: {this.props.name}</p>
        <p>Country: {this.props.country}</p>
        <p>Current Job: {this.props.currJob}</p>
        <p>Current Salary: ${this.props.currSalary} AUD</p>
        <p>Current Savings Goal: ${this.props.currGoal} AUD</p>
      </div>
    );
  }
}

export default UserProfile;

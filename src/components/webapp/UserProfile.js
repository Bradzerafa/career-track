import React from "react";

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <h1>This is your Profile</h1>
        <img src={this.props.profImg} alt="User Avatar" />
        <input className="invisible" type="text" />
        <p>Name: {this.props.name}</p>
        <input className="invisible" type="text" />
        <p>Country: {this.props.country}</p>
        <input className="invisible" type="text" />
        <p>Current Job: {this.props.currJob}</p>
        <input className="invisible" type="number" />
        <p>Current Salary: ${this.props.currSalary} AUD</p>
        <input className="invisible" type="number" />
        <p>Current Savings Goal: ${this.props.currGoal} AUD</p>

        <button className="visible">Edit Info</button>
        <button className="invisible">Update Info</button>
      </div>
    );
  }
}

export default UserProfile;

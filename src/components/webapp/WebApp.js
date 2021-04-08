import React from "react";
import SideNav from "./SideNav";
import faker from "faker";

class WebApp extends React.Component {
  state = {
    name: "",
    country: "",
    profImg: "",
    currJob: "",
    currSalary: 0,
    currGoal: 0,
  };

  componentDidMount() {
    this.setState({
      name: faker.name.findName(),
      country: faker.address.country(),
      profImg: faker.internet.avatar(),
      currJob: faker.name.jobTitle(),
      currSalary: 60000,
      currGoal: faker.datatype.float(),
    });
  }

  render() {
    return (
      <div>
        <div>
          <SideNav
            name={this.state.name}
            country={this.state.country}
            profImg={this.state.profImg}
            currJob={this.state.currJob}
            currSalary={this.state.currSalary}
            currGoal={this.state.currGoal}
          />
        </div>
      </div>
    );
  }
}

export default WebApp;

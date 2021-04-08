import React from "react";

class UserFinance extends React.Component {
  state = { currExpense: [], monthlyLeftOver: 0 };

  //Adds a reference point for the expense input
  expenseInput = React.createRef();

  //Adds new expenses to the current expenses list.
  newExpense = (e) => {
    console.log(e);
    this.setState({ currExpense: [...this.state.currExpense, e] });
    console.log("This is currExpense state " + this.state.currExpense);
  };

  render() {
    return (
      <div>
        <h1>This is your current Finances</h1>
        <p>Current Income: ${this.props.currSalary} AUD</p>
        <p>Current Expense List:</p>
        <ul>
          {this.state.currExpense.map((expense) => (
            <li key={this.state.currExpense.indexOf(expense)}>{expense}</li>
          ))}
        </ul>
        <p>Money Left at the end of the Month: </p>
        <p>Savings Goal: ${this.props.currGoal} AUD</p>
        <label htmlFor="new-expense">Add New Expense: </label>
        <input ref={this.expenseInput} id="new-expense" type="text" />
        <button
          onClick={() => this.newExpense(this.expenseInput.current.value)}
        >
          Add Expense
        </button>
      </div>
    );
  }
}

export default UserFinance;

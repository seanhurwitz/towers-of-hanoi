import React, { Component } from "react";
import classes from "./FloorSelection.module.css";

class FloorSelection extends Component {
  state = {
    floorSelection: 3,
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.setFloors(this.state.floorSelection);
  };
  changeHandler = (event) => {
    this.setState({ floorSelection: parseInt(event.target.value) });
  };
  render() {
    return (
      <div className={classes.FloorSelection}>
        <h1>Welcome to Towers of Hanoi</h1>
        <h3>Please select number of floors</h3>
        <form onSubmit={this.submitHandler}>
          <input
            type="number"
            min="3"
            max="20"
            value={this.state.floorSelection}
            onChange={this.changeHandler}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default FloorSelection;

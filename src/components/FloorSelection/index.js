import React, { Component, Fragment } from "react";
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
    this.props.setFloors(parseInt(event.target.value), true);
  };
  render() {
    const display = !this.props.won ? (
      <Fragment>
        {" "}
        <h1>Welcome to Towers of Hanoi</h1>
        <p>
          The goal of the puzzle is to move all the disks from the leftmost peg
          to the rightmost peg, adhering to the following rules:
        </p>
        <ol>
          <li> Move only one disk at a time.</li>
          <li>A larger disk may not be placed on top of a smaller disk.</li>
          <li>All disks, except the one being moved, must be on a peg.</li>
        </ol>
        <p>
          Click on the green base to pop the uppermost floor and select another
          base to drop it down.
        </p>
      </Fragment>
    ) : (
      <Fragment>
        {" "}
        <h1>CONGRATULATIONS!</h1>{" "}
        <h1>You have won in {this.props.moves} moves!</h1>
        {this.props.moves === this.props.optimalMoves && (
          <h2
            style={{ backgroundColor: "green", color: "white", height: "50px" }}
          >
            YOU HAVE SOLVED THE PROBLEM OPTIMALLY!
          </h2>
        )}
        <h3>Play Again?</h3>
      </Fragment>
    );
    return (
      <div className={classes.FloorSelection}>
        {display}
        <h3>Please select number of floors</h3>
        <form onSubmit={this.submitHandler}>
          <input
            type="number"
            min="2"
            max="30"
            value={this.state.floorSelection}
            onChange={this.changeHandler}
          />
          <input type="submit" value="LET'S GO!" />
        </form>
      </div>
    );
  }
}

export default FloorSelection;

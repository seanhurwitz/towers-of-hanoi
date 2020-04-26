import React, { Component } from "react";
import classes from "./GameContainer.module.css";
import Tower from "../../components/Tower";

class GameContainer extends Component {
  render() {
    return (
      <div className={classes.GameContainer}>
        <div
          className={classes.ActiveContainer}
          style={{
            width: `calc(100%*${
              this.props.activeFloor / this.props.numFloors
            }/3)`,
            height: `calc(60%/${this.props.numFloors})`,
          }}
        >
          {this.props.activeFloor}
        </div>
        <div className={classes.Towers}>
          {this.props.bars.map((bar, idx) => (
            <Tower
              bar={bar}
              numFloors={this.props.numFloors}
              num={idx + 1}
              key={idx + 1}
              setActiveFloor={this.props.setActiveFloor}
              activeFloor={this.props.activeFloor}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GameContainer;

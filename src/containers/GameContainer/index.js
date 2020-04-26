import React, { Component } from "react";
import classes from "./GameContainer.module.css";
import Tower from "../../components/Tower";

class GameContainer extends Component {
  render() {
    return (
      <div className={classes.GameContainer}>
        GameContainer
        <div className={classes.ActiveContainer}>ActiveContainer</div>
        <div className={classes.Towers}>
          <Tower bar={this.props.bar1} numFloors={this.props.numFloors} />
          <Tower bar={this.props.bar2} numFloors={this.props.numFloors} />
          <Tower bar={this.props.bar3} numFloors={this.props.numFloors} />
        </div>
      </div>
    );
  }
}

export default GameContainer;

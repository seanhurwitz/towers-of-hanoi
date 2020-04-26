import React, { Component, Fragment } from "react";
import { Header } from "./components/UI";
import GameContainer from "./containers/GameContainer";
import "./App.css";

class App extends Component {
  state = {
    numFloors: 3,
    bar1: [1, 2, 3],
    bar2: [],
    bar3: [],
    activeBar: null,
    moves: 0,
  };
  render() {
    return (
      <Fragment>
        <Header moves={this.state.moves} />
        <GameContainer
          numFloors={this.state.numFloors}
          bar1={this.state.bar1}
          bar2={this.state.bar2}
          bar3={this.state.bar3}
          activeBar={this.state.activeBar}
        />
      </Fragment>
    );
  }
}

export default App;

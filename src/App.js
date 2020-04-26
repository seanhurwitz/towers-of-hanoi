import React, { Component, Fragment } from "react";
import { Header, Modal } from "./components/UI";
import FloorSelection from "./components/FloorSelection";
import GameContainer from "./containers/GameContainer";
import "./App.css";

class App extends Component {
  state = {
    numFloors: 3,
    bars: [[3, 2, 1], [], []],
    activeFloor: null,
    moves: 0,
    showModal: true,
  };
  setFloorsHandler = (numFloors) => {
    console.log(numFloors);
    const bar1 = [...Array(numFloors)].map((_, idx) => numFloors - idx);
    console.log(bar1);
    this.setState({
      numFloors,
      bar1,
      showModal: false,
    });
  };
  setActiveFloorHandler = (towerNumber) => {
    const bars = this.state.bars;
    const activeFloor = bars[towerNumber - 1].pop();
    console.log(bars);
    this.setState({ bars, activeFloor });
  };
  render() {
    return (
      <Fragment>
        <Modal show={false}>
          <FloorSelection setFloors={this.setFloorsHandler} />
        </Modal>
        <Header moves={this.state.moves} />
        <GameContainer
          numFloors={this.state.numFloors}
          bars={this.state.bars}
          activeFloor={this.state.activeFloor}
          setActiveFloor={this.setActiveFloorHandler}
        />
      </Fragment>
    );
  }
}

export default App;

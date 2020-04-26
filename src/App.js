import React, { Component, Fragment } from "react";
import { Header, Modal } from "./components/UI";
import FloorSelection from "./components/FloorSelection";
import GameContainer from "./containers/GameContainer";
import "./App.css";

class App extends Component {
  state = {
    numFloors: 3,
    optimalMoves: 7,
    bars: [[3, 2, 1], [], []],
    activeFloor: null,
    moves: 0,
    showModal: true,
    popTower: null,
    won: false,
  };
  setFloorsHandler = (numFloors, showModal = false) => {
    if (numFloors) {
      const bars = [
        [...Array(numFloors)].map((_, idx) => numFloors - idx),
        [],
        [],
      ];
      this.resetHandler();
      this.setState({
        numFloors,
        bars,
        showModal,
        optimalMoves: Math.pow(2, numFloors) - 1,
      });
    }
  };
  popActiveFloor = (popTower) => {
    const bars = [...this.state.bars];
    const activeFloor = bars[popTower - 1].pop();
    this.setState({ bars, activeFloor, popTower });
  };
  setActiveFloor = (towerNumber) => {
    const oldBars = JSON.parse(JSON.stringify(this.state.bars));
    const bars = JSON.parse(JSON.stringify(this.state.bars));
    oldBars[this.state.popTower - 1].push(this.state.activeFloor);
    bars[towerNumber - 1].push(this.state.activeFloor);
    const moves =
      JSON.stringify(oldBars) !== JSON.stringify(bars)
        ? this.state.moves + 1
        : this.state.moves;
    const won = bars[2].length === this.state.numFloors;
    const showModal = won;
    this.setState({
      bars,
      activeFloor: null,
      moves,
      popTower: null,
      won,
      showModal,
    });
  };
  resetHandler = () => {
    this.setState({
      numFloors: 3,
      optimalMoves: 7,
      bars: [[3, 2, 1], [], []],
      activeFloor: null,
      moves: 0,
      showModal: true,
      popTower: null,
      won: false,
    });
  };
  render() {
    return (
      <Fragment>
        <Modal show={this.state.showModal}>
          <FloorSelection
            setFloors={this.setFloorsHandler}
            won={this.state.won}
            moves={this.state.moves}
            optimalMoves={this.state.optimalMoves}
          />
        </Modal>
        <Header
          reset={this.resetHandler}
          moves={this.state.moves}
          optimalMoves={this.state.optimalMoves}
        />
        <GameContainer
          numFloors={this.state.numFloors}
          bars={this.state.bars}
          activeFloor={this.state.activeFloor}
          setActiveFloor={
            !this.state.activeFloor ? this.popActiveFloor : this.setActiveFloor
          }
        />
      </Fragment>
    );
  }
}

export default App;

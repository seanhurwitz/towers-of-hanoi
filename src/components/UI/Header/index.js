import React from "react";
import Button from "../Button";
import classes from "./Header.module.css";

const header = (props) => {
  return (
    <div className={classes.Header}>
      <h1>
        MOVES: {props.moves} / {props.optimalMoves.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} (optimal)
      </h1>
      <Button clicked={props.reset}>RESET</Button>
    </div>
  );
};

export default header;

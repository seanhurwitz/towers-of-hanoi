import React from "react";
import Button from "../Button";
import classes from "./Header.module.css";

const header = (props) => {
  return (
    <div className={classes.Header}>
      <h1>MOVES: {props.moves}</h1>
    </div>
  );
};

export default header;

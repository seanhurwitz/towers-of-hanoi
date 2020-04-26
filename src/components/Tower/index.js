import React from "react";
import classes from "./Tower.module.css";

const tower = (props) => {
  console.log(props.bar.length);
  return (
    <div className={classes.Tower}>
      <div className={classes.Column}></div>
      <div className={classes.Floors}>
        {" "}
        {props.bar.map((floor) => (
          <div
            key={floor}
            className={classes.Floor}
            style={{
              width: `calc(100%*${floor / props.numFloors})`,
              height: `calc(70%/${props.numFloors})`,
            }}
          >
            FLOOR {floor}
          </div>
        ))}
      </div>
    </div>
  );
};

export default tower;

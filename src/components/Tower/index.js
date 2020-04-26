import React from "react";
import Button from "../UI/Button";
import classes from "./Tower.module.css";

const tower = (props) => {
  console.log(props.bar.length);
  return (
    <div className={classes.TowerContainer}>
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
              {floor}
            </div>
          ))}
        </div>
      </div>
      <Button
        clicked={() => props.setActiveFloor(props.num)}
        disabled={props.bar.length === 0}
      />
    </div>
  );
};

export default tower;

import React from "react";
import Button from "../UI/Button";
import classes from "./Tower.module.css";

const tower = (props) => {
  return (
    <div className={classes.TowerContainer}>
      <div className={classes.Tower}>
        <div className={classes.Column}></div>
        <div className={classes.Floors}>
          {" "}
          {props.bar.map((floor, idx) => (
            <div
              key={floor}
              className={
                idx === props.bar.length - 1 && !props.activeFloor
                  ? classes.MoveableFloor
                  : classes.Floor
              }
              onClick={
                idx === props.bar.length - 1 &&
                !props.activeFloor &&
                (() => props.setActiveFloor(props.num))
              }
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
        disabled={
          !props.activeFloor
            ? props.bar.length === 0
            : props.bar.length !== 0 &&
              props.bar[props.bar.length - 1] < props.activeFloor
        }
      />
    </div>
  );
};

export default tower;

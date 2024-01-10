import React from "react";
import "../styles/button.css";

export default function ButtonOp({ value, changeTodoOp }) {
  return (
    <button className="btn" onClick={() => changeTodoOp(value)}>
      {value}
    </button>
  );
}

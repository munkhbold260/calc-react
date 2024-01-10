import { useState } from "react";
import Button from "./components/Button";
import ButtonOp from "./components/ButtonOp";
import Screen from "./components/Screen";
import "./styles/global.css";
import { numberButtons, operatorButtons } from "./utils/constants";

export default function App() {
  const [currentScreen, setcurrentScreen] = useState("");
  const [prevScreen, setPrevScreen] = useState("");
  const [todoOp, setTodoOp] = useState("");

  function changeTodoOp(val) {
    setTodoOp(val);
    setPrevScreen(currentScreen);
    setcurrentScreen("");
  }
  function equalHandler() {
    if (todoOp == "+") {
      const result = Number(prevScreen) + Number(currentScreen) + "";
      setcurrentScreen(result);
    } else if (todoOp == "-") {
      const result = Number(prevScreen) - Number(currentScreen) + "";
      setcurrentScreen(result);
    } else if (todoOp == "*") {
      const result = Number(prevScreen) * Number(currentScreen) + "";
      setcurrentScreen(result);
    } else if (todoOp == "/") {
      const result = Number(prevScreen) / Number(currentScreen) + "";
      setcurrentScreen(result);
    } else if (todoOp == "AC") {
      setcurrentScreen("");
    }
  }

  function changeScreenVal(val) {
    setcurrentScreen(currentScreen + val);
  }

  return (
    <div className="mainCalc">
      <Screen value={currentScreen} />
      <div className="buttons">
        <div className="numbers">
          {numberButtons.map((val, index) => {
            return (
              <Button
                key={index}
                value={val}
                changeScreenVal={changeScreenVal}
              />
            );
          })}
        </div>
        <div className="operators">
          {operatorButtons.map((val, index) => {
            return (
              <ButtonOp key={index} value={val} changeTodoOp={changeTodoOp} />
            );
          })}
        </div>
        <div>
          <button className="btn" onClick={equalHandler}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

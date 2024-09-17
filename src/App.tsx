import React from "react";
import "./App.css";
import Game from "./Game";

const TOTAL_BOXES = 12;

function App() {
  return <Game total={TOTAL_BOXES} />;
}

export default App;

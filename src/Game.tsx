import React from "react";
import { FC } from "react";

interface GameProps {
  total: number;
}

const Game: FC<GameProps> = ({ total }) => {
  return <div>{total}</div>;
};
export default Game;

import { FC } from "react";
import { getRandomColors } from "./utils";

interface GameProps {
  total: number;
}

const Game: FC<GameProps> = ({ total }) => {
  const colors = getRandomColors(total / 2);
  return <div>{colors.toString()}</div>;
};
export default Game;

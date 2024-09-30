import { FC } from "react";

interface GameOverProps {
  roundCount: number;
  onClick: () => void;
}

const GameOver: FC<GameOverProps> = ({ onClick, roundCount }) => {
  return (
    <>
      <h3>Game was over in {roundCount} rounds</h3>
      <button onClick={onClick}>Reset</button>
    </>
  );
};
export default GameOver;

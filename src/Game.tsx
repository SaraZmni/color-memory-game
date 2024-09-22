import { FC, useMemo } from "react";
import _ from "lodash";

import { getRandomColors } from "./utils";
import Box from "./Box";

interface GameProps {
  total: number;
}

const Game: FC<GameProps> = ({ total }) => {
  const boxes = useMemo(() => {
    const colors = getRandomColors(total / 2);
    //We create array with 2 values of colors
    const pairedColors = _.shuffle([...colors, ...colors]);
    return pairedColors.map((color, id) => {
      return { id, bgColor: color };
    });
  }, [total]);
  return (
    <div className="container">
      <div className="boxes">
        {boxes.map((box) => (
          <Box key={box.id} {...box} />
        ))}
      </div>
    </div>
  );
};
export default Game;

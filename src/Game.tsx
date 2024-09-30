import { FC, useMemo, useState } from "react";
import _ from "lodash";

import { getRandomColors } from "./utils";
import GameOver from "./GameOver";
import Box from "./Box";

interface GameProps {
  total: number;
}

const Game: FC<GameProps> = ({ total }) => {
  const [activeColors, setActiveColors] = useState<string[]>([]);
  const [revealedColors, setRevealedColors] = useState(new Set<string>());
  const [roundCount, setRoundCount] = useState(0);

  const boxes = useMemo(() => {
    const colors = getRandomColors(total / 2);
    //We create array with 2 values of colors
    const pairedColors = _.shuffle([...colors, ...colors]);
    return pairedColors.map((color, id) => {
      return { id, bgColor: color };
    });
  }, [total]);

  const handleClick = (currentSelectorColor: string) => {
    if (activeColors.length === 0) {
      setActiveColors([currentSelectorColor]);
      return;
    }
    if (activeColors[0] === currentSelectorColor) {
      setRevealedColors((prev) => new Set(prev.add(currentSelectorColor)));
      setActiveColors([]);
    } else {
      setTimeout(() => {
        setActiveColors([]);
      }, 400);
    }

    setRoundCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setActiveColors([]);
    setRevealedColors(new Set());
    setRoundCount(0);
  };
  return (
    <div className="container">
      {revealedColors.size === total / 2 ? (
        <GameOver roundCount={roundCount} onClick={handleReset} />
      ) : (
        <div className="boxes">
          {boxes.map((box) => (
            <Box
              key={box.id}
              onClick={handleClick}
              revealedColors={revealedColors}
              activeColors={activeColors}
              {...box}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Game;

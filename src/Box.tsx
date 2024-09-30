import { FC, useState, useEffect } from "react";

interface BoxProps {
  bgColor: string;
  onClick: (bgColor: string) => void;
  revealedColors: Set<string>;
  activeColors: string[];
}
const DEFAULT_BG_COLOR = "#fff";

const Box: FC<BoxProps> = ({
  bgColor,
  onClick,
  revealedColors,
  activeColors,
}) => {
  const isRevealed = revealedColors.has(bgColor);
  const [backgroundColor, setBackgroundColor] = useState(
    isRevealed ? bgColor : DEFAULT_BG_COLOR
  );

  const handleClick = () => {
    if (backgroundColor !== DEFAULT_BG_COLOR) {
      return;
    }
    setBackgroundColor(bgColor);
    onClick(bgColor);
  };

  useEffect(() => {
    if (!isRevealed && activeColors.length === 0) {
      setBackgroundColor(DEFAULT_BG_COLOR);
    }
  }, [isRevealed, activeColors]);
  return (
    <div
      className="box"
      onClick={handleClick}
      style={{
        backgroundColor,
      }}
    />
  );
};
export default Box;

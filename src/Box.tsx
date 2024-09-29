import { FC, useState } from "react";

interface BoxProps {
  bgColor: string;
  onClick: (bgColor: string) => void;
}
const DEFAULT_BG_COLOR = "#fff";

const Box: FC<BoxProps> = ({ bgColor, onClick }) => {
  const [backgroundColor, setBackgroundColor] = useState(DEFAULT_BG_COLOR);

  const handleClick = () => {
    setBackgroundColor(bgColor);
    onClick(bgColor);
  };
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

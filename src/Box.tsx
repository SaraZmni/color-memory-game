import { FC } from "react";

interface BoxProps {
  bgColor: string;
}

const Box: FC<BoxProps> = ({ bgColor }) => {
  return (
    <div
      className="box"
      style={{
        backgroundColor: bgColor,
      }}
    ></div>
  );
};
export default Box;

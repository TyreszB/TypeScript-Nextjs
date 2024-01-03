import React, { FC, ReactNode } from "react";

interface GridProps {
  children: ReactNode;
}

const Grid: FC<GridProps> = ({ children }) => {
  return <div className="root-grid">{children}</div>;
};

export default Grid;

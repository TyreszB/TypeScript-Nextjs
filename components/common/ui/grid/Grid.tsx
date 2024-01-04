import React, { FC, ReactNode } from "react";
import s from "./Grid.module.css";

interface GridProps {
  children: ReactNode;
}

const Grid: FC<GridProps> = ({ children }) => {
  return <div className={s.root}>{children}</div>;
};

export default Grid;

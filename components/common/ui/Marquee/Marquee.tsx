import React, { FC, ReactNode } from "react";
import s from "./Marquee.module.css";
import Marquee from "react-fast-marquee";

interface Props {
  children: ReactNode[];
}

const MarqueeFn: FC<Props> = ({ children }) => {
  return (
    <div className={s.root}>
      <Marquee autoFill>
        <div className={s.container}>{children}</div>
      </Marquee>
    </div>
  );
};

export default MarqueeFn;

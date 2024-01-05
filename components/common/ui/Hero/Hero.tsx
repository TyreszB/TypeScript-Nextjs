import React, { FC } from "react";
import s from "./Hero.module.css";
import Link from "next/link";

interface Props {
  headline: string;
  description: string;
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <div className={s.root}>
        <h2 className={s.headline}>{headline}</h2>
        <div>
          <p className={s.description}>{description}</p>
          <Link legacyBehavior href="/">
            <a className={s.link}>Read It Here</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

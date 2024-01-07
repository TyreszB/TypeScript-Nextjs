import React, { FC } from "react";
import s from "./Hero.module.css";
import Link from "next/link";
import Container from "./../Container";

interface Props {
  headline: string;
  description: string;
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
          <div className="flex-1 max-w-4xl">
            <p className={s.description}>{description}</p>
            <Link legacyBehavior href="/">
              <a className={s.link}>Read It Here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

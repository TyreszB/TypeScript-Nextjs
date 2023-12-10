"use client";
import { useEffect } from "react";
import play from "./playgroung";

export default function Home() {
  useEffect(() => {
    play();
  }, []);

  return <div>Hello World</div>;
}

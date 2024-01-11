import React, { FC } from "react";
import Link from "next/link";
import s from "./NavBar.module.css";
import { UserNav } from "..";
import { Container } from "@/components/ui";
import { useUI } from "@/components/context";

const NavBar: FC = () => {
  return (
    <Container>
      <div className="">
        <div className={s.root}>
          <Link href="/" legacyBehavior>
            <a className={s.logo}>NXT_STORE</a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href="/" legacyBehavior>
              <a className={s.link}>All</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className={s.link}>Clothes</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className={s.link}>Accesories</a>
            </Link>
            <Link href="/" legacyBehavior>
              <a className={s.link}>Shoes</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <UserNav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NavBar;

import React, { FC } from "react";
import s from "./UserNav.module.css";
import Link from "next/link";
import { Bag, Heart } from "@/components/icons";

type Props = {};

const UserNav: FC = (props: Props) => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Bag />
        </li>
        <li className={s.item}>
          <Link href="/" legacyBehavior>
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;

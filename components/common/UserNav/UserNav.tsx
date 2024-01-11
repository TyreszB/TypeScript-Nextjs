"use client";

import React, { FC } from "react";
import s from "./UserNav.module.css";
import Link from "next/link";
import { Bag, Heart } from "@/components/icons";
import { useUI } from "@/components/context";

type Props = {};

const UserNav: FC = (props: Props) => {
  const { setSidebarOpen } = useUI();
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <Bag onClick={setSidebarOpen} />
        </li>
        <li className={s.item}>
          <Link href="/wishlist" legacyBehavior>
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

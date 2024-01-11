"use client";
import { useUI } from "@/components/context";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import React, { FC, useEffect, useRef } from "react";

interface Props {
  children: any;
}

const Sidebar: FC<Props> = ({ children }) => {
  const { isSidebarOpen, closeSidebar } = useUI();

  const isOpen = isSidebarOpen;

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (ref.current) {
      if (isOpen) {
        disableBodyScroll(ref.current);
      } else {
        enableBodyScroll(ref.current);
      }
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div ref={ref} className="fixed inset-0 overflow-hidden h-full z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div
              onClick={closeSidebar}
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
              <div className="h-full md:w-screen md:max-w-md">
                <div className="h-full flex flex-col text-base bg-white shadow-xl overflow-y-auto">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;

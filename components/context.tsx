"use client";
import React, { createContext, useContext, useState } from "react";

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}
export interface StateValues {
  isSidebarOpen: boolean;
}
const stateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

const initialState = { isSidebarOpen: false };

type State = StateValues & StateModifiers;

export const UIContext = createContext<State>({
  ...stateModifiers,
  ...initialState,
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const openSidebar = () => {};
  const closeSidebar = () => {};

  const value = {
    openSidebar,
    closeSidebar,
    isSidebarOpen: false,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export const useUI = () => useContext(UIContext);

"use client";
import React, { createContext, useContext } from "react";

export const UIContext = createContext<{ [key: string]: string }>({
  uiState: "default",
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UIContext.Provider value={{ uiState: "something" }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  return context;
};

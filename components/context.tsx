"use client";
import React, { createContext, useContext, useState } from "react";

export const UIContext = createContext<{ [key: string]: any }>({
  uiState: {},
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const uiState = {
    isSidebarOpen,
    setSidebarOpen,
  };

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUI = () => useContext(UIContext);

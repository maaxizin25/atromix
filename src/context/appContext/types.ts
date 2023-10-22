import React from "react";

export interface iAppContextProps {
  children: React.ReactNode;
}

// Typagem para todas as funções que vamos exportar com props
export interface iAppContext {
  increamentStep: () => void;
  decreamentStep: () => void;
  currentStep: number;
}

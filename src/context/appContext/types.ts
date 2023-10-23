import React, { FormEvent } from "react";

export interface iAppContextProps {
  children: React.ReactNode;
}

// Typagem para todas as funções que vamos exportar com props
export interface iAppContext {
  increamentStep: () => void;
  decreamentStep: () => void;
  currentStep: number;
  saveDateBirth: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  dateBirth: {
    month: string;
    day: string;
    year: string;
  };
  submitEvent: (e: FormEvent<HTMLFormElement>) => void;
  signo: {
    signo: string;
    message: string;
    img: string;
  };
}

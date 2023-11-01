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
  city: string;
  insertCity: (e: string) => void;
  isInputOpen: boolean;
  inputOpenModal: () => void;
  changeHourBirth: (e: string) => void;
  hourDateBirth: string;
  selectedGender: string | null;
  handleChangeGenderSelect: (gender: string) => void;
  changeName: (name: string) => void;
  nameUser: string;
  isInputNameValid: boolean;
  setIsInputNameValid: (e: boolean) => void;
  handleChangeLoading: () => void;
  loading: boolean;
  isInputInformCityOpen: boolean;
  handleChangeSetIsInputInformCity: (e: boolean) => void;
}

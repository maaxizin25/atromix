import React, { FormEvent, createContext, useState } from "react";
import { iAppContext, iAppContextProps } from "./types";

export const AppContext = createContext({} as iAppContext);

export const AppProvider = ({ children }: iAppContextProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dateBirth, setDateBirth] = useState<iAppContext["dateBirth"]>({
    month: "1",
    day: "1",
    year: "1993",
  });
  const [signo, setSigno] = useState({
    signo: "Capricórnio",
    message: "olá capricórnio",
  });

  const increamentStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };
  const decreamentStep = () => {
    if (currentStep >= 2) {
      setCurrentStep(currentStep - 1);
    }
  };
  const saveDateBirth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDateBirth((PrevdateBirth) => ({
      ...PrevdateBirth,
      [name]: value,
    }));
  };
  const getSigno = (dateBirth: iAppContext["dateBirth"]) => {
    const day = parseInt(dateBirth.day);
    const month = parseInt(dateBirth.month);

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      setSigno({ signo: "Aquário", message: "Olá Aquário" });
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      setSigno({ signo: "Peixes", message: "Olá Peixes" });
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      setSigno({ signo: "Áries", message: "Olá Áries" });
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      setSigno({ signo: "Touro", message: "Olá Touro" });
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      setSigno({ signo: "Gêmeos", message: "Olá Gêmeos" });
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      setSigno({ signo: "Câncer", message: "Olá Câncer" });
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      setSigno({ signo: "Leão", message: "Olá Leão" });
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      setSigno({ signo: "Virgem", message: "Olá Virgem" });
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      setSigno({ signo: "Libra", message: "Olá Libra" });
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      setSigno({ signo: "Escorpião", message: "Olá Escorpião" });
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      setSigno({ signo: "Sagitário", message: "Olá Sagitário" });
    }
  };
  const submitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSigno(dateBirth);
    increamentStep();
  };

  return (
    <AppContext.Provider
      value={{
        currentStep,
        increamentStep,
        decreamentStep,
        saveDateBirth,
        dateBirth,
        submitEvent,
        signo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

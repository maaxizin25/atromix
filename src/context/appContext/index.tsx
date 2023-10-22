import { createContext, useState } from "react";
import { iAppContext, iAppContextProps } from "./types";

export const AppContext = createContext({} as iAppContext);

export const AppProvider = ({ children }: iAppContextProps) => {
  const [currentStep, setCurrentStep] = useState(1);

  const increamentStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
      console.log(currentStep);
    }
  };
  const decreamentStep = () => {
    if (currentStep >= 2) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <AppContext.Provider
      value={{ currentStep, increamentStep, decreamentStep }}
    >
      {children}
    </AppContext.Provider>
  );
};

import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { StepImgsImgsComponents } from "./imgs";
import { StepImgsStyled } from "./style";

export const StepImgsComponents = () => {
  const { currentStep } = useContext(AppContext);

  const elementColors = {
    element1: currentStep >= 1 ? "#6656a9 " : "#D4D1E5",
    element3: currentStep >= 3 ? "#6656a9 " : "#D4D1E5",
    element4: currentStep >= 4 ? "#6656a9 " : "#D4D1E5",
    element5: currentStep >= 5 ? "#6656a9 " : "#D4D1E5",
    element6: currentStep >= 6 ? "#6656a9 " : "#D4D1E5",
  };

  const totalSteps = 7;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <StepImgsStyled $progress={progress}>
      <div className="container-imgs">
        <StepImgsImgsComponents elementColors={elementColors} />
      </div>
      <div className="container-bar">
        <div className="color-bar"></div>
      </div>
    </StepImgsStyled>
  );
};

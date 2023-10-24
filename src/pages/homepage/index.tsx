import { NavBarComponent } from "../../components/navBar";
import { StepImgsComponents } from "../../components/stepImgs";
import { HomePageStyled } from "./style";
import { StepOneComponent } from "../../components/stepOne";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { StepTwoComponent } from "../../components/stepTwo";
import { StepThreeComponent } from "../../components/stepThree";
import { StepFourComponent } from "../../components/stepFour";
import { StepFiveComponent } from "../../components/stepFive";

export const HomePage = () => {
  const { currentStep } = useContext(AppContext);
  return (
    <HomePageStyled>
      <NavBarComponent />
      <div className="container-form">
        <StepImgsComponents />
        {currentStep === 1 && <StepOneComponent />}
        {currentStep === 2 && <StepTwoComponent />}
        {currentStep === 3 && <StepThreeComponent />}
        {currentStep === 4 && <StepFourComponent />}
        {currentStep === 5 && <StepFiveComponent />}
      </div>
    </HomePageStyled>
  );
};

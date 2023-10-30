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
import { StepSixComponent } from "../../components/stepSix";
import { StepCalculateHoroscope } from "../../components/stepCalculateHoroscope";

export const HomePage = () => {
  const { currentStep } = useContext(AppContext);
  return (
    <HomePageStyled>
      <NavBarComponent />
      <div className="container-form">
        {currentStep < 7 && <StepImgsComponents />}
        {currentStep === 1 && <StepOneComponent />}
        {currentStep === 2 && <StepTwoComponent />}
        {currentStep === 3 && <StepThreeComponent />}
        {currentStep === 4 && <StepFourComponent />}
        {currentStep === 5 && <StepFiveComponent />}
        {currentStep === 6 && <StepSixComponent />}
        {currentStep === 7 && <StepCalculateHoroscope />}
      </div>
    </HomePageStyled>
  );
};

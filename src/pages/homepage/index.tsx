import { useContext } from "react";
import { NavBarComponent } from "../../components/navBar";
import { StepImgsComponents } from "../../components/stepImgs";
import { HomePageStyled } from "./style";
import { AppContext } from "../../context/appContext";

export const HomePage = () => {
  const { increamentStep, decreamentStep } = useContext(AppContext);
  return (
    <HomePageStyled>
      <NavBarComponent />
      <div className="container-form">
        <StepImgsComponents />
      </div>
    </HomePageStyled>
  );
};

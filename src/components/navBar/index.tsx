import { useContext } from "react";
import { NavComponentStyled } from "./style";
import { AppContext } from "../../context/appContext";
import backIcon from "../../assets/backicon.svg";

export const NavBarComponent = () => {
  const { decreamentStep, currentStep } = useContext(AppContext);
  return (
    <>
      <NavComponentStyled>
        <h2>SUA LOGO</h2>
        {currentStep > 1 && (
          <img
            src={backIcon}
            onClick={decreamentStep}
            alt=""
            className="return-button"
          />
        )}
      </NavComponentStyled>
    </>
  );
};

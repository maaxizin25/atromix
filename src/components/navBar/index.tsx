import { useContext } from "react";
import { NavComponentStyled } from "./style";
import { AppContext } from "../../context/appContext";
import backIcon from "../../assets/backicon.svg";
import logo from "../../assets/ASTRODESTINO.png";

export const NavBarComponent = () => {
  const { decreamentStep, currentStep } = useContext(AppContext);
  return (
    <>
      <NavComponentStyled>
        <img className="logo" src={logo} alt="" />
        {currentStep > 1 && currentStep < 7 && (
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

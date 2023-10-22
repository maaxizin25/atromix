import { useContext } from "react";
import { NavComponentStyled } from "./style";
import { AppContext } from "../../context/appContext";

export const NavBarComponent = () => {
  const { decreamentStep } = useContext(AppContext);
  return (
    <>
      <NavComponentStyled>
        <h2>SUA LOGO</h2>
        <button onClick={() => decreamentStep()}>RETURN STEP</button>
      </NavComponentStyled>
    </>
  );
};

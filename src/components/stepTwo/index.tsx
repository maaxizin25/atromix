import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { StepTwoStyled } from "./style";
import { ButtonSubmitComponent } from "../buttonSubmit";

export const StepTwoComponent = () => {
  const { signo, increamentStep } = useContext(AppContext);
  return (
    <>
      <StepTwoStyled>
        <img src={signo.img} alt="" />
        <h2>Tu signo es {signo.signo}</h2>
        <p>{signo.message}</p>
        <ButtonSubmitComponent onClick={increamentStep} />
      </StepTwoStyled>
    </>
  );
};

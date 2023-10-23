import { useContext } from "react";
import { ButtonSubmitStyled } from "./style";
import { AppContext } from "../../context/appContext";

export const ButtonSubmitComponent = () => {
  const { increamentStep } = useContext(AppContext);
  return (
    <ButtonSubmitStyled onClick={increamentStep}>Próximo</ButtonSubmitStyled>
  );
};

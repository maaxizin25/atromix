import { useContext } from "react";
import { ButtonCheckoutStyle } from "./style";
import { AppContext } from "../../context/appContext";

export const ButtonCheckoutComponent = ({ text }: { text?: string }) => {
  const { increamentStep } = useContext(AppContext);

  return (
    <ButtonCheckoutStyle onClick={() => increamentStep()}>
      {text ? text : "      Abrir horóscopo completo por 28 USD"}
    </ButtonCheckoutStyle>
  );
};

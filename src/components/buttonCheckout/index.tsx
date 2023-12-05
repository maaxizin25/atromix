import { ButtonCheckoutStyle } from "./style";

export const ButtonCheckoutComponent = ({ text }: { text: string }) => {
  return (
    <ButtonCheckoutStyle href="https://go.hotmart.com/Y88065931K?ap=4976">
      {text ? text : "      Abrir horóscopo completo por 28 USD"}
    </ButtonCheckoutStyle>
  );
};

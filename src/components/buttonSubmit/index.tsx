import { ButtonSubmitStyled } from "./style";

export const ButtonSubmitComponent = ({
  onClick,
}: {
  onClick?: () => void;
}) => {
  return <ButtonSubmitStyled onClick={onClick}>Próximo</ButtonSubmitStyled>;
};

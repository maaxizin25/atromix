import { useContext } from "react";
import { ButtonSubmitStyled } from "./style";
import { AppContext } from "../../context/appContext";

export const ButtonSubmitComponent = ({
  onClick,
}: {
  onClick?: () => void;
}) => {
  const { currentStep, loading } = useContext(AppContext);
  return (
    <ButtonSubmitStyled disabled={loading} onClick={onClick}>
      {loading ? (
        <div className="loader" />
      ) : currentStep <= 5 ? (
        "Próximo"
      ) : (
        "Horóscopo Abierto"
      )}
    </ButtonSubmitStyled>
  );
};

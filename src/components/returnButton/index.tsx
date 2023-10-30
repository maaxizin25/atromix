import { useContext } from "react";
import backIcon from "../../assets/backicon.svg";
import { AppContext } from "../../context/appContext";
import { ReturnButtonStyle } from "./style";

export const ReturnButtonComponent = () => {
  const { decreamentStep } = useContext(AppContext);

  return (
    <ReturnButtonStyle
      src={backIcon}
      onClick={decreamentStep}
      alt=""
      className="return-button"
    />
  );
};

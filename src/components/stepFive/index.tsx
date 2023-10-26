import { ButtonSubmitComponent } from "../buttonSubmit";
import mujerImg from "../../assets/mujerimg.svg";
import homemImg from "../../assets/homem.svg";
import { StepFiveStyle } from "./style";
import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../../context/appContext";

export const StepFiveComponent = () => {
  const {
    selectedGender,
    handleChangeGenderSelect,
    increamentStep,
    nameUser,
    changeName,
    isInputNameValid,
    setIsInputNameValid,
  } = useContext(AppContext);

  const [isSelectGender, setIsSelectGender] = useState(true);

  const submitStepFive = () => {
    if (!selectedGender) {
      setIsSelectGender(false);
    } else if (nameUser.length <= 0) {
      setIsInputNameValid(false);
    }
    if (selectedGender && nameUser.length > 0) {
      increamentStep();
    }
  };
  const changeNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  };

  return (
    <StepFiveStyle>
      <div>
        <h2>Elige tus géneros y escribe tus nombres.</h2>
        <p>Nos ayuda a personalizar tu horóscopo.</p>
      </div>
      <div className="container-select-gender">
        <label className="select-your-gender">
          <img src={homemImg} alt="" />
          <div>
            <input
              onChange={() => {
                handleChangeGenderSelect("Macho");
                setIsSelectGender(true);
              }}
              checked={selectedGender === "Macho"}
              type="checkbox"
            />
            <p>Macho</p>
          </div>
        </label>
        <label className="select-your-gender">
          <img src={mujerImg} alt="" />
          <div>
            <input
              onChange={() => {
                handleChangeGenderSelect("femenino");
                setIsSelectGender(true);
              }}
              checked={selectedGender === "femenino"}
              type="checkbox"
            />
            <p>Femenino</p>
          </div>
        </label>
      </div>
      <div className="input-name">
        <input
          defaultValue={nameUser}
          onChange={changeNameInput}
          type="text"
          placeholder="Su nombre"
        />
        {!isSelectGender && <h2>Por favor inserte su género</h2>}
        {!isInputNameValid && <h2>Por favor inserte su nombre</h2>}
      </div>
      <ButtonSubmitComponent onClick={submitStepFive} />
    </StepFiveStyle>
  );
};

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
        <h2>Choose your genders & write your names</h2>
        <p>It helps us personalize your horoscope</p>
      </div>
      <div className="container-select-gender">
        <label className="select-your-gender">
          <img src={homemImg} alt="" />
          <div>
            <input
              onChange={() => {
                handleChangeGenderSelect("male");
                setIsSelectGender(true);
              }}
              checked={selectedGender === "male"}
              type="checkbox"
            />
            <p>Male</p>
          </div>
        </label>
        <label className="select-your-gender">
          <img src={mujerImg} alt="" />
          <div>
            <input
              onChange={() => {
                handleChangeGenderSelect("female");
                setIsSelectGender(true);
              }}
              checked={selectedGender === "female"}
              type="checkbox"
            />
            <p>Female</p>
          </div>
        </label>
      </div>
      <div className="input-name">
        <input
          defaultValue={nameUser}
          onChange={changeNameInput}
          type="text"
          placeholder="Your Name"
        />
        {!isSelectGender && <h2>Please insert your gender</h2>}
        {!isInputNameValid && <h2>Please insert your name</h2>}
      </div>
      <ButtonSubmitComponent onClick={submitStepFive} />
    </StepFiveStyle>
  );
};

import { ButtonSubmitComponent } from "../buttonSubmit";
import horaNascimiento from "../../assets/horario_de_nascimiento.svg";
import { StepFourStyle } from "./style";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { AppContext } from "../../context/appContext";

export const StepFourComponent = () => {
  const { changeHourBirth, increamentStep } = useContext(AppContext);

  const [inputValue, setInputValue] = useState("12:00");
  const [inputHourValue, setInputHourValue] = useState("AM");
  const [isValidTime, setIsValidTime] = useState(false);
  const [userKnowHourBirth, setUserKnowHourBirth] = useState(false);

  const userHour: string = inputValue + inputHourValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsValidTime(false);
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, "");
    if (numericValue.length <= 2) {
      setInputValue(numericValue);
    } else {
      setInputValue(`${numericValue.slice(0, 2)}:${numericValue.slice(2, 4)}`);
      setInputHourValue("AM");
    }
  };
  const changeInputHourValue = (e: ChangeEvent<HTMLSelectElement>) => {
    setInputHourValue(e.target.value);
  };

  const userDontKnowHourBirth = () => {
    setUserKnowHourBirth(!userKnowHourBirth);
    setInputValue("");
    setInputHourValue("");
  };

  const submitFormStepFour = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (inputValue.length < 5 && !userKnowHourBirth) {
      setIsValidTime(true);
      return;
    }
    changeHourBirth(userHour);
    increamentStep();
  };

  return (
    <StepFourStyle>
      <h2>Enter your birth time</h2>
      <p>
        It’s important for defining the ascendant, houses, and moon position in
        your natal chart
      </p>
      <img src={horaNascimiento} alt="" />
      <form>
        <div className="container-input-and-hour">
          <input
            onChange={handleChange}
            type="text"
            value={inputValue}
            id="hora"
            name="hora"
            placeholder="HH:MM"
            maxLength={5}
            disabled={userKnowHourBirth}
          />
          <select
            onChange={changeInputHourValue}
            defaultValue={inputHourValue}
            name=""
            id=""
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>

        <div className="user-dont-know-hour">
          <input
            onChange={userDontKnowHourBirth}
            type="checkbox"
            id="maca"
            name="fruta"
            value="maca"
          />
          <label htmlFor="maca">I don't know the exact birth time</label>
        </div>
        {isValidTime && <h2 className="error-hour">Enter your birth time</h2>}
        <p>
          *If you don't know the exact time of birth, no problem, you will still
          find plenty of great insights without knowing your exact birth time.
        </p>
      </form>
      <ButtonSubmitComponent onClick={submitFormStepFour} />
    </StepFourStyle>
  );
};

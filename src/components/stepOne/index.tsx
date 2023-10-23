import { useContext } from "react";
import telescopeImg from "../../assets/telescope.svg";
import { ButtonSubmitComponent } from "../buttonSubmit";
import { StepOneStyled } from "./style";
import { AppContext } from "../../context/appContext";

export const StepOneComponent = () => {
  const { saveDateBirth, submitEvent } = useContext(AppContext);

  const optionsDays = [];
  const optionsYears = [];

  for (let i = 1; i <= 30; i++) {
    optionsDays.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  for (let i = 1933; i <= 2023; i++) {
    optionsYears.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <StepOneStyled action="" onSubmit={submitEvent}>
      <h2>Please enter your birth date</h2>
      <p>It will help us to tell your solar sign</p>
      <img className="telescope-img" src={telescopeImg} alt="" />
      <div className="select-your-data">
        <select
          defaultValue={1}
          name="month"
          id="month"
          onChange={saveDateBirth}
        >
          <option value={1}>Janeiro</option>
          <option value={2}>Fevereiro</option>
          <option value={3}>Março</option>
          <option value={4}>Abril</option>
          <option value={5}>Maio</option>
          <option value={6}>Junho</option>
          <option value={7}>Julho</option>
          <option value={8}>Agosto</option>
          <option value={9}>Setembro</option>
          <option value={10}>Outubro</option>
          <option value={11}>Novembro</option>
          <option value={12}>Dezembro</option>
        </select>
        <select defaultValue="1" name="day" id="day" onChange={saveDateBirth}>
          {optionsDays}
        </select>
        <select
          name="year"
          id="year"
          onChange={saveDateBirth}
          defaultValue={1993}
        >
          {optionsYears}
        </select>
      </div>
      <ButtonSubmitComponent />
    </StepOneStyled>
  );
};

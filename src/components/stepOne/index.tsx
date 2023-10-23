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
      <h2>Por favor, introduce tu fecha de nacimiento</h2>
      <p>Nos ayudará a saber tu signo solar.</p>
      <img className="telescope-img" src={telescopeImg} alt="" />
      <div className="select-your-data">
        <select
          defaultValue={1}
          name="month"
          id="month"
          onChange={saveDateBirth}
        >
          <option value={1}>Enero</option>
          <option value={2}>Febrero</option>
          <option value={3}>Marzo</option>
          <option value={4}>Abril</option>
          <option value={5}>Puede</option>
          <option value={6}>Junio</option>
          <option value={7}>Julio</option>
          <option value={8}>Agosto</option>
          <option value={9}>Septiembre</option>
          <option value={10}>Octubre</option>
          <option value={11}>Noviembre</option>
          <option value={12}>Diciembre</option>
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

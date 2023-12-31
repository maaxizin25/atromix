import { useContext } from "react";
import telescopeImg from "../../assets/telescope.svg";
import { ButtonSubmitComponent } from "../buttonSubmit";
import { StepOneStyled } from "./style";
import { AppContext } from "../../context/appContext";

export const StepOneComponent = () => {
  const { saveDateBirth, submitEvent, dateBirth, getAngel } =
    useContext(AppContext);

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
      <h2 className="padding-fix">
        El día que naciste NO fue un accidente. Se le asignó un ángel de la
        guarda Cuidarte…
      </h2>
      <p className="padding-fix">
        Ingrese sus datos a continuación para descubrir el nombre de su ángel de
        la guarda y el Mensaje especial que te espera...
      </p>
      <p>Nos ayudará a saber tu Ángel de la guarda.</p>
      <img className="telescope-img" src={telescopeImg} alt="" />
      <div className="select-your-data">
        <select
          defaultValue={dateBirth.month}
          name="month"
          id="month"
          onChange={saveDateBirth}
        >
          <option value={1}>Enero</option>
          <option value={2}>Febrero</option>
          <option value={3}>Marzo</option>
          <option value={4}>Abril</option>
          <option value={5}>Mayo</option>
          <option value={6}>Junio</option>
          <option value={7}>Julio</option>
          <option value={8}>Agosto</option>
          <option value={9}>Septiembre</option>
          <option value={10}>Octubre</option>
          <option value={11}>Noviembre</option>
          <option value={12}>Diciembre</option>
        </select>
        <select
          defaultValue={dateBirth.day}
          name="day"
          id="day"
          onChange={saveDateBirth}
        >
          {optionsDays}
        </select>
        <select
          name="year"
          id="year"
          onChange={saveDateBirth}
          defaultValue={dateBirth.year}
        >
          {optionsYears}
        </select>
      </div>
      <ButtonSubmitComponent
        onClick={() => getAngel(Number(dateBirth.month))}
      />
    </StepOneStyled>
  );
};

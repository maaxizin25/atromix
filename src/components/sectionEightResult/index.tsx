import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionEightResultStyle } from "./style";
import calendar from "../../assets/calendarResult.svg";
import calendarExample from "../../assets/calendarExample.png";

export const SectionEightResultComponent = () => {
  return (
    <SectionEightResultStyle>
      <div>
        <img src={calendar} alt="" />
        <h2>Calendario de concepción para el mes</h2>
        <img src={calendarExample} alt="" />
        <p>Ejemplo de calendario*</p>
      </div>
      <ButtonCheckoutComponent />
    </SectionEightResultStyle>
  );
};

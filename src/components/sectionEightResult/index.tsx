import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionEightResultStyle } from "./style";
import calendar from "../../assets/calendarResult.svg";
import calendarExample from "../../assets/calendarExample.png";

export const SectionEightResultComponent = () => {
  return (
    <SectionEightResultStyle>
      <div>
        <img src={calendar} alt="" />
        <h2>Conception calendar for the month</h2>
        <img src={calendarExample} alt="" />
        <p>Calendar example*</p>
      </div>
      <ButtonCheckoutComponent />
    </SectionEightResultStyle>
  );
};

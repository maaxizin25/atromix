import star from "../../assets/start.png";
import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionNineResultStyle } from "./style";

export const SectionNineResultComponent = () => {
  return (
    <SectionNineResultStyle>
      <div>
        <h2>"Conception horoscope" includes the following chapters:</h2>
        <ul>
          <li>
            <img src={star} alt="" />
            <p>Personal recommendations for conception </p>
          </li>
          <li>
            <img src={star} alt="" />
            <p>Health and conception of the child </p>
          </li>
          <li>
            <img src={star} alt="" />
            <p>Analysis of health according to the natal chart </p>
          </li>
          <li>
            <img src={star} alt="" />
            <p>Female practicums for conception </p>
          </li>
          <li>
            <img src={star} alt="" />
            <p>Conception calendar for the next month </p>
          </li>
        </ul>
        <h2>
          Find out how to increase the probability of pregnancy right now!
        </h2>
        <ButtonCheckoutComponent />
      </div>
    </SectionNineResultStyle>
  );
};

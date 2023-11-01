import pregnantImg from "../../assets/pregnant.svg";
import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionFiveResultStyle } from "./style";

export const SectionFiveResultComponent = () => {
  return (
    <SectionFiveResultStyle>
      <div>
        <img src={pregnantImg} alt="" />
        <h2>How can you conceive a healthy child?</h2>
        <h3>What decreases fertility?</h3>
        <div className="description-texts">
          <p>
            The chances of conceiving a healthy child depend on your lifestyle
            and everyday habits. To increase the probability of conception
            research factors that negatively affect fertility and get rid of
            them. Such as:
          </p>
          <p>
            <b>Being over or underweight</b>{" "}
          </p>
          <p>
            Affects every system of the organism that take active roles in the
            growth of a child: circulatory, musculoskeletal, nervous system,
            etc.{" "}
          </p>
          <p>
            <b>Unhealthy diet</b>
          </p>
          <p>
            The lack of nutrients or high levels of toxins in the organism will
            definitely affect the well-being of you and your child.
          </p>
          <p className="ocult-element">Unhealthy diet Unhealthy</p>
          <p className="ocult-element">
            {" "}
            The lack of nutrients or high levels of toxins in the organism will
            definitely affect the well-being of you and your child. definitely
            affect the well-being of you and your child
          </p>
        </div>
        <ButtonCheckoutComponent />
      </div>
    </SectionFiveResultStyle>
  );
};

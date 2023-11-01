import spermImg from "../../assets/spermTwo.svg";
import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionSixResultStyle } from "./style";

export const SectionSixResultComponent = () => {
  return (
    <SectionSixResultStyle>
      <div>
        <img src={spermImg} alt="" />
        <h2>How to significantly increase your chances of getting pregnant?</h2>
        <div className="description-texts">
          <p>
            Foremost of all, we recommend you consult an experienced doctor.
            However, outside of traditional medicine, there are actions you can
            take independently to increase the probability of conception and
            birth of a healthy child.
          </p>
          <p>
            <b>1. Normalization of nutrients in the Gastrointestinal tract</b>{" "}
            (calcium, iodine, zinc, vitamin D, B12, B6 - get the full list from
            your doctor - all are nutrients that need to be stabilized prior to
            conception. It is best to even out the deficit with natural foods
            and not synthetic additives);
          </p>
          <span>
            <b>2. Active sex life</b>
            <p> (no less than 2-3 times per week) </p>
          </span>
          <p className="ocult-element">3. Unhealth Unhealthy</p>
          <p className="ocult-element">
            {" "}
            The lacknd your child. definitely affect the well-being of you and
            your child The lacknd your child. definitely affect the well-being
            of you and your child The lacknd your child. definitely affect the
            well-being of you and your child
          </p>
        </div>
        <ButtonCheckoutComponent />
      </div>
    </SectionSixResultStyle>
  );
};

import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { SectionTwoResultStyle } from "./style";
import childrenImg from "../../assets/children.svg";
import calendar from "../../assets/calendar.svg";
import dadChildren from "../../assets/dad-children.svg";
import aspas from "../../assets/aspas.png";
import { ButtonCheckoutComponent } from "../buttonCheckout";

export const SectionTwoResultComponent = () => {
  const { nameUser } = useContext(AppContext);

  return (
    <SectionTwoResultStyle>
      <div>
        <img src={childrenImg} alt="" />
        <h2>How many children will you have?</h2>
        <p>
          <em>Get an accurate prediction from your personal astrologer</em>
        </p>
        <p>
          {nameUser}, birth chart often highlights certain astrological aspects
          that indicate the most probable number of children. The detailed
          analysis allows us to dive deeper into this topic, and we will send
          you the results if such indications are found in your birth chart.
        </p>
      </div>
      <div>
        <div>
          <img src={dadChildren} alt="" />
          <span>
            Number of children: <p>0</p>
          </span>
        </div>
        <div>
          <img src={calendar} alt="" />
          <span>
            Accuracy: <p>0</p> %
          </span>
        </div>
      </div>
      <div className="container-astroadvice">
        <div>
          <img src={aspas} alt="" />
          <h2>Your Astro-Advice</h2>
        </div>
        <div>
          <p>
            According to Conception Calendar, this period will be very opportune
            for you! With certainty, we tell you:
          </p>
          <p>
            According to Conception Calendar, this perill be very opportune for
            you! Wi
          </p>
        </div>
      </div>
      <div>
        <h2>When are you destined to get pregnant?</h2>
        <ButtonCheckoutComponent />
      </div>
    </SectionTwoResultStyle>
  );
};

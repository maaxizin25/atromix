import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import babyImg from "../../assets/babyOnHeart.svg";
import calendar from "../../assets/calendar.svg";
import clockImg from "../../assets/clock.svg";
import aspas from "../../assets/aspas.png";
import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionThreeResultStyle } from "./style";

export const SectionThreeResultComponent = () => {
  const { nameUser } = useContext(AppContext);

  return (
    <SectionThreeResultStyle>
      <div>
        <img src={babyImg} alt="" />
        <h2>When you will get pregnant?</h2>
        <p>Here is an accurate prediction from the astrologist</p>
        <p>
          {nameUser}, we analyzed the astrological factors affecting your life
          and have found periods when the possibility of getting pregnant is the
          highest
        </p>
      </div>
      <div>
        <div>
          <img src={calendar} alt="" />
          <span>
            Year of get pregnant: <p>0</p>
          </span>
        </div>
        <div>
          <img src={clockImg} alt="" />
          <span>
            Date of get pregnant: <p>0</p>
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
    </SectionThreeResultStyle>
  );
};

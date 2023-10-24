import giftImg from "../../assets/giftImg.svg";
import { StepSixStyle } from "./style";

export const StepSixComponent = () => {
  return (
    <StepSixStyle>
      <div>
        <h2>We need your email address to send you horoscopes readings.</h2>
        <img src={giftImg} alt="" />
        <p>
          We will also send you letters{" "}
          <b>
            with personal recommendations from the Astromix lead astrologer.
          </b>
        </p>
        <div className="input-container">
          <input type="email" placeholder="Email" />
          <p>You’ll get advice based on your personal information.</p>
        </div>
        <label>
          <input type="checkbox" />
          <p>I accept the User Agreement, Privacy Policy</p>
        </label>
        <div>
          <p>All your personal data is protected</p>
        </div>
      </div>
    </StepSixStyle>
  );
};

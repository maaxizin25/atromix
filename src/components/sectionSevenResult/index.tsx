import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionSevenResultStyle } from "./style";
import mamadeira from "../../assets/mama.svg";

export const SectionSevenResultComponent = () => {
  return (
    <SectionSevenResultStyle>
      <div>
        <img src={mamadeira} alt="" />
        <h2>
          How can you increase the probability of conception? Here are personal
          practicums from the astrologer
        </h2>
        <h3>Vizualization to eliminate psychological blocks</h3>
        <div className="description-texts">
          <p>
            Take on a comfortable position, relax as much as possible and count
            from 1 to 10, then back. Calm your thoughts and imagine that you are
            on the shore of a picturesque river, in front of you - a small boat
            with oars. You get in the boat and start to row. It’s difficult -
            the boat is hardly moving as it is weighed down by large sacks. You
            take the sack labled as “Fear” and throw it overboard. You try to
            row again, but the boat is still overloaded, so next you throw the
            sack labled “Anxiety” overboard, then “Negativity”, “Grudges”,
            “Failures” - each and every one of them!
          </p>
          <h3>Blessing of the Clan ritual</h3>
          <p className="ocult-element">
            “Fear” and throw it overboard. You try to row again, but the boat is
            still overloaded, so next you throw the sack labled “Anxiety”
            overboard, then “Negativity”, “Grudges”, “Failures” - each and every
            one of them!
          </p>
        </div>
        <ButtonCheckoutComponent />
      </div>
    </SectionSevenResultStyle>
  );
};

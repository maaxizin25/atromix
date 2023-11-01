import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionFourResultStyle } from "./style";
import spermImg from "../../assets/sperm.svg";

export const SectionFourResultComponent = () => {
  const { nameUser } = useContext(AppContext);
  return (
    <SectionFourResultStyle>
      <div>
        <img src={spermImg} alt="" />
        <h2>Fears which prevent you from getting pregnant</h2>
        <span>
          {nameUser}, you are strongly influenced by the idea that the only real
          family is the one that has children. So pregnancy is important to you
          for a couple of reasons. Firstly, your parents will finally
          acknowledge your marriage as successful. Secondly, you want to make
          your parents happy by giving them grandchildren. If you can’t get
          pregnant, the reasons might lie in your family’s past. Perhaps, your
          parents or grandparents went through
          <p>
            Secondly, you want to make your parents happy by giving them
            grandchildren. If you can’t get pregnant, the reasons might lie in
            your family’s past. Perhaps, your parents or grandparents went
            through
          </p>
        </span>
        <ButtonCheckoutComponent />
      </div>
    </SectionFourResultStyle>
  );
};

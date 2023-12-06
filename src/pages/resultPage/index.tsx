import logo from "../../assets/ASTRODESTINO.png";
import { ResultPageStyle } from "./style";
import { useContext } from "react";
import { AppContext, tAngels } from "../../context/appContext";
import { ButtonCheckoutComponent } from "../../components/buttonCheckout";
import angelImg from "../../assets/angelImg.webp";
import { ResultNewSection } from "../../components/resultNewSection";
import { VslPageComponent } from "../../components/vslPage";

export const ResultPage = () => {
  const { nameUser, angel, currentStep } = useContext(AppContext);
  const myAngel: tAngels = angel!;
  return (
    <ResultPageStyle>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ResultNewSection />
      {currentStep === 9 ? (
        <div className="container-box-horoscope">
          <VslPageComponent />
        </div>
      ) : (
        <div className="container-box-horoscope">
          <h2>
            Deares {nameUser.charAt(0).toUpperCase() + nameUser.slice(1)},
          </h2>
          <p dangerouslySetInnerHTML={{ __html: myAngel.firstText }} />
          <h2 className="center">{myAngel.secondText}</h2>
          <img className="angelImg" src={myAngel.angelImg} alt="" />
          <p dangerouslySetInnerHTML={{ __html: myAngel.threeText }} />
          <h2 className="border-text center">{myAngel.fourText}</h2>
          <p dangerouslySetInnerHTML={{ __html: myAngel.fiveText }} />
          <div className="container-section-six">
            <div>
              <p dangerouslySetInnerHTML={{ __html: myAngel.sixText }} />
            </div>
            <img className="angelImgGlobal" src={angelImg} alt="" />
          </div>
          <p dangerouslySetInnerHTML={{ __html: myAngel.sevenText }} />
          <h2 className="border-text center">{myAngel.eightText}</h2>
          <p dangerouslySetInnerHTML={{ __html: myAngel.nineText }} />
          <p
            className="background-text"
            dangerouslySetInnerHTML={{ __html: myAngel.teenText }}
          />
          <p dangerouslySetInnerHTML={{ __html: myAngel.elevenText }} />
          <h2 className="border-text center">{myAngel.twoEvenText}</h2>
          <p dangerouslySetInnerHTML={{ __html: myAngel.threeEventText }} />
          <ButtonCheckoutComponent
            text={`Click Here To Discover How To Connect With Archangel ${myAngel.nome}`}
          />
        </div>
      )}
    </ResultPageStyle>
  );
};

{
  /* <SectionOneResultComponent />
        <SectionTwoResultComponent />
        <SectionThreeResultComponent />
        <SectionFourResultComponent />
        <SectionFiveResultComponent />
        <SectionSixResultComponent />
        <SectionSevenResultComponent />
        <SectionEightResultComponent />
        <SectionNineResultComponent />
        <ReviewsComponent /> */
}

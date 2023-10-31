import logo from "../../assets/ASTRODESTINO.png";
import { SectionFourResultComponent } from "../../components/sectionFourResult";
import { SectionOneResultComponent } from "../../components/sectionOneResult";
import { SectionThreeResultComponent } from "../../components/sectionThreeResult";
import { SectionTwoResultComponent } from "../../components/sectionTwoResult";
import { ResultPageStyle } from "./style";

export const ResultPage = () => {
  return (
    <ResultPageStyle>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="container-box-horoscope">
        <SectionOneResultComponent />
        <SectionTwoResultComponent />
        <SectionThreeResultComponent />
        <SectionFourResultComponent />
      </div>
    </ResultPageStyle>
  );
};

import logo from "../../assets/ASTRODESTINO.png";
import { SectionEightResultComponent } from "../../components/sectionEightResult";
import { SectionFiveResultComponent } from "../../components/sectionFiveResult";
import { SectionFourResultComponent } from "../../components/sectionFourResult";
import { SectionNineResultComponent } from "../../components/sectionNineResult";
import { SectionOneResultComponent } from "../../components/sectionOneResult";
import { SectionSevenResultComponent } from "../../components/sectionSevenResult";
import { SectionSixResultComponent } from "../../components/sectionSixResult";
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
        <SectionFiveResultComponent />
        <SectionSixResultComponent />
        <SectionSevenResultComponent />
        <SectionEightResultComponent />
        <SectionNineResultComponent />
      </div>
    </ResultPageStyle>
  );
};

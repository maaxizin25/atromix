import logo from "../../assets/ASTRODESTINO.png";
import { SectionOneResultComponent } from "../../components/sectionOneResult";
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
      </div>
    </ResultPageStyle>
  );
};

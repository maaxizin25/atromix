import logo from "../../assets/ASTRODESTINO.png";
import { SectionOneResultComponent } from "../../components/sectionOneResult";
import { ResultPageStyle } from "./style";

export const ResultPage = () => {
  return (
    <ResultPageStyle>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="container-box-horoscope">
        <SectionOneResultComponent />
      </div>
    </ResultPageStyle>
  );
};

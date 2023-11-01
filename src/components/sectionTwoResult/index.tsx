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
        <h2>¿Cuántos hijos tendrás?</h2>
        <p>
          <em>Obtén una predicción precisa de tu astróloga personal</em>
        </p>
        <p>
          {nameUser}, la carta natal a menudo resalta ciertos aspectos
          astrológicos que indican el número más probable de hijos. El análisis
          detallado nos permite profundizar en este tema, y te enviaremos los
          resultados si se encuentran tales indicaciones en tu carta natal.
        </p>
      </div>
      <div>
        <div>
          <img src={dadChildren} alt="" />
          <span>
            Número de hijos: <p>0</p>
          </span>
        </div>
        <div>
          <img src={calendar} alt="" />
          <span>
            Precisión: <p>0</p> %
          </span>
        </div>
      </div>
      <div className="container-astroadvice">
        <div>
          <img src={aspas} alt="" />
          <h2>Tu Astroconsejo</h2>
        </div>
        <div>
          <p>
            ¡Según el Calendario de Concepción, este período será muy oportuno
            para ti! Con certeza, te lo decimos:
          </p>
          <p>
            ¡Según el Calendario de Concepción, este período será muy oportuno
            para ti! Wi
          </p>
        </div>
      </div>
      <div>
        <h2>¿Cuándo estás destinada a quedar embarazada?</h2>
        <ButtonCheckoutComponent />
      </div>
    </SectionTwoResultStyle>
  );
};

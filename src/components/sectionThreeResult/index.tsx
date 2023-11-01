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
        <h2>¿Cuándo quedarás embarazada?</h2>
        <p>Aquí tienes una predicción precisa del astrólogo</p>
        <p>
          {nameUser}, hemos analizado los factores astrológicos que afectan tu
          vida y hemos encontrado períodos en los que la posibilidad de quedar
          embarazada es la más alta.
        </p>
      </div>
      <div>
        <div>
          <img src={calendar} alt="" />
          <span>
            Año de quedar embarazada: <p>0</p>
          </span>
        </div>
        <div>
          <img src={clockImg} alt="" />
          <span>
            Fecha de quedar embarazada: <p>0</p>
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
    </SectionThreeResultStyle>
  );
};

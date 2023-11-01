import star from "../../assets/start.png";
import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionNineResultStyle } from "./style";

export const SectionNineResultComponent = () => {
  return (
    <SectionNineResultStyle>
      <div>
        <h2>El "Horóscopo de Concepción" incluye los siguientes capítulos:</h2>
        <ul>
          <li>
            <img src={star} alt="" />
            <p>Recomendaciones personales para la concepción </p>
          </li>
          <li>
            <img src={star} alt="" />
            <p>Salud y concepción del niño </p>
          </li>
          <li>
            <img src={star} alt="" />
            <p>Análisis de la salud según la carta natal </p>
          </li>
          <li>
            <img src={star} alt="" />
            <p>Prácticas femeninas para la concepción </p>
          </li>
          <li>
            <img src={star} alt="" />
            <p>Calendario de concepción para el próximo mes </p>
          </li>
        </ul>
        <h2>
          ¡Descubre cómo aumentar la probabilidad de embarazo ahora mismo!
        </h2>
        <ButtonCheckoutComponent />
      </div>
    </SectionNineResultStyle>
  );
};

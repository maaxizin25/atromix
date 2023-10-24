import giftImg from "../../assets/giftImg.svg";
import { StepSixStyle } from "./style";

export const StepSixComponent = () => {
  return (
    <StepSixStyle>
      <div>
        <h2>
          Necesitamos tu dirección de correo electrónico para enviarte lecturas
          de horóscopos.
        </h2>
        <img src={giftImg} alt="" />
        <p>
          También te enviaremos cartas.{" "}
          <b>
            con recomendaciones personales del astrólogo principal de Astromix.
          </b>
        </p>
        <div className="input-container">
          <input type="email" placeholder="Correo electrónico" />
          <p>Recibirás consejos basados en tu información personal.</p>
        </div>
        <label>
          <input type="checkbox" />
          <p>Acepto el Acuerdo de Usuario, Política de Privacidad</p>
        </label>
        <div>
          <p>Todos tus datos personales están protegidos</p>
        </div>
      </div>
    </StepSixStyle>
  );
};

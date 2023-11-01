import spermImg from "../../assets/spermTwo.svg";
import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionSixResultStyle } from "./style";

export const SectionSixResultComponent = () => {
  return (
    <SectionSixResultStyle>
      <div>
        <img src={spermImg} alt="" />
        <h2>
          ¿Cómo aumentar significativamente tus posibilidades de quedar
          embarazada?
        </h2>
        <div className="description-texts">
          <p>
            Ante todo, te recomendamos que consultes a un médico experimentado.
            Sin embargo, fuera de la medicina tradicional, existen acciones que
            puedes tomar de forma independiente para aumentar la probabilidad de
            concepción y el nacimiento de un hijo sano.
          </p>
          <p>
            <b>1. Normalización de nutrientes en el tracto gastrointestinal</b>{" "}
            (calcio, yodo, zinc, vitamina D, B12, B6: obtén la lista completa de
            tu médico; todos son nutrientes que deben estabilizarse antes de la
            concepción. Es mejor equilibrar el déficit con alimentos naturales
            en lugar de aditivos sintéticos).
          </p>
          <span>
            <b>2. Vida sexual activa</b>
            <p> (no menos de 2-3 veces por semana) </p>
          </span>
          <p className="ocult-element">3. No saludable No saludable</p>
          <p className="ocult-element">
            La falta y tu hijo, definitivamente afectará el bienestar tuyo y de
            tu hijo. La falta y tu hijo, definitivamente afectará el bienestar
            tuyo y de tu hijo. La falta y tu hijo, definitivamente afectará el
            bienestar tuyo y de tu hijo.
          </p>
        </div>
        <ButtonCheckoutComponent />
      </div>
    </SectionSixResultStyle>
  );
};

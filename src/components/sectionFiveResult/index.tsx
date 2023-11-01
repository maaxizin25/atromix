import pregnantImg from "../../assets/pregnant.svg";
import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionFiveResultStyle } from "./style";

export const SectionFiveResultComponent = () => {
  return (
    <SectionFiveResultStyle>
      <div>
        <img src={pregnantImg} alt="" />
        <h2>¿Cómo puedes concebir un hijo saludable?</h2>
        <h3>¿Qué disminuye la fertilidad?</h3>
        <div className="description-texts">
          <p>
            Las posibilidades de concebir un hijo saludable dependen de tu
            estilo de vida y hábitos diarios. Para aumentar la probabilidad de
            concepción, investiga los factores que afectan negativamente a la
            fertilidad y deshazte de ellos. Tales como:
          </p>
          <p>
            <b>Estar por encima o por debajo del peso ideal</b>
          </p>
          <p>
            Afecta a todos los sistemas del organismo que desempeñan un papel
            activo en el crecimiento de un hijo: circulatorio,
            musculoesquelético, sistema nervioso, etc.
          </p>
          <p>
            <b>Dieta poco saludable</b>
          </p>
          <p>
            La falta de nutrientes o niveles elevados de toxinas en el organismo
            afectarán definitivamente al bienestar tuyo y de tu hijo.
          </p>
          <p className="ocult-element">Dieta no saludable</p>
          <p className="ocult-element">
            La falta de nutrientes o niveles elevados de toxinas en el organismo
            afectarán definitivamente al bienestar tuyo y de tu hijo,
            definitivamente afectarán al bienestar tuyo y de tu hijo.
          </p>
        </div>
        <ButtonCheckoutComponent />
      </div>
    </SectionFiveResultStyle>
  );
};

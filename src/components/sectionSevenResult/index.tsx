import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionSevenResultStyle } from "./style";
import mamadeira from "../../assets/mama.svg";

export const SectionSevenResultComponent = () => {
  return (
    <SectionSevenResultStyle>
      <div>
        <img src={mamadeira} alt="" />
        <h2>
          ¿Cómo puedes aumentar la probabilidad de concepción? Aquí tienes
          prácticas personales del astrólogo
        </h2>
        <h3>Visualización para eliminar bloqueos psicológicos</h3>
        <div className="description-texts">
          <p>
            Adopta una posición cómoda, relájate lo máximo posible y cuenta del
            1 al 10, luego en reversa. Calma tus pensamientos e imagina que
            estás en la orilla de un pintoresco río, frente a ti hay una pequeña
            embarcación con remos. Subes a la embarcación y comienzas a remar.
            Es difícil: la embarcación apenas se mueve, ya que está cargada con
            sacos grandes. Tomas el saco etiquetado como "Miedo" y lo arrojas
            por la borda. Intentas remar de nuevo, pero la embarcación sigue
            sobrecargada, así que a continuación arrojas el saco etiquetado como
            "Ansiedad" por la borda, luego "Negatividad", "Rencores",
            "Fracasos", ¡todos y cada uno de ellos!
          </p>
          <h3>Ritual de Bendición del Clan</h3>
          <p className="ocult-element">
            "Miedo" y lo arrojas por la borda. Intentas remar de nuevo, pero la
            embarcación sigue sobrecargada, así que a continuación arrojas el
            saco etiquetado como "Ansiedad" por la borda, luego "Negatividad",
            "Rencores", "Fracasos", ¡todos y cada uno de ellos!
          </p>
        </div>
        <ButtonCheckoutComponent />
      </div>
    </SectionSevenResultStyle>
  );
};

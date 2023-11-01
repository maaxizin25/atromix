import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { ButtonCheckoutComponent } from "../buttonCheckout";
import { SectionFourResultStyle } from "./style";
import spermImg from "../../assets/sperm.svg";

export const SectionFourResultComponent = () => {
  const { nameUser } = useContext(AppContext);
  return (
    <SectionFourResultStyle>
      <div>
        <img src={spermImg} alt="" />
        <h2>Miedos que te impiden quedar embarazada</h2>
        <span>
          {nameUser}, estás fuertemente influenciada por la idea de que la única
          familia real es aquella que tiene hijos. Por lo tanto, el embarazo es
          importante para ti por un par de razones. En primer lugar, tus padres
          finalmente reconocerán tu matrimonio como exitoso. En segundo lugar,
          deseas hacer felices a tus padres dándoles nietos. Si no puedes quedar
          embarazada, las razones pueden estar en el pasado de tu familia. Tal
          vez, tus padres o abuelos pasaron por
          <p>
            En segundo lugar, deseas hacer felices a tus padres dándoles nietos.
            Si no puedes quedar embarazada, las razones pueden estar en el
            pasado de tu familia. Tal vez, tus padres o abuelos pasaron por
          </p>
        </span>
        <ButtonCheckoutComponent />
      </div>
    </SectionFourResultStyle>
  );
};

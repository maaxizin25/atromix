import { useState } from "react";
import giftImg from "../../assets/giftImg.svg";
import { ButtonSubmitComponent } from "../buttonSubmit";
import { StepSixStyle } from "./style";
import { apiActive } from "../../services/api";

export const StepSixComponent = () => {
  const [emailUser, setEmailUser] = useState("");

  const postInActive = async () => {
    try {
      const response = await apiActive.post("", {
        email: emailUser,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    postInActive();
  };
  const handleChangeInput = (e) => {
    setEmailUser(e.target.value);
  };
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
        <form onSubmit={onSubmitForm} className="input-container">
          <label htmlFor="emailInput"></label>
          <input
            type="email"
            id="emailInput"
            required
            placeholder="Correo electrónico"
            onChange={handleChangeInput}
          />
          <p>Recibirás consejos basados en tu información personal.</p>
          <label>
            <input type="checkbox" />
            <p>Acepto el Acuerdo de Usuario, Política de Privacidad</p>
          </label>
          <div>
            <p>Todos tus datos personales están protegidos</p>
          </div>
          <ButtonSubmitComponent />
        </form>
      </div>
    </StepSixStyle>
  );
};

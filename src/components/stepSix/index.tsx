import { ChangeEvent, FormEvent, useContext, useState } from "react";
import giftImg from "../../assets/giftImg.svg";
import { ButtonSubmitComponent } from "../buttonSubmit";
import { StepSixStyle } from "./style";
import { apiActive } from "../../services/api";
import { AppContext } from "../../context/appContext";

export const StepSixComponent = () => {
  const {
    nameUser,
    signo,
    dateBirth,
    hourDateBirth,
    city,
    selectedGender,
    increamentStep,
  } = useContext(AppContext);
  const [emailUser, setEmailUser] = useState("");
  const [isSelect, setIsSelect] = useState<boolean | null>(null);

  const postInActive = async () => {
    try {
      await apiActive.post("active-send-form", {
        contact: {
          email: emailUser,
          firstName: nameUser,
          fieldValues: [
            {
              field: 2,
              value: selectedGender,
            },
            {
              field: 3,
              value: signo.signo,
            },
            {
              field: 7,
              value: `${dateBirth.day}/${dateBirth.month}/${dateBirth.year}`,
            },
            {
              field: 8,
              value: hourDateBirth,
            },
            {
              field: 9,
              value: city,
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSelect) {
      await postInActive();
      increamentStep();
    } else {
      setIsSelect(false);
    }
  };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailUser(e.target.value);
  };
  const handleChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSelect(e.target.checked);
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
            <input onChange={handleChangeChecked} type="checkbox" />
            <p>Acepto el Acuerdo de Usuario, Política de Privacidad</p>
          </label>
          {isSelect === false && <h2>Por favor acpte el acuerdo</h2>}
          <div>
            <p>Todos tus datos personales están protegidos</p>
          </div>
          <ButtonSubmitComponent />
        </form>
      </div>
    </StepSixStyle>
  );
};

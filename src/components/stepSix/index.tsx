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
    handleChangeLoading,
  } = useContext(AppContext);
  const [emailUser, setEmailUser] = useState("");

  const postInActive = async () => {
    try {
      handleChangeLoading();
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
    } finally {
      handleChangeLoading();
    }
  };

  const onSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await postInActive();
    increamentStep();
  };
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailUser(e.target.value);
  };
  return (
    <StepSixStyle>
      <div>
        <h2>
          Necesitamos tu dirección de correo electrónico para enviarte lecturas
          de ángeles.
        </h2>
        <img src={giftImg} alt="" />
        <p>
          También te enviaremos cartas.{" "}
          <b>con recomendaciones personales del ángel principal.</b>
        </p>
      </div>

      <form onSubmit={onSubmitForm} className="input-container">
        <label htmlFor="emailInput"></label>
        <input
          type="email"
          id="emailInput"
          required
          placeholder="Correo electrónico"
          onChange={handleChangeInput}
        />
        <p className="description-input">
          Recibirás consejos basados en tu información personal.
        </p>
        <div>
          <p className="footer-data">
            Todos tus datos personales están protegidos
          </p>
        </div>
        <ButtonSubmitComponent />
      </form>
    </StepSixStyle>
  );
};

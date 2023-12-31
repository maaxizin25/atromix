import { useContext, useState } from "react";
import lugarDeNascimiento from "../../assets/lugar_de_nascimiento.svg";
import { ButtonSubmitComponent } from "../buttonSubmit";
import { StepThreeStyled } from "./style";
import { AppContext } from "../../context/appContext";
import { ListContryComponent } from "../listCountry";
export const StepThreeComponent = () => {
  const {
    increamentStep,
    city,
    isInputOpen,
    inputOpenModal,
    isInputInformCityOpen,
    handleChangeSetIsInputInformCity,
    insertCity,
  } = useContext(AppContext);
  const [isInvalidCity, setIsInvalidCity] = useState(false);

  const verifyCity = () => {
    if (
      city === "Lugar de nacimiento (País)" ||
      city.length < 3 ||
      city === "Selecciona otro país"
    ) {
      setIsInvalidCity(true);
    } else {
      increamentStep();
    }
  };
  const handleChangeOpenList = () => {
    if (isInputInformCityOpen) {
      return;
    }
    inputOpenModal();
    handleChangeSetIsInputInformCity(false);
    setIsInvalidCity(false);
  };

  return (
    <StepThreeStyled>
      <div className="container-elements">
        <h2>Especifica tu lugar de nacimiento</h2>
        <p>
          Utilizamos esta información para determinar la posición y la
          influencia del planetas en tu carta natal
        </p>
        <img src={lugarDeNascimiento} alt="" />
      </div>

      <form action="">
        <div className="select-container" onClick={handleChangeOpenList}>
          <div className="selected-value">
            {isInputInformCityOpen ? (
              <input
                onChange={(e) => insertCity(e.target.value)}
                className=""
                defaultValue={city}
                placeholder="Introduce tu país"
                type="text"
              />
            ) : (
              <h2>{city}</h2>
            )}
            <div
              onClick={() => handleChangeSetIsInputInformCity(false)}
              className="arrow-down"
            ></div>
          </div>
        </div>
        {isInputOpen && <ListContryComponent />}
      </form>
      {isInvalidCity && (
        <h2 className="error-city">Por favor inserte su país</h2>
      )}
      <ButtonSubmitComponent onClick={verifyCity} />
    </StepThreeStyled>
  );
};

import { useContext } from "react";
import { SectionOneResultStyle } from "./style";
import { AppContext } from "../../context/appContext";

export const SectionOneResultComponent = () => {
  const { signo, nameUser, city, hourDateBirth, dateBirth } =
    useContext(AppContext);

  const getInfoUser = (date: typeof dateBirth) => {
    let monthToReturn = "";
    if (date.month == "1") {
      monthToReturn = `Janeiro ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "2") {
      monthToReturn = `Fevereiro ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "3") {
      monthToReturn = `Março ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "4") {
      monthToReturn = `Abril ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "5") {
      monthToReturn = `Maio ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "6") {
      monthToReturn = `Junho ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "7") {
      monthToReturn = `Julho ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "8") {
      monthToReturn = `Agosto ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "9") {
      monthToReturn = `Setembro ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "10") {
      monthToReturn = `Outubro ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "11") {
      monthToReturn = `Novembro ${date.day}, ${date.year} ${hourDateBirth}`;
    } else if (date.month == "12") {
      monthToReturn = `Dezembro ${date.day}, ${date.year} ${hourDateBirth}`;
    }
    return monthToReturn;
  };

  return (
    <SectionOneResultStyle>
      <div>
        <h2>Concepción horóscopo</h2>
        <p>Vista previa del Horóscopo</p>
        <div className="info-user">
          <h3>{nameUser}</h3>
          <p>{getInfoUser(dateBirth)}</p>
          <p>{city}</p>
        </div>
        <div className="info-signal">
          <img src={signo.img} alt="" />
          <h2>{signo.signo}</h2>
        </div>
        <div className="message-to-signal">
          <p>
            {nameUser}, hemos compilado tu carta natal y ya tenemos información
            sobre tu futura maternidad <b>con un 80% de precisión.</b>
          </p>
          <p className="description-message">
            <em>
              Esta página es una vista previa con ejemplos de la versión
              completa del horóscopo, por lo que solo tendrás acceso a parte de
              lo que revela la carta astral.
            </em>
          </p>
        </div>
      </div>
    </SectionOneResultStyle>
  );
};

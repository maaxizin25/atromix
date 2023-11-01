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
        <h2>Conception horoscope</h2>
        <p>Preview of Horoscope</p>
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
            {nameUser}, we have compiled your natal chart and already have
            information about your future motherhood{" "}
            <b>with an 80% accuracy.</b>
          </p>
          <p className="description-message">
            <em>
              This page is a preview with examples of the full version of the
              horoscope, so you will only be privy to part of what the birth
              chart reveals.
            </em>
          </p>
        </div>
      </div>
    </SectionOneResultStyle>
  );
};

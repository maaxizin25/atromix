import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { ResultNewSectionStyle } from "./style";

export const ResultNewSection = () => {
  const { nameUser, angel, currentStep } = useContext(AppContext);
  return (
    <ResultNewSectionStyle
      $step={currentStep}
      className="container-introduction-result"
    >
      <div>
        <h2>
          {nameUser}, el Arcángel {angel?.nome} HTiene las Llaves de tu Destino
          Mayor…
        </h2>
        <p>
          Este Informe Personalizado del Ángel Guardián ha sido Preparado para:
        </p>
        <table>
          <tbody>
            <tr>
              <th>Nombre</th>
              <td>{nameUser}</td>
            </tr>
            <tr>
              <th>Ángel Guardián</th>
              <td>{angel?.nome}</td>
            </tr>
          </tbody>
        </table>
        <div className="container-steps">
          <div>
            <p>Paso 1</p>
            <p>Descubre a tu Ángel Guardián</p>
          </div>
          <div>
            <p>Paso 2</p>
            <p>Conecta con tu Ángel Guardián</p>
          </div>
        </div>
      </div>
    </ResultNewSectionStyle>
  );
};

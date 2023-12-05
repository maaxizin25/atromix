import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { ResultNewSectionStyle } from "./style";

export const ResultNewSection = () => {
  const { nameUser, angel } = useContext(AppContext);
  return (
    <ResultNewSectionStyle className="container-introduction-result">
      <div>
        <h2>
          {nameUser}, Archangel {angel?.nome} Holds The Keys To Your Greater
          Destiny…
        </h2>
        <p>This Personalized Guardian Angel Report Has Been Prepared For:</p>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{nameUser}</td>
            </tr>
            <tr>
              <th>Guardian Angel</th>
              <td>Raziel</td>
            </tr>
          </tbody>
        </table>
        <div className="container-steps">
          <div>
            <p>Step 1</p>
            <p>Discover your guardian Angel</p>
          </div>
          <div>
            <p>Step 2</p>
            <p>Connect With your Guardian Angel</p>
          </div>
        </div>
      </div>
    </ResultNewSectionStyle>
  );
};

import { useContext, useEffect, useState } from "react";
import containerPlanet from "../../assets/container-planet.png";
import planetOne from "../../assets/planet_1.png";
import planetTwo from "../../assets/planet_2.png";
import planetThree from "../../assets/planet_3.png";
import planetFour from "../../assets/planet_4.png";
import checkFinish from "../../assets/checkImg.png";
import { StepCalculateHoroscopeStyle } from "./style";
import { AppContext } from "../../context/appContext";

export const StepCalculateHoroscope = () => {
  const { dateBirth, hourDateBirth, city, selectedGender, increamentStep } =
    useContext(AppContext);
  const [progress, setProgress] = useState(0);
  const [finish, setTimeFinish] = useState(false);

  const texts = [
    {
      textOne: "Fecha de nascimiento",
      textTwo: `${dateBirth.month}.${dateBirth.day}.${dateBirth.year}`,
      textThree: "Determinamos la posición del sol",
    },
    {
      textOne: "Lugar de nascimiento",
      textTwo: city,
      textThree:
        "Determinamos la posición de los planetas en la carta natal y su influencia.",
    },
    {
      textOne: "Hora de nascimiento",
      textTwo: hourDateBirth,
      textThree:
        "Determinamos el ascendente, las casas y la posicion de la luna",
    },
    {
      textOne: "Sexo:",
      textTwo: selectedGender,
      textThree: "Determinamos el equilibrio, de las energias yin yan",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex < texts.length - 1) {
        setActiveIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        setTimeFinish(true);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, texts.length]);

  useEffect(() => {
    const intervalTwo = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(intervalTwo);
      }
    }, 60);
    if (finish) {
      setTimeout(() => {
        increamentStep();
        return;
      }, 2000);
    }

    return () => {
      clearInterval(intervalTwo);
    };
  }, [progress, finish]);

  return (
    <StepCalculateHoroscopeStyle>
      <span>
        <h2>Estamos redactando su horóscopo</h2>
      </span>
      <div className="container">
        <div className="container-planet">
          <img src={containerPlanet} alt="" />
        </div>
        <div className="planet" id="planetOne">
          <img src={planetOne} alt="" />
        </div>
        <div className="planet" id="planetFour">
          <img src={planetFour} alt="" />
        </div>
        <div className="planet" id="planetTwo">
          <img src={planetTwo} alt="" />
        </div>
        <div className="planet" id="planetThree">
          <img src={planetThree} alt="" />
        </div>
      </div>
      <div className="text-container">
        {!finish ? (
          <>
            {texts.map((text, index) => (
              <div
                id="container-imgs-slide"
                key={index}
                className={index === activeIndex ? "active" : ""}
              >
                <div>
                  <h2>{text.textOne}</h2>
                  <p>{text.textTwo}</p>
                </div>
                <span>
                  <p>{text.textThree}</p>
                </span>
              </div>
            ))}
          </>
        ) : (
          <div className="check-finish">
            <img src={checkFinish} alt="" />
            <h2>El demo del Horóscopo está listo</h2>
          </div>
        )}
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="final-message">
        Por favor, espere un poco. Pronto compondremos su horóscopo.
      </p>
    </StepCalculateHoroscopeStyle>
  );
};

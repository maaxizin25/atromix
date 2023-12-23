import React, { FormEvent, createContext, useState } from "react";
import { iAppContext, iAppContextProps } from "./types";
import acuario from "../../assets/acuario.svg";
import aries from "../../assets/aries.svg";
import cancer from "../../assets/cancer.svg";
import capricornio from "../../assets/capricornio.svg";
import escorpio from "../../assets/escorpio.svg";
import geminis from "../../assets/geminis.svg";
import leo from "../../assets/leo.svg";
import libra from "../../assets/libra.svg";
import piscis from "../../assets/piscis.svg";
import sagitario from "../../assets/sagitario.svg";
import tauro from "../../assets/tauro.svg";
import virgo from "../../assets/virgo.svg";
import { angels } from "../../mock/angel";

export interface tAngels {
  nome: string;
  month: number;
  firstText: string;
  secondText: string;
  angelImg: string;
  threeText: string;
  fourText: string;
  fiveText: string;
  sixText: string;
  sevenText: string;
  eightText: string;
  nineText: string;
  teenText: string;
  elevenText: string;
  twoEvenText: string;
  threeEventText: string;
}

export const AppContext = createContext({} as iAppContext);

export const AppProvider = ({ children }: iAppContextProps) => {
  const [loading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [dateBirth, setDateBirth] = useState<iAppContext["dateBirth"]>({
    month: "1",
    day: "1",
    year: "1993",
  });
  const [signo, setSigno] = useState({
    signo: "Capricornio",
    message:
      "Los capricornianos suelen ser ambiciosos y se guían únicamente por la mente. Son reservados, fríos e irremediablemente ordenados, por lo que siempre controlan la situación y actúan con criterio, apoyándose en el sentido común. Al mismo tiempo, a los Capricornio les resulta difícil comprender sus propias emociones y las de los demás, lo que puede provocar malentendidos y discrepancias.",
    img: capricornio,
  });
  const [city, setCity] = useState("Lugar de nacimiento (País)");
  const [isInputInformCityOpen, setIsInputInformCity] = useState(false);
  const [isInputOpen, setInputOpen] = useState<boolean>(false);
  const [hourDateBirth, setHourDateBirth] = useState("");
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [nameUser, setNameUser] = useState<string>("");
  const [isInputNameValid, setIsInputNameValid] = useState<boolean>(true);
  const [angel, setAngel] = useState<tAngels | null>(null);

  const increamentStep = () => {
    if (currentStep < 9) {
      if (currentStep == 1) {
        setCurrentStep(3);
      } else if (currentStep == 7) {
        setCurrentStep(9);
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
    console.log(currentStep);
  };

  const handleChangeLoading = () => {
    setIsLoading(!loading);
  };
  const decreamentStep = () => {
    if (currentStep >= 2) {
      setCurrentStep(currentStep - 1);
    }
  };
  const saveDateBirth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDateBirth((PrevdateBirth) => ({
      ...PrevdateBirth,
      [name]: value,
    }));
  };
  const getSigno = (dateBirth: iAppContext["dateBirth"]) => {
    const day = parseInt(dateBirth.day);
    const month = parseInt(dateBirth.month);

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      setSigno({
        signo: "Capricornio",
        message:
          "Los capricornianos suelen ser ambiciosos y se guían únicamente por la mente. Son reservados, fríos e irremediablemente ordenados, por lo que siempre controlan la situación y actúan con criterio, apoyándose en el sentido común. Al mismo tiempo, a los Capricornio les resulta difícil comprender sus propias emociones y las de los demás, lo que puede provocar malentendidos y discrepancias.",
        img: capricornio,
      });
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      setSigno({
        signo: "Acuario",
        message:
          "A los acuarianos les encanta experimentar, destacar y sorprender. No tienen miedo a lo desconocido. Los acuarianos tienden a seguir sus ideas con fanatismo, pero su incapacidad para comunicarlas claramente a los demás a menudo provoca resistencia por parte de las personas cercanas a ellos, así como de la sociedad en general.",
        img: acuario,
      });
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      setSigno({
        signo: "Piscis",
        message:
          "Los Piscis son algo soñadores y tienden a vivir en su propio mundo. Estos son verdaderos idealistas cuyas cabezas están constantemente llenas de ideas que afirman la vida. Están dotados de una fuerte intuición y una excelente memoria. Pero Piscis tiende a consumirse y caer en el desaliento, por no decir depresión, sin el amor y el cuidado adecuados.",
        img: piscis,
      });
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      setSigno({
        signo: "Aries",
        message:
          "Aries tiene un carácter increíblemente fuerte e intransigente, pero es terco. Además, son los mayores optimistas. Sin embargo, hay una peculiaridad: los Aries se agotan rápidamente, por lo que a menudo dejan el trabajo sin terminar. Están en constante movimiento, por lo que no tienen tiempo para analizar y considerar cuidadosamente sus acciones, lo que puede conducir a decisiones precipitadas y movimientos en falso.",
        img: aries,
      });
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      setSigno({
        signo: "Tauro",
        message:
          "Tauro es un signo de practicidad, propiedad y seguridad financiera. Los Tauro son verdaderos conocedores de la estética. Son adictos al trabajo enérgicos que están dispuestos a trabajar día y noche para llevar un proyecto a su conclusión lógica. Los Tauro valoran la seguridad por encima de todo, por lo que a menudo no tienen prisa por salir de su zona de confort. En cuanto a sus debilidades, los Tauro son testarudos, perezosos y propensos a estallidos de celos y agresividad.",
        img: tauro,
      });
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      setSigno({
        signo: "Géminis",
        message:
          "Los Géminis son creadores incontenibles cuyas cabezas están llenas de ideas creativas y planes poco realistas. Tienen un intelecto bien desarrollado, pero al mismo tiempo no pueden quedarse quietos ni un minuto. Su opinión puede cambiar varias veces al día, ya que los demás influyen fácilmente en Géminis.",
        img: geminis,
      });
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      setSigno({
        signo: "Cáncer",
        message:
          "Los cánceres son bastante emocionales y tienen mundos internos complejos. A veces parecen firmes como una roca, pero en realidad son vulnerables y compasivos. Perciben agudamente cualquier injusticia y son sensibles a las críticas. Sin embargo, los Cáncer tienen una intuición bien desarrollada y pueden leer las emociones de otras personas, lo que los convierte en psicólogos talentosos.",
        img: cancer,
      });
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      setSigno({
        signo: "Leo",
        message:
          "Los Leo son los líderes reconocidos que se esfuerzan por destacar y captar la atención. Necesitan espectadores, o pierden el interés y la motivación. Los Leo son inteligentes, inventivos y astutos, por lo que a menudo suben a lo más alto de la escala profesional. Al ser carismáticos, los Leo también son propensos al egoísmo y la arrogancia. Miran a través del prisma del orgullo incluso a sus parejas, con lo que puede resultar difícil reconciliarse.",
        img: leo,
      });
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      setSigno({
        signo: "Virgo",
        message:
          "Las personas nacidas bajo el signo de Virgo tienen una mente aguda, atentas a los detalles y precisas. Son imágenes de modestia, moderación y honestidad. Nunca se detienen a mitad de camino de lo que ya han comenzado y siempre llevan los proyectos a una perfección sublime. Saben escuchar, dar buenos consejos y guardar secretos. Las debilidades de Virgo son la tendencia a pensar en estereotipos, la meticulosidad y la incapacidad de perdonar los errores.",
        img: virgo,
      });
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      setSigno({
        signo: "Libra",
        message:
          "El símbolo de Libra, la balanza, representa valor y compromiso. Esto dice mucho sobre el carácter de las personas nacidas bajo este signo. Los Libra luchan inconscientemente por la armonía, pero como el mundo es difícil de dividir en blanco y negro, pueden perder oportunidades atractivas mientras buscan la mejor opción.",
        img: libra,
      });
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      setSigno({
        signo: "Escorpio",
        message:
          "Los escorpio parecen llenos de contradicciones. Es como si los mejores y los peores, el bien y el mal, estuvieran luchando por sus almas. No hay tareas irresolubles para los Escorpio porque se sienten atraídos por las dificultades y pueden afrontar fácilmente situaciones estresantes. Al ser capaces de 'ver a través' de sus interlocutores, los Escorpio a menudo tienden a manipular a los demás. Las cualidades negativas de Escorpio incluyen irritabilidad, mal genio, celos y resentimiento.",
        img: escorpio,
      });
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      setSigno({
        signo: "Sagitario",
        message:
          "Los Sagitario prefieren ser libres y no les gusta tener que cargar con ninguna obligación. Tienen miedo de la rutina y la monotonía. Asumen nuevas tareas sin mirar atrás y les encanta tomar decisiones espontáneas. El lado débil de los Sagitario es la tendencia a no completar lo que han comenzado.",
        img: sagitario,
      });
    }
  };
  const getAngel = (month: number) => {
    angels.forEach((angel: tAngels) => {
      if (angel.month === month) {
        setAngel(angel);
      }
    });
  };
  const submitEvent = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getSigno(dateBirth);
    increamentStep();
  };

  const handleChangeSetIsInputInformCity = (e: boolean) => {
    setIsInputInformCity(e);
    setCity("Lugar de nacimiento (País)");
  };

  const insertCity = (e: string) => {
    if (e == "Selecciona otro país") {
      handleChangeSetIsInputInformCity(true);
      setCity("");
    } else {
      setCity(e);
    }
    setInputOpen(false);
  };

  const inputOpenModal = () => {
    setInputOpen(!isInputOpen);
  };

  const changeHourBirth = (e: string) => {
    setHourDateBirth(e);
  };
  const handleChangeGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };
  const changeName = (name: string) => {
    setNameUser(name);
    setIsInputNameValid(true);
  };

  return (
    <AppContext.Provider
      value={{
        currentStep,
        increamentStep,
        decreamentStep,
        saveDateBirth,
        dateBirth,
        submitEvent,
        signo,
        city,
        insertCity,
        isInputOpen,
        inputOpenModal,
        changeHourBirth,
        hourDateBirth,
        selectedGender,
        handleChangeGenderSelect,
        changeName,
        nameUser,
        isInputNameValid,
        setIsInputNameValid,
        handleChangeLoading,
        loading,
        isInputInformCityOpen,
        handleChangeSetIsInputInformCity,
        angel,
        getAngel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

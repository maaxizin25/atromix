import mexico from "../../assets/mexico.svg";
import chile from "../../assets/chile.svg";
import portugal from "../../assets/portugal.svg";
import canada from "../../assets/canada.svg";
import reinoUnido from "../../assets/reino unido.svg";
import suica from "../../assets/suica.svg";
import italia from "../../assets/italia.png";
import paraguai from "../../assets/paraguai.svg";
import bolivia from "../../assets/bolivia.svg";
import republica from "../../assets/republica.png";
import elSalvador from "../../assets/el salvador.svg";
import panama from "../../assets/panama.svg";
import honduras from "../../assets/honduras.svg";
import argentina from "../../assets/argentina.svg";
import uruguay from "../../assets/uruguay.svg";
import costaRica from "../../assets/costa rica.svg";
import ecuador from "../../assets/ecuador.svg";
import estadosUnidos from "../../assets/estadosUnidos.svg";
import peru from "../../assets/peru.svg";
import colombia from "../../assets/colombia.svg";
import espanha from "../../assets/espanha.svg";
import world from "../../assets/world.svg";
import { ListContryStyle } from "./style";
import { useContext } from "react";
import { AppContext } from "../../context/appContext";

export const ListContryComponent = () => {
  const { insertCity } = useContext(AppContext);
  const listCountry = [
    { pais: "México", img: mexico },
    { pais: "Chile", img: chile },
    { pais: "Portugal", img: portugal },
    { pais: "Canadá", img: canada },
    { pais: "Reino Unido", img: reinoUnido },
    { pais: "Suiza", img: suica },
    { pais: "Italia", img: italia },
    { pais: "Paraguay", img: paraguai },
    { pais: "Bolivia", img: bolivia },
    { pais: "República", img: republica },
    { pais: "El Salvador", img: elSalvador },
    { pais: "Panamá", img: panama },
    { pais: "Honduras", img: honduras },
    { pais: "Argentina", img: argentina },
    { pais: "Uruguay", img: uruguay },
    { pais: "Costa Rica", img: costaRica },
    { pais: "Ecuador", img: ecuador },
    { pais: "Estados Unidos", img: estadosUnidos },
    { pais: "Perú", img: peru },
    { pais: "Colombia", img: colombia },
    { pais: "España", img: espanha },
    { pais: "Selecciona otro país", img: world },
  ];

  return (
    <ListContryStyle>
      {listCountry.map((e, index) => (
        <li onClick={() => insertCity(e.pais)} key={index}>
          <img src={e.img} alt="" />
          <h2>{e.pais}</h2>
        </li>
      ))}
    </ListContryStyle>
  );
};

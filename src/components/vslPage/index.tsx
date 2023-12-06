import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { VslPageStyle } from "./style";

export const VslPageComponent = () => {
  const { nameUser } = useContext(AppContext);

  return (
    <VslPageStyle>
      <h2>
        Querido/a {nameUser}, Estás a punto de descubrir{" "}
        <span>
          el secreto definitivo para conectar con el Arcángel Jeremiel...
        </span>
      </h2>
      <p>(Comenzando en las próximas 24 horas...)</p>
      <div className="video-vsl">
        <iframe
          frameBorder={0}
          allowFullScreen={true}
          src="https://scripts.converteai.net/d331dfa7-f65a-427e-934f-2c0eb96fde35/players/656cd6d71413370009d9f3ee/embed.html"
          id="ifr_656cd6d71413370009d9f3ee"
          referrerPolicy="origin"
        ></iframe>
      </div>
    </VslPageStyle>
  );
};

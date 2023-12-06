import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { VslPageStyle } from "./style";

export const VslPageComponent = () => {
  const { nameUser } = useContext(AppContext);

  return (
    <VslPageStyle>
      <h2>
        Dear {nameUser}, You're About to Uncover{" "}
        <span>The Ultimate Secret To Connect With Archangel Jeremiel...</span>
      </h2>
      <p>(Starting in The Next 24 Hours...)</p>
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

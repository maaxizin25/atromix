import star from "../../assets/starReview.svg";
import { ReviewStyle } from "./style";
import perfilOne from "../../assets/perfilOne.jpeg";
import perfilTwo from "../../assets/PerfilTwo.jpeg";
import perfilThree from "../../assets/PerfilThree.jpg";
import perfilFive from "../../assets/PerfilFive.jpg";
import perfilSix from "../../assets/PerfilSix.jpeg";
import perfilEight from "../../assets/PerfilEight.jpg";
import perfilNine from "../../assets/PerfilNine.webp";
import { ButtonCheckoutComponent } from "../buttonCheckout";
export const ReviewsComponent = () => {
  return (
    <ReviewStyle>
      <div>
        <h2>Reseñas</h2>
        <ul>
          <li>
            <img className="img-perfil" src={perfilOne} alt="" />
            <h2>Lily</h2>
            <p>28.08.2023</p>
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="feedback">
              Muchas gracias por tu horóscopo y por todo el trabajo que has
              hecho. ¡hecho! Más importante aún, me diste esperanza y la fuerza
              para seguir adelante. ¡en!
            </p>
          </li>
          <li>
            <img className="img-perfil" src={perfilTwo} alt="" />
            <h2>Isabella</h2>
            <p>02.10.2023</p>
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="feedback">
              Gracias por el horóscopo detallado, Astromix. Fue la primera vez
              Alguna vez probé algo como esto, así que sospechaba un poco. Pero
              Mis temores eran completamente infundados. Tengo todas las
              respuestas a mi preguntas y diría que obtuve bastante por mi
              dinero. Fue agradable para obtener tu horóscopo y estaré encantado
              de pedir otro. Muchas gracias.
            </p>
          </li>
          <li>
            <img className="img-perfil" src={perfilThree} alt="" />
            <h2>Amelia</h2>
            <p>26.09.2023</p>
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="feedback">
              ¡Hola! Lo tengo todo, realmente me gustó su producto. ¡10 de los
              10!
            </p>
          </li>
          <li>
            <img className="img-perfil" src={perfilFive} alt="" />
            <h2>Emily</h2>
            <p>09.10.2023</p>
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="feedback">
              Me gustaría agradecerte por el horóscopo de la personalidad. Los
              hechos son alrededor del 95% de precisión. Espero que el horóscopo
              de 10 años tenga este nivel. de precisión también. Gracias.
            </p>
          </li>
          <li>
            <img className="img-perfil" src={perfilSix} alt="" />
            <h2>Ruby</h2>
            <p>26.09.2023</p>
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="feedback">
              ¡Muchas gracias! Tengo mi horóscopo personal. Aprendí mucho sobre
              mí mismo. Me sorprendió mucho la precisión con la que describía
              todo. los acontecimientos pasados en mi vida. Solía sentirme
              bastante escéptico acerca de horóscopos antes... Pero gracias a
              ti, descubriré más sobre ¡mí mismo!
            </p>
          </li>
          <li>
            <img className="img-perfil" src={perfilEight} alt="" />
            <h2>Olivia</h2>
            <p>13.10.2023</p>
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="feedback">
              ¡Muchas gracias por el interesante horóscopo! ¡Es tan yo!
            </p>
          </li>
          <li>
            <img className="img-perfil" src={perfilNine} alt="" />
            <h2>Scarlett</h2>
            <p>25.09.2023</p>
            <div>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="feedback">
              Honestamente, estoy muy sorprendido. Este horóscopo es muy
              preciso. Enfermo léelo una y otra vez. Estoy totalmente de acuerdo
              con lo de la energía femenina. Soy Estoy acostumbrado a tomar mis
              propias decisiones y no espero ayuda de nadie.
            </p>
          </li>
        </ul>
        <ButtonCheckoutComponent />
      </div>
    </ReviewStyle>
  );
};

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
        <h2>Reviews</h2>
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
              Thanks so much for your horoscope and for all the work you’ve
              done! More importantly, you gave me hope and the strength to move
              on!
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
              Thanks for the detailed horoscope, Astromix. It was the first time
              I ever tried something like this, so I was kind of suspicious. But
              my fears were completely unfounded. I got all the answers to my
              questions and I’d say I got quite a lot for my money! It was nice
              to get your horoscope and I’ll be happy to order another one.
              Thanks a lot.
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
              Hi! Got everything, really liked your product. 10 out of 10!
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
              I’d like to thank you for the personality horoscope. The facts are
              about 95% accurate. Hope that the 10-year horoscope has this level
              of accuracy too. Thank you.
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
              Thanks so much! I got my personal horoscope. Learned a lot about
              myself. I was really surprised by how accurately it described all
              the past events in my life. I used to feel quite skeptical about
              horoscopes before... But thanks to you, I’ll discover more about
              myself!
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
              Thanks so much for the interesting horoscope! It’s so me!
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
              Honestly, I’m so shocked. This horoscope is just so accurate. I’ll
              read it again and again. I totally agree about female energy. I’m
              used to making my own decisions and don’t expect help from anyone.
            </p>
          </li>
        </ul>
        <ButtonCheckoutComponent />
      </div>
    </ReviewStyle>
  );
};

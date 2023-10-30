import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import lugarDeNascimiento from "../../assets/lugar_de_nascimiento.svg";
import { ButtonSubmitComponent } from "../buttonSubmit";
import { StepThreeStyled } from "./style";
import { api } from "../../services/api";
import { AppContext } from "../../context/appContext";

export const StepThreeComponent = () => {
  const { increamentStep, city, insertCity, isInputOpen, inputOpenModal } =
    useContext(AppContext);

  const [listCity, setListCity] = useState<
    [{ city: string; country: string; regionCode: string }] | []
  >([]);
  const [isSearch, setIsSearch] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [isFoundCity, setIsFoundCity] = useState(true);
  const [isInvalidCity, setIsInvalidCity] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isInputOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputOpen]);

  useEffect(() => {
    async function getCity() {
      if (inputValue.length >= 3) {
        try {
          setIsSearch(true);
          setIsInvalidCity(false);
          const response = await api.get("", {
            params: {
              namePrefix: inputValue,
            },
          });
          const data = response.data.data;
          if (data.length === 0) {
            setIsFoundCity(false);
          } else if (data.length > 0) {
            setIsFoundCity(true);
          }
          setListCity(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsSearch(false);
        }
      } else if (inputValue.length < 3) {
        setListCity([]);
      }
    }
    getCity();
  }, [inputValue]);

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setListCity([]);
    setTimeout(() => {
      setInputValue(e.target.value);
    }, 500);
  };

  const verifyCity = () => {
    if (city === "Lugar de nacimiento (Ciudad)") {
      setIsInvalidCity(true);
    } else {
      increamentStep();
    }
  };

  return (
    <StepThreeStyled>
      <div className="container-elements">
        <h2>Especifica tu lugar de nacimiento</h2>
        <p>
          Utilizamos esta información para determinar la posición y la
          influencia del planetas en tu carta natal
        </p>
        <img src={lugarDeNascimiento} alt="" />
      </div>

      <form action="">
        <div className="select-container" onClick={inputOpenModal}>
          <div className="selected-value">
            <h2>{city}</h2>
            <div className="arrow-down"></div>
          </div>
        </div>
        {isInputOpen && (
          <span className="container-input-search-city">
            <input onChange={changeInputValue} ref={inputRef} type="text" />
            {inputValue.length < 3 && (
              <h3>Por favor ingrese 3 o más caracteres</h3>
            )}
            {isSearch && <h2 className="searching-text">Buscando...</h2>}
          </span>
        )}
      </form>
      {isInvalidCity && <h2>Please insert your city</h2>}
      {listCity.length > 0 && inputValue.length >= 3 && isInputOpen && (
        <ul className="list-of-citys">
          {listCity.map((e, index) => {
            return (
              <li
                key={index}
                onClick={() =>
                  insertCity(`${e.city}, ${e.regionCode}, ${e.country}`)
                }
              >{`${e.city}, ${e.regionCode}, ${e.country}`}</li>
            );
          })}
        </ul>
      )}
      {!isFoundCity && !isSearch && <h2>Nâo encontrado</h2>}
      <ButtonSubmitComponent onClick={() => verifyCity()} />
    </StepThreeStyled>
  );
};

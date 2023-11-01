import styled from "styled-components";

export const ButtonSubmitStyled = styled.button`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loader {
    margin: 0 auto;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #6656a9;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }
  position: absolute;
  z-index: 0;
  bottom: 0px;
  width: 100%;
  max-width: 336px;
  height: 50px;
  font-weight: 700;
  background: linear-gradient(253.58deg, #ffacf3 -14.34%, #f98989 114.83%);
  border-radius: 15px;
  color: white;
  font-size: 18px;
  @media only screen and (min-width: 600px) {
    top: 85%;
  }
`;

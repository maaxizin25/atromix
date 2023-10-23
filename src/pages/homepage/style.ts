import styled from "styled-components";

export const HomePageStyled = styled.main`
  height: 100vh;
  width: 100%;
  background-color: whitesmoke;
  .container-form {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background-color: white;
    border-radius: 0px;
  }
  @media only screen and (min-width: 600px) {
    background: linear-gradient(126.04deg, #c7b4ff 15.52%, #f49af5 91.92%);
    .container-form {
      max-width: 600px;
      border-radius: 16px !important;
      height: 750px;
    }
  }
`;

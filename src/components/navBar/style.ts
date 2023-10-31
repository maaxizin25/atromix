import styled from "styled-components";

export const NavComponentStyled = styled.nav`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  .logo {
    margin-top: 8px;
    width: 200px;
  }
  .return-button {
    position: absolute;
    left: 10px;
  }
  @media only screen and (min-width: 600px) {
    .return-button {
      display: none;
    }
    margin-bottom: 3%;
    border: 0;
  }
`;

import styled from "styled-components";

export const NavComponentStyled = styled.nav`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-bottom: 10px;
  position: relative;
  button {
    position: absolute;
    left: 2px;
  }
  @media only screen and (min-width: 600px) {
    button {
      display: none;
    }
  }
`;

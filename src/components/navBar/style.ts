import styled from "styled-components";

export const NavComponentStyled = styled.nav`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 6px solid whitesmoke;
  position: relative;
  img {
    position: absolute;
    left: 10px;
  }
  @media only screen and (min-width: 600px) {
    img {
      display: none;
    }
    margin-bottom: 3%;
    border: 0;
  }
`;

import styled from "styled-components";

export const ListContryStyle = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  width: 270px;
  height: 130px;
  z-index: 3;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6656a9; /* Cor do polegar da barra de rolagem */
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 35px;
      height: 35px;
      margin: 0;
    }
    h2 {
      font-size: 18px;
      font-weight: 500;
    }
  }
  li:hover {
    background-color: #5897fb;

    h2 {
      color: white;
    }
  }
`;

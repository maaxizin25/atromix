import styled from "styled-components";

export const ReviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    h2 {
      text-align: center;
      font-weight: 500;
      margin-bottom: 40px;
    }
    display: flex;
    flex-direction: column;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      height: 600px;
      overflow: auto;
      padding: 20px 0px;
      margin-bottom: 40px;
      &::-webkit-scrollbar {
        width: 8px; /* Largura da barra de rolagem */
      }
      &::-webkit-scrollbar-thumb {
        background-color: #6656a9; /* Cor do polegar da barra de rolagem */
      }
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        border-radius: 16px;
        box-shadow: 1px;
        text-align: center;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        gap: 10px;
        padding: 10px;
        h2 {
          margin-bottom: -10px;
        }
        .img-perfil {
          border-radius: 50%;
          width: 60px;
          height: 60px;
          object-fit: cover;
        }
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 20px;
          }
        }
      }
    }
  }
`;

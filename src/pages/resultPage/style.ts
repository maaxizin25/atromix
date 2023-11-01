import styled from "styled-components";

export const ResultPageStyle = styled.div`
  width: 100%;
  background-color: #e2e5ff;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    img {
      width: 190px;
    }
  }
  .container-box-horoscope {
    margin: 0 auto;
    background-color: white;
    max-width: 710px;
    width: 95%;
    border-radius: 8px;
    padding: 20px;
  }
  @media (min-width: 600px) {
    .container-box-horoscope {
      padding: 60px;
    }
  }
`;

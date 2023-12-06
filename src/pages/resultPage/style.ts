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
  p {
    color: black;
    font-size: 21px;
  }
  h2 {
    font-size: 35px;
    padding: 30px 0px;
  }
  .center {
    text-align: center;
  }
  .border-text {
    border-top: 3px solid #6656a9;
    border-bottom: 3px solid #6656a9;
  }
  .background-text {
    background-color: #e2e5ff;
    color: black;
    padding: 20px;
    border-radius: 16px;
  }
  .container-section-six {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .angelImg {
    width: 50%;
    margin: 0 auto;
  }
  .angelImgGlobal {
    width: 50%;
  }
  .container-box-horoscope {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    .container-section-six {
      display: flex;
      flex-direction: row;
      gap: 40px;
    }
    .container-section-six > div:nth-child(1) {
      width: 50%;
    }
    .angelImgGlobal {
      width: 162px;
    }
  }
`;

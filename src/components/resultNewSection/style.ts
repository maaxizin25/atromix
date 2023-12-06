import styled from "styled-components";
import img from "../../assets/backgroundImgContainerResult.webp";

interface step {
  $step: number;
}

export const ResultNewSectionStyle = styled.div<step>`
  background: url(${img});
  background-position: center;
  background-repeat: initial;
  background-repeat: no-repeat;
  text-align: center;
  h2 {
    color: white;
    font-size: 35px;
  }
  p {
    font-size: 20px;
    color: white;
  }
  table {
    width: 50%;
    margin: 20px auto;
    border-collapse: collapse;
    background-color: white;
  }

  td,
  th {
    border: 2px solid #6656a9;
    padding: 8px;
    color: #6656a9;
  }
  .container-steps {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    p {
      font-size: 15px;
    }
    div {
      padding: 10px;
      width: 160px;
      height: 85px;
    }
    div:nth-child(1) {
      background-color: ${(props) => props.$step === 8 && "#bc3893"};
      border: 1px solid white;
      box-shadow: 10px;
    }
    div:nth-child(2) {
      border: 1px solid white;
      background-color: ${(props) => props.$step === 9 && "#bc3893"};
    }
  }
  @media (min-width: 600px) {
    padding: 30px 150px;
    .container-steps {
      div {
        width: 100%;
        p {
          font-size: 18px;
        }
      }
    }
  }
`;

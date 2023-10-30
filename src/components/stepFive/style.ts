import styled from "styled-components";

export const StepFiveStyle = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h2 {
      font-size: 20px;
    }
  }
  .container-select-gender {
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: center;
    .select-your-gender {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      img {
        width: 100px;
        max-width: 140px;
      }
      div {
        display: flex;
        gap: 10px;
      }
      p {
        font-weight: 700;
      }
    }
  }
  .input-name {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    width: 95%;
    align-items: center;
    justify-content: center;
    input {
      width: 100%;
      max-width: 336px;
      border-radius: 16px;
      background-color: #f9efff;
      height: 50px;
      color: #6656a9;
      text-align: center;
      font-size: 18px;
      outline: none;
      border: 1px solid #c6aee0;
    }
    input::placeholder {
      text-align: center;
      font-size: 16px;
      color: #c6aee0;
      font-weight: 600;
    }
    h2 {
      margin-top: 10px;
      display: flex;
      color: red;
      font-size: 12px;
    }
  }
`;

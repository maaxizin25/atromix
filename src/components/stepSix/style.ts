import styled from "styled-components";

export const StepSixStyle = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    gap: 20px;

    p {
      padding: 0px 30px;
    }
    img {
      width: 60px;
    }
  }
  .input-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    #emailInput {
      margin-top: 20px;
      width: 100%;
      max-width: 336px;
      border-radius: 16px;
      background-color: #f9efff;
      height: 50px;
      color: #6656a9;
      padding-left: 10px;
      font-size: 18px;
      outline: none;
      border: 1px solid #c6aee0;
    }
    input::placeholder {
      color: #c6aee0;
    }
    .description-input {
      margin: 10px 0px;
      font-size: 12px;
      text-align: center;
    }
  }
  label {
    display: flex;
    gap: 10px;
    align-items: center;
    text-align: center;
    p {
      font-size: 12px;
      font-weight: 600;
    }
    input {
      width: 30px;
      height: 30px;
    }
  }
  .invalid-accept {
    color: red;
    font-size: 14px;
  }
  .footer-data {
    margin-top: 20px;
    color: #c2c2d9;
    font-size: 12px;
  }
`;

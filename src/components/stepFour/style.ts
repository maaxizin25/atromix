import styled from "styled-components";

export const StepFourStyle = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .container-itens-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    p {
      padding: 0 30px;
    }
  }
  p {
    text-align: center;
  }
  img {
    width: 120px;
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .container-input-and-hour {
      display: flex;
      align-items: center;
      justify-content: center;
      input,
      select {
        padding-left: 10px;
        border: 1px solid #c6aee0;
        height: 60px;
        color: #6656a9;
        font-weight: 700;
      }
      input {
        border-radius: 16px 0px 0px 16px;
        width: 150px;
        text-align: center;
      }
      select {
        width: 100px;
        border-radius: 0px 16px 16px 0px;
        background-color: #f9efff;
      }
    }
    .error-hour {
      color: red;
      text-align: center;
      font-size: 16px;
    }
    p {
      margin-top: 20px;
      font-size: 14px;
      padding: 0px 5px;
    }
    .user-dont-know-hour {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 0px 20px;
      input {
        width: 30px;
        height: 25px;
      }
      label {
        color: #6656a9;
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
`;

import styled from "styled-components";

export const StepFourStyle = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  p {
    text-align: center;
  }
  img {
    width: 120px;
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
        border: 1px solid gray;
        height: 45px;
      }
      input {
        border-radius: 16px 0px 0px 16px;
        width: 50%;
      }
      select {
        width: 30%;
        border-radius: 0px 16px 16px 0px;
      }
    }
    .error-hour {
      color: red;
      text-align: center;
      font-size: 16px;
    }
    .user-dont-know-hour {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 0px 20px;
      input {
        width: 30px;
        height: 25px;
        border-radius: 16px;
        border: 1px solid #c6aee0;
      }
    }
  }
`;

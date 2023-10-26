import styled from "styled-components";

export const StepSixStyle = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    img {
      width: 60px;
    }
    .input-container {
      input {
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
    }
    label {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-bottom: 20px;
      input {
        width: 30px;
        height: 30px;
        border-radius: 16px;
      }
    }
  }
`;

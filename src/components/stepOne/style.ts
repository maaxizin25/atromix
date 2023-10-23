import styled from "styled-components";

export const StepOneStyled = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  .telescope-img {
    width: 151px;
  }
  .select-your-data {
    width: 80%;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    select {
      min-width: 70px;
      height: 45px;
      border-radius: 16px;
      background-color: #f9efff;
      color: #6656a9;
      border: 1px solid #c6aee0;
      font-weight: 700;
      font-size: 16px;
      outline: none;
    }
  }
`;

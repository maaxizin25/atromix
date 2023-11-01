import styled from "styled-components";

export const StepThreeStyled = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .container-elements {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
  }
  form {
    width: 270px;
  }
  .select-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border: 0;
    color: black;
    border: 1px solid #c7b4ff;
    border-radius: 16px;
    background-color: #f9efff;
  }
  input {
    width: 80%;
    height: 40px;
    outline: none;
    border: none;
    color: #c7b4ff;
    font-size: 16px;
    background-color: #f9efff;
  }

  p {
    padding: 0px 20px;
  }

  img {
    width: 150px;
    margin-bottom: 20px;
  }
  .selected-value {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    margin: 0 auto;
    h2 {
      font-size: 16px;
    }
  }
  .arrow-down {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
  .error-city {
    margin-top: 10px;
    font-size: 16px;
    color: red;
  }

  .arrow-down {
    border-top: 6px solid gray; /* Define a cor da seta para baixo */
  }
`;

import styled from "styled-components";

export const StepThreeStyled = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  form {
    width: 270px;
  }
  .select-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border: 0;
    color: black;
    border: 1px solid #c7b4ff;
    border-radius: 16px;
  }
  input {
    margin-top: -10px;
    height: 50px;
    outline: none;
  }
  .container-input-search-city {
    display: flex;
    flex-direction: column;
    input {
      border: 0px;
      color: #c7b4ff;
      font-size: 16px;
      padding: 10px;
    }
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

  .arrow-down {
    border-top: 6px solid gray; /* Define a cor da seta para baixo */
  }
  .list-of-citys {
    display: flex;
    flex-direction: column;
    width: 270px;
    z-index: 1;
    li {
      display: flex;
      align-items: center;
      text-align: start;
      background-color: #f4efff !important;
      padding: 10px;
      height: 50px;
      font-weight: 700;
      font-size: 16px;
    }
  }
`;

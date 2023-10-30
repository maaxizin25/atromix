import styled from "styled-components";

export const StepTwoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  margin-top: 20px;
  p {
    padding: 0px 20px;
  }
  img {
    width: 150px;
    margin-bottom: 30px;
  }

  @media (min-width: 600px) {
    p {
      padding: 0 40px;
      font-size: 18px;
    }
  }
`;

import styled from "styled-components";

export const SectionEightResultStyle = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h2 {
      text-align: center;
      font-weight: 500;
      font-size: 28px;
    }
    img:nth-child(1) {
      width: 80px;
    }

    img:nth-child(3) {
      width: 100%;
    }
    p {
      width: 100%;
      display: flex;
      margin-bottom: 30px;
      text-align: start;
    }
  }
`;

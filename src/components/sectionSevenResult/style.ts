import styled from "styled-components";

export const SectionSevenResultStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    img {
      width: 80px;
    }
    h2 {
      font-weight: 500;
    }
    h3 {
      color: #5c569d;
      font-size: 20px;
    }
    .description-texts {
      display: flex;
      flex-direction: column;
      text-align: start;
      gap: 20px;
      margin-bottom: 20px;
      p {
        color: #2f2949;
      }
      .ocult-element {
        filter: blur(6px);
      }
      h3 {
        text-align: center;
      }
    }
  }
`;

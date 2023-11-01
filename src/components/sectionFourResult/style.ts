import styled from "styled-components";

export const SectionFourResultStyle = styled.div`
  display: flex;
  div:nth-child(1) {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    h2 {
      text-align: center;
      font-weight: 500;
    }
    span {
      display: inline;
      color: #2f2949;
      margin-bottom: 20px;
      p {
        display: inline;
        filter: blur(6px);
      }
    }

    img {
      width: 100px;
    }
  }
`;

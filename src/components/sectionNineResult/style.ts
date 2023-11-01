import styled from "styled-components";

export const SectionNineResultStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 40px;
  h2 {
    text-align: center;
    font-weight: 500;
    font-size: 26px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    li {
      display: flex;
      flex-direction: row;
      padding: 15px 0px;
      gap: 20px;
      border-bottom: 1px dotted rgba(47, 41, 73, 0.2);
      img {
        width: 25px;
        height: 25px;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;

import styled from "styled-components";

export const SectionOneResultStyle = styled.div`
  display: flex;
  flex-direction: column;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    .info-user {
      padding-bottom: 20px;
      border-bottom: 1px dotted rgba(47, 41, 73, 0.2);
    }
    .info-signal {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 30px;
      img {
        width: 100px;
      }
      h2 {
        font-size: 16px;
        font-weight: 600;
        color: #2f2949;
      }
    }
    .message-to-signal {
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: start;
      padding-bottom: 20px;
      border-bottom: 1px dotted rgba(47, 41, 73, 0.2);
      p:nth-child(1) {
        color: #2f2949;
      }
      p:nth-child(2) {
        color: rgba(47, 41, 73, 0.7);
      }
    }
  }
`;

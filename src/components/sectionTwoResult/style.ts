import styled from "styled-components";

export const SectionTwoResultStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
    img {
      width: 170px;
    }
    h2 {
      margin-bottom: 20px;
      font-weight: 500;
    }
    p:nth-child(3) {
      color: #52458a !important;
      margin-bottom: 20px;
    }
    p:nth-child(4) {
      color: #2f2949 !important;
      text-align: start;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
      border-bottom: 1px solid rgba(47, 41, 73, 0.2);
      padding: 20px;
      span {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #7056e4 !important;
        font-weight: 600;
        p {
          filter: blur(5px);
        }
      }
      img {
        width: 50px;
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    flex-direction: column;
    background-color: #f1ecff;
    padding: 20px;
    border-radius: 16px;
    border: 1px dotted rgba(47, 41, 73, 0.2);
    div:nth-child(1) {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      border-bottom: 1px dotted rgba(47, 41, 73, 0.2);
      img {
        width: 30px;
        position: absolute;
        top: 0;
        left: 0;
      }
      h2 {
        font-size: 16px;
        font-weight: 600;
        margin: 0 auto;
      }
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 20px 0px 0px 0px;
      p:nth-child(2) {
        filter: blur(5px);
      }
    }
  }
  div:nth-child(4) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    h2 {
      font-weight: 500;
    }
  }
`;

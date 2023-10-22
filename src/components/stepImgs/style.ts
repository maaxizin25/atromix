import styled from "styled-components";

interface progress {
  $progress: number;
}

export const StepImgsStyled = styled.div<progress>`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 270px;
  gap: 10px;
  .container-imgs {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container-bar {
    margin: 0 auto;
    height: 10px;
    width: 100%;
  }
  .color-bar {
    width: ${(props) => props.$progress}%;
    height: 100%;
    border-radius: 16px;
    background-color: #6656a9;
  }
`;

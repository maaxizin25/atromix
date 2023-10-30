import styled from "styled-components";

export const ReturnButtonStyle = styled.img`
  display: none;
  @media only screen and (min-width: 600px) {
    display: flex;
    position: absolute;
    top: 20px;
    left: 10px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

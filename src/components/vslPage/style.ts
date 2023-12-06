import styled from "styled-components";

export const VslPageStyle = styled.div`
  h2 {
    text-align: center;
    font-size: 26px;
  }
  p {
    text-align: center;
    color: red;
    margin-bottom: 10px;
  }
  span {
    text-decoration: underline;
  }
  .video-vsl {
    padding: 150% 0 0 0;
    position: relative;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

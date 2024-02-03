import styled from "styled-components";

export const VslPageStyle = styled.div`
  h2 {
    text-align: center;
    font-size: 22px;
  }
  span {
    text-decoration: underline;
  }
  .video-vsl {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 150% 0 0 0;
    position: relative;
    height: 600px;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 50;
    margin: 0 auto;
    height: 100%;
  }
  video {
    width: 100px;
  }
  @media (min-width: 600px) {
    iframe {
      width: 100%;
    }
  }
`;

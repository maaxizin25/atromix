import styled from "styled-components";

export const StepCalculateHoroscopeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    position: relative;
    width: 100px;
    max-width: 220px;
    height: 200px;
    margin: 0 auto;
    animation: spin 3s linear infinite;
  }

  .container-planet {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    margin-top: -40px;
    margin-left: -40px;
  }

  .planet {
    position: absolute;
    border-radius: 20%;
    animation: orbit 2s linear infinite;
  }

  #planetOne {
    animation-delay: 0s;
    top: 0px;
    left: 20px;
  }

  #planetTwo {
    animation-delay: 0s;
    top: 80px;
    left: 10px;
  }

  #planetThree {
    animation-delay: 0s;
    top: 50px;
    left: 15px;
  }

  #planetFour {
    animation-delay: 10s;
    top: 50px;
    left: 85px;
  }
  .text-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin-top: 80px;
    .finish_calculate {
    }
    #container-imgs-slide {
      width: 80%;
      display: flex;
      gap: 20px;
      flex-direction: column;
      position: absolute;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      &.active {
        opacity: 1;
      }
      div:nth-child(1) {
        display: flex;
        align-items: start;
        justify-content: space-between;
        padding: 10px 0px;
        border-bottom: 1px solid gray;
        h2 {
          font-size: 18px;
          font-weight: 400;
        }
        p {
          width: 30%;
        }
      }
      span {
        p {
          text-align: start;
          padding: 10px 0px;
        }
        border-bottom: 1px solid gray;
      }
    }
  }
  .progress-container {
    width: 80%;
    margin-top: 280px;
    height: 20px;
    border-radius: 32px;
    position: relative;
  }

  .progress-bar {
    border-radius: 32px;
    height: 100%;
    background: linear-gradient(to left, #ff69b4, #800080, #00bfff);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .check-finish {
    position: absolute;
  }
  .final-message {
    padding: 20px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes spinTwo {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  @keyframes orbit {
    0% {
      transform: translateX(0) translateY(-10px);
    }
    100% {
      transform: translateX(0) translateY(-10px) rotate(360deg);
    }
  }
`;

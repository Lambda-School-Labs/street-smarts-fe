import styled from 'styled-components';

const CarDetailsStyles = styled.div`
  .carDetails {
    width: 70vw;
    display: flex;
    justify-content: space-between;
    background-color: rgb(0,0,0);
    border: none;
    .ant-card-body {
      padding: 0;
      margin-top: 10vh;
      margin-bottom: 10vh;
    }

    .carText {
      width: 45%;
      background-color: rgba(0,0,0,0);
      border: none;

      .divider {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    .carImg {
      width: 45%;
      background-color: rgba(0,0,0,0);
      border: none;
      padding: 0px;

      svg {
        width: 100%;
      }
      rect {
        width: 100%
      }

      .cto {
        font-size: 2rem;
      }
    }
  }
  .gauge {
      width: 100%;
      height: 40%;
      .co2-text {
        font-size: 16px;
      }
  }
  .mpg {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      text-align: center;
    }
    vl {
      border-left: 1px solid white;
      height: 50px;
      position: absolute;
      margin: 0;
    }
  }
  .compare-button {
    margin:20%;
  }
`;

export const Fullscreen = styled.button`
    background: transparent;
    border: none;
    width: 22%;
    height: 16%;
`;

export default CarDetailsStyles;
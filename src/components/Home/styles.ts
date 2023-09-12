import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    background-color: black;
  }
`;
export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("assets/gym.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  .anchor {
    width: 50px;
    height: 50px;
    background-color: #cd0003;
    left: 94%;
    top: 90%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    .material-symbols-outlined {
      color: #fff;
      font-size: 60px;
    }
  }
  .join {
    height: 300px;
    width: 600px;
    color: #fff;
    margin: 3rem;
    position: relative;
    top: 100px;
    left: 100px;
    font-family: "Teko", sans-serif;
    h2 {
      font-size: 40px;
      padding-bottom: 2rem;
    }
    p {
      font-size: 30px;
      padding-bottom: 2rem;
    }
    button {
      width: 300px;
      height: 50px;
      border-radius: 8px;
      background: #cd0003;
      border: none;
      color: #fff;
      font-family: "Teko", sans-serif;
      font-weight: 600;
      font-size: 20px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
        rgba(0, 0, 0, 0.22) 0px 15px 12px;
      &:hover {
        background: #fff;
        color: black;
      }
    }
  }
  .power {
    color: #cd0003;
  }
  @media (max-width: 768px) {
    .join {
      color: #fff;
      top: 100px;
      left: 1%;
      max-width: 400px;
      width: auto;

      h2 {
        font-size: 30px;
        padding-bottom: 0;
      }
      p {
        font-size: 20px;
        padding-bottom: 1rem;
      }
      button {
        width: 200px;

        font-size: 20px;
      }
    }
    .power {
      color: #cd0003;
    }
    width: auto;
    background-size: cover; /* Altere o tamanho do plano de fundo para conter */
    background-position: 35%;
    .anchor {
      width: 30px;
      height: 30px;
      background-color: #cd0003;
      left: 48%;
      top: 92%;

      .material-symbols-outlined {
        color: #fff;
        font-size: 30px;
      }
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-image: url("/src/assets/gym.png");

  .join {
    height: 300px;
    width: 600px;
    color: #fff;
    margin: 3rem;
    position: relative;
    top: 100px;
    left: 100px;
    font-family: "Audiowide", cursive;
    font-family: "Roboto", sans-serif;
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
      font-family: "Audiowide", cursive;
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      font-size: 20px;
    }
  }
  .power {
    color: #cd0003;
  }
`;

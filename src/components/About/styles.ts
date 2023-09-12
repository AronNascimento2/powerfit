import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: "Audiowide", cursive;
  font-family: "Roboto", sans-serif;
  height: 80vh;
  gap: 2rem;
  .about-box {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 450px;
  }
  img {
    height: 500px;
    width: 500;
    box-shadow: 8px 8px 0 0 rgba(200, 0, 0, 0.8);
  }
`;

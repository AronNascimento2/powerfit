import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100vh;
  background-image: url("assets/newbg.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  .about {
    p {
      font-size: 18px;
    }

    overflow: auto;
  }

  .about-box {
    font-family: "Teko", sans-serif;

    position: relative;
    right: 100px;
    height: 400px;
    width: 600px;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    align-items: center;
    border-left: 8px solid #e30000;
    padding: 2rem;
    border-radius: 12px 0 0 12px;
    background-color: #fff;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    h2 {
      font-family: "Teko", sans-serif;
      font-size: 40px;
      line-height: 3rem;
      color: #cd0003;
    }
  }
  .gym-photo {
    height: 500px;
    max-width: 100%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-position: 64%;

    .about-box {
      max-width: 500px;
      width: auto;
      left: 5px;
      height: auto; /* Altere a altura para automático */
      margin: 1rem;
      h2 {
        font-size: 30px;
      }
    }

    .gym-photo {
      margin: 1rem;

      max-width: 100%; /* Defina uma largura máxima de 100% para a imagem */
      height: auto; /* Deixe a altura ajustar automaticamente para manter a proporção */
    }
  }

  p {
    font-size: 16px; /* Reduza o tamanho da fonte para telas menores */
    word-wrap: break-word;
  }
`;

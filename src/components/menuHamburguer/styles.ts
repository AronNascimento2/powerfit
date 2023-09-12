import styled, { keyframes } from "styled-components";
export const Wrapper = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo semi-transparente */
    z-index: 999; /* Garante que a camada de fundo esteja acima de outros elementos */
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  flex-direction: column;

  .bar {
    height: 2px;
    width: 50px;
    background: #fff;
    border-radius: 20px;
  }
`;
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;
export const Modal = styled.div`
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #fff;
  color: black;
  transform: translateX(-100%); /* Inicia fora da tela à esquerda */
  animation: ${slideIn} 0.5s ease-in-out forwards; /* Usa a animação slideIn */
  @media (max-width: 768px) {
    transform: translateX(0); /* Volta para a posição normal à direita */

    ul {
      flex-direction: column;
      padding-top: 2rem;
      display: flex;
      span {
        color: black;
      }
    }
  }
`;

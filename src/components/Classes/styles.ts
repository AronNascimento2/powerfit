import styled, { css } from "styled-components";

type props = {
  image?: string;
};
export const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem;
  height: 80vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: grey;
  h2 {
    font-family: "Audiowide", cursive;
    font-family: "Roboto", sans-serif;
    color: #fff;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Card = styled.div<props>`
  ${({ image }) => css`
    background-image: url(${image});
    background-size: contain;
    background-repeat: no-repeat;
    height: 400px;
    width: 225px;
    border-radius: 10px;
    box-shadow: 8px 8px 0 0 rgba(232, 232, 232, 0.8);
  `}
`;

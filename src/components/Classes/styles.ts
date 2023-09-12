import styled, { css } from "styled-components";

type CardProps = {
  src?: string;
  isHovered?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  height: 100vh;

  .wrapper-title {
    position: relative;
    bottom: 50px;
    margin-bottom: 4rem;
    border-radius: 12px 0 0 12px;
    align-self: flex-end;
    display: flex;
    border-left: 8px solid #e30000;
    align-items: center;
    padding: 1rem;
    width: 400px;
    height: 200px;
    background-color: black;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    font-size: 51px;
  }
  h3 {
    font-family: "Teko", sans-serif;
  }
  @media (max-width: 768px) {
    width: 100%;
    .wrapper-title {
      bottom: 140px;
      height: 100px;
      max-width: 300px;
    }

    h3 {
      font-size: 40px;
    }
  }
`;

export const Card = styled.div<CardProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-size: cover;
    height: 600px;
    width: 400px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: transform 0.3s, opacity 0.3s;
    @media (max-width: 768px) {
      height: 400px;
      width: 300px;
    }
    &:hover {
      transform: translateY(-10px);
      opacity: 0.8;
    }
  `}
`;

export const Wrapper = styled.div<CardProps>`
  padding: 1rem;
  width: 100%;
  overflow: auto;
  padding-bottom: 4rem;

  .content {
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    .content {
      gap: 1rem;
      width: 1500px;
      display: flex;
    }
  }
`;

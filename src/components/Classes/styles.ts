import styled, { css } from "styled-components";

type CardProps = {
  src?: string;
  isHovered?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: 100%;
  background-color: #fff;
  font-family: "Teko", sans-serif;

  .wrapper-title {
    position: relative;
    bottom: 50px;
    justify-content: flex-start;
    border-radius: 12px 0 0 12px;
    align-self: flex-end;
    display: flex;
    border-left: 8px solid #e30000;
    align-items: center;
    padding: 1rem;
    width: 400px;
    height: 150px;
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
      bottom: 35px;
      height: 100px;
      max-width: 200px;
    }

    h3 {
      font-size: 30px;
    }
  }
`;

export const Card = styled.div<CardProps>`
  ${({ src }) => css`
    background-image: url(${src});
    background-size: cover;
    width: 350px;
    height: 500px;
    border-radius: 10px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #fff;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
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

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;

  justify-content: center;
  padding: 1rem;
  padding-bottom: 4rem;
  justify-content: center;
  flex-wrap: wrap;
  .content {
    gap: 0.5rem;
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

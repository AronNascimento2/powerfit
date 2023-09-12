import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: 100vh;

  background-image: url("assets/new.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Teko", sans-serif;
  .wrapper-title {
    position: relative;
    bottom: 50px;
    margin-bottom: 4rem;
    justify-content: flex-end;
    border-radius: 0 12px 12px 0;
    align-self: flex-start;
    display: flex;
    border-right: 8px solid #e30000;
    align-items: center;
    padding: 1rem;
    width: 400px;
    height: 200px;
    background-color: #fff;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    font-size: 51px;
  }
  h3 {
    font-family: "Teko", sans-serif;
  }
  @media (max-width: 768px) {
    width: 100%;
    background-position: 70%;

    .wrapper-title {
      bottom: 80px;

      height: 100px;
      max-width: 300px;
    }

    h3 {
      font-size: 40px;
    }
  }
`;
export const Card = styled.div`
  width: auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .title {
    width: 200px;
    height: 60px;
    font-size: 20px;
    background: black;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  .money {
    color: #cd0003;
  }
  p {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 2rem;
  }
  ul {
    font-family: "Teko", sans-serif;
    list-style-type: none;
    line-height: 2rem;
    margin-bottom: 2rem;

    li {
      font-size: 25px;
    }
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
    margin: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    height: 500px;
    width: 300px;
    .title {
      width: 100%;
      margin-bottom: 0;
    }
    p {
      font-weight: 600;
      font-size: 30px;
      margin-bottom: 0;
    }
    ul {
      margin-bottom: 0;
    }
    button {
      width: 150px;
      height: 50px;
      font-weight: 500;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
type props = {
  src?: string;
};

export const StyledImage = styled.div<props>`
  ${({ src }) => css`
    background-image: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 -100px;
    height: 300px;
    width: 100%;
    border-radius: 10px 10px 0 0;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      margin-bottom: 0;

      background-position: 0 -20px;
    }
  `}
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: auto;
  overflow: auto;
  padding: 1rem;
  padding-bottom: 4rem;
  justify-content: center;
  .content {
    gap: 0.5rem;
    width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    justify-content: initial;
  }
`;

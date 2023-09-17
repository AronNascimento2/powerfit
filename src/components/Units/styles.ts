import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  height: 100%;
  padding: 1rem;
  background-color: #fff;
  font-family: "Teko", sans-serif;
  .wrapper-title {
    position: relative;
    bottom: 60px;
    right: 19px;

    border-radius: 0 12px 12px 0;

    justify-content: flex-end;
    border-right: 8px solid #e30000;
    align-self: flex-start;
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 400px;
    height: 150px;
    background-color: #fff;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    font-size: 51px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    .wrapper-title {
      bottom: 50px;
      height: 100px;
      max-width: 200px;
    }

    h3 {
      font-size: 30px;
    }
  }
`;
export const Card = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
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
  }
  .money {
    color: #cd0003;
  }
  p {
    font-weight: 600;
    font-size: 30px;
  }

  @media (max-width: 768px) {
    height: 400px;
    width: 300px;
  }
  .title {
    width: 100%;
    margin-bottom: 0;
  }
`;
type props = {
  image?: string;
};

export const Image = styled.div<props>`
  ${({ image }) => css`
    background-image: url(${image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 -100px;

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

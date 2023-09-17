import styled from "styled-components";

export const Container = styled.div`
  .menu {
    display: flex;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 2rem;
    gap: 10rem;
    font-family: "Teko", sans-serif;
  }
  h1 {
    font-size: 50px;

    margin-right: 10rem;
  }
  .power {
    color: #cd0003;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  nav,
  ul {
    color: #fff;
    display: flex;
    gap: 1rem;
    list-style-type: none;
    align-items: center;
    font-size: 25px;
    span {
      &:hover {
        padding: 0.5rem;
        border: 2px solid #cd0003;
        cursor: pointer;
        border-radius: 10px;
      }
    }
  }
  @media (max-width: 768px) {
    nav,
    ul {
      align-items: flex-start;
      padding-left: 2rem;
    }
    .menu {
      gap: 0;
      justify-content: space-between;
    }
    h1 {
      font-size: 30px;
    }
  }
`;
export const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    nav {
      display: none;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  .menu {
    color: #fff;
    display: flex;
    padding: 2rem;
    width: 800px;
    justify-content: space-between;
    font-family: "Audiowide", cursive;
    font-family: "Roboto", sans-serif;
  }
  .power {
    color: #cd0003;
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
        padding: 1rem;
        border: 1px solid #fff;
        cursor: pointer;
        border-radius: 10px;
      }
    }
  }
`;
export const Wrapper = styled.div`
  width: 100;
  background: rgba(0, 0, 0, 0.5);
`;

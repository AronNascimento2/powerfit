import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  height: 100vh;
  .wrapper-title {
    position: relative;
    bottom: 200px;
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
      bottom: 80px;
      height: 100px;
      max-width: 300px;
    }

    h3 {
      font-size: 40px;
    }
  }
`;
export const Wrapper = styled.div`
  display: flex;
  font-family: "Teko", sans-serif;
  justify-content: center;
  gap: 1rem;
  span {
    font-size: 30px;
    align-items: center;
  }
  p {
    font-size: 20px;
    color: gray;
  }
  .texts {
    display: flex;
    flex-direction: column;

    width: 300px;
    margin-bottom: 1rem;
  }
  .inputs {
  }
  button {
    width: 300px;
    height: 50px;
    border-radius: 8px;
    background: #cd0003;
    border: none;
    margin-top: 1rem;
    color: #fff;
    font-family: "Teko", sans-serif;
    font-weight: 600;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    &:hover {
      background: #fff;
      color: black;
    }
  }
  input {
    border-radius: 10px;
    width: 100%;
    max-width: 500px;
    height: 40px;
    margin-bottom: 1rem;
    border: 1px solid lightgray;
    padding: 1rem;
  }
  textarea {
    max-width: 500px;
    width: 100%;
    height: 300px;
    resize: none;
    padding: 1rem;
    border: 1px solid lightgray;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .inputs {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    input {
      max-width: 400px;
    }
    textarea {
      max-width: 400px;
    }
  }
`;

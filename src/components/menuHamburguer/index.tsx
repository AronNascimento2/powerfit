import { useState } from "react";
import "./styles"; // Estilização CSS
import { Container, Modal, Wrapper } from "./styles";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      {isOpen && <div className="backdrop" onClick={toggleMenu}></div>}
      <Container onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </Container>
      {isOpen && (
        <Modal>
          {" "}
          <ul>
            <li>
              <a href="#home">
                {" "}
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#units">
                {" "}
                <span>Unidades</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <span>Sobre nós</span>
              </a>
            </li>
            <li>
              <a href="#classes">
                <span>Modalidades</span>
              </a>
            </li>

            <li>
              <a href="#plans">
                <span>Matricule-se</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contato</span>
              </a>
            </li>
          </ul>
        </Modal>
      )}
    </Wrapper>
  );
};

export default BurgerMenu;

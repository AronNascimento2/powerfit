import BurgerMenu from "../menuHamburguer";
import { Container, Wrapper } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <div className="menu">
          <h1>
            <a href="#home">
              <span className="power">POWER</span>FIT
            </a>
          </h1>

          <nav>
            <ul>
              <li>
                <a href="#units">
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
          </nav>
          <BurgerMenu />
        </div>
      </Wrapper>
    </Container>
  );
};

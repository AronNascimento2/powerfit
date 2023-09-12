import { Container, Wrapper } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <div className="menu">
          <h1>
            <span className="power">POWER</span>FIT
          </h1>

          <nav>
            <ul>
              <li>
                <span>Sobre nós</span>
              </li>
              <li>
                <span>Treinos</span>
              </li>
              <li>
                <span>Matricule-se</span>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

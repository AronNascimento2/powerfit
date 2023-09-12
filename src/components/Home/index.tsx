import { Header } from "../Header";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header />
      <div className="join">
        <h2>
          Seja um aluno <span className="power">POWER</span>FIT
        </h2>
        <p>conheça nossas unidades.</p>
        <button>Matricule-se</button>
      </div>
    </Container>
  );
};

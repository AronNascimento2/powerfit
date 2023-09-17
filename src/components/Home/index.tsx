import { Header } from "../Header";
import { Background, Container } from "./styles";
import { useEffect, useState } from "react";

export const Home = () => {
  const [showAnchor, setShowAnchor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Verifique se o usuário rolou a página para baixo
      if (window.scrollY > 0) {
        setShowAnchor(true);
      } else {
        setShowAnchor(false);
      }
    };

    // Adicione um ouvinte de evento para o evento de rolagem
    window.addEventListener("scroll", handleScroll);

    // Remova o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container>
      <Background>
        <Header />
        <div className="join">
          <h2>
            Seja um aluno <span className="power">POWER</span>FIT
          </h2>
          <p>Conheça nossas unidades.</p>
          <button>Matricule-se</button>
        </div>

        {showAnchor && (
          <a href="#home">
            <div className="anchor">
              <span className="material-symbols-outlined">expand_less</span>
            </div>
          </a>
        )}
      </Background>
    </Container>
  );
};

import { useEffect, useState } from "react";
import { Card, Container, Wrapper } from "./styles";

export const Units = () => {
  const plans = [
    {
      id: 1,
      title: "Paulista",

      img: "assets/beginner.png",
    },
    {
      id: 2,
      title: "Perdizes",

      img: "assets/womanbuilder.png",
    },
    {
      id: 3,
      title: "São Miguel",

      img: "assets/bodybuilder.png",
    },
    {
      id: 4,
      title: "Tatuapé",

      img: "assets/bodybuilder.png",
    },
    {
      id: 5,
      title: "Itaquera",

      img: "assets/bodybuilder.png",
    },
    {
      id: 6,
      title: "Mogi das Cruzes",

      img: "assets/bodybuilder.png",
    },
  ];
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
      {showAnchor && (
        <div className="wrapper-title">
          {" "}
          <h3>UNIDADES</h3>
        </div>
      )}
      <Wrapper>
        {plans.map((plan) => (
          <Card key={plan.id}>
            <p>{plan.title}</p>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

import { Card, Container, StyledImage, Wrapper } from "./styles";

export const Plans = () => {
  const plans = [
    {
      id: 1,
      title: "Iniciante",
      value: "100,00",
      workouts: ["Musculação", "Cross-fit", "Pilates", "Spinning"],
      img: "assets/beginner.png",
    },
    {
      id: 2,
      title: "Intermediario",
      value: "250,00",
      workouts: ["Musculação", "Cross-fit", "Pilates", "Spinning"],
      img: "assets/womanbuilder.png",
    },
    {
      id: 3,
      title: "Avançado",
      value: "500,00",
      workouts: ["Musculação", "Cross-fit", "Pilates", "Spinning"],
      img: "assets/bodybuilder.png",
    },
  ];

  return (
    <Container>
      <div className="wrapper-title">
        {" "}
        <h3>MATRICULE-SE</h3>
      </div>
      <Wrapper>
        <div className="content">
          {plans.map((plan) => (
            <Card key={plan.id}>
              <StyledImage src={plan.img}></StyledImage>
              <span className="title">{plan.title}</span>
              <p>
                R$ <span className="money">{plan.value}</span> mensais
              </p>
              <ul>
                {plan.workouts.map((workout, index) => (
                  <li key={index}>{workout}</li>
                ))}
              </ul>
              <button>Contratar</button>
            </Card>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

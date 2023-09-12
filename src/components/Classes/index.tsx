import { Card, Container, Wrapper } from "./styles";

export const Classes = () => {
  const classes = [
    {
      img: "src/assets/muaythai.png",
    },
    {
      img: "src/assets/jiu.png",
    },
    {
      img: "src/assets/pilates.png",
    },
    {
      img: "src/assets/muscle.png",
    },
    {
      img: "src/assets/spinning.png",
    },
  ];
  return (
    <Container>
      <h2>TREINOS</h2>
      <Wrapper>
        {classes.map((c) => {
          return <Card image={c.img}>{c.title}</Card>;
        })}
      </Wrapper>
    </Container>
  );
};

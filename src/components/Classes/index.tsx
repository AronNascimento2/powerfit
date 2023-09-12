import { Card, Container, Wrapper } from "./styles";

export const Classes = () => {
  const classes = [
    {
      img: "assets/muaythai.png",
      title: "Muay Thai",
      hours: "quinta 19:00",
    },
    {
      img: "assets/jiu.png",
      title: "Jiu Jitsu",
      hours: "quinta 19:00",
    },
    {
      img: "assets/pilates.png",
      title: "Pilates",
      hours: "quinta 19:00",
    },
    {
      img: "assets/muscle.png",
      title: "Musculação",
      hours: "quinta 19:00",
    },
    {
      img: "assets/spinning.png",
      title: "Spinning",
      hours: "quinta 19:00",
    },
  ];

  return (
    <Container>
      <div className="wrapper-title">
        {" "}
        <h3>MODALIDADES</h3>
      </div>
      <Wrapper>
        <div className="content">
          {classes.map((c) => (
            <Card src={c.img} key={c.img}></Card>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

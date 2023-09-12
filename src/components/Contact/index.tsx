import { Container, Wrapper } from "./styles";

export const Contact = () => {
  const handleClick = () => {
    alert("Enviado com sucesso");
  };
  return (
    <Container>
      <div className="wrapper-title">
        {" "}
        <h3>CONTATO</h3>
      </div>
      <Wrapper>
        <div className="texts">
          <span>ENVIE SUA MENSAGEM</span>
          <p>
            Entre em contato com a equipe através do nosso e-mail
            suporte@powerfit.com.br ou preenchendo o formulário de contato ao
            lado.
          </p>
        </div>
        <div className="contents">
          {" "}
          <div className="inputs">
            <input type="text" placeholder="Nome Completo" />
            <input type="text" placeholder="Email" />
            <textarea name="" id="" placeholder="Mensagem"></textarea>
          </div>
          <button onClick={handleClick}>Enviar</button>
        </div>
      </Wrapper>
    </Container>
  );
};

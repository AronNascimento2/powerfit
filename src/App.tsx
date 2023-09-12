import "./App.css";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Classes } from "./components/Classes";
import { Plans } from "./components/Plans";
import { Units } from "./components/Units";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="units">
        {" "}
        <Units />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="classes">
        {" "}
        <Classes />
      </section>
      <section id="plans">
        <Plans />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import { About } from "./components/About";
import { Classes } from "./components/Classes";
import { Home } from "./components/Home";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Home />
      <About />
      <Classes />
      <Footer />
    </>
  );
}

export default App;

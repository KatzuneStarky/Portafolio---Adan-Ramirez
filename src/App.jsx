import "./App.scss";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Menu from "./Components/Menu";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="section">
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;

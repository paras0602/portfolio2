import "./App.css";
import ResponsiveAppBar from "./components/Navbar";
import HomeComponent from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contactme from "./components/Contactme";
// import { Route, Router } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <HomeComponent />
      <About />
      <Skills />
      <Projects />
      <Contactme />
    </div>
  );
}

export default App;

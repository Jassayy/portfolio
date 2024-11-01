import "./App.css";
import Nav from "./components/Nav";
import Socials from "./components/Socials";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Socials />
    </>
  );
}

export default App;

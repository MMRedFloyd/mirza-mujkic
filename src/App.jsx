import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Main from "./Components/Main";
import NavigationBar from "./Components/NavigationBar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <NavigationBar />
      <Main />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

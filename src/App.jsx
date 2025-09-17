import { lazy, Suspense } from "react";
import Main from "./Components/Main";
import NavigationBar from "./Components/NavigationBar";

const AboutMe = lazy(() => import("./Components/AboutMe"));
const Experience = lazy(() => import("./Components/Experience"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));

function App() {
  return (
    <>
      <NavigationBar />
      <Main />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </Suspense>
    </>
  );
}

export default App;

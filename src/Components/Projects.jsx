import classes from "./Projects.module.css";
import omnifoodImg from "../assets/omnifood.png";
import nasdefektologImg from "../assets/nasdefektolog.png";
import weatherappImg from "../assets/weatherapp.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Omnifood",
      description:
        "Omnifood is an AI-powered food description that will make you eat healthy again, 365 days per year.",
      image: omnifoodImg,
      link: "https://omnifood-mirzam.netlify.app/",
    },
    {
      title: "Naš defektolog",
      description:
        "Site created for Almira Mujkic, defectologist and somatopedist.",
      image: nasdefektologImg,
      link: "http://nasdefektolog.com/",
    },
    {
      title: "Weather App",
      description:
        "App for weather forecast that fetches data from user current location. User can search for desired city, too.",
      image: weatherappImg,
      link: "https://weatherappmirza.netlify.app/",
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smallerScreen = window.innerWidth <= 1680;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    smallerScreen ? ["5%", "-70%"] : ["20%", "-50%"]
  );

  return (
    <section
      id="projects"
      ref={targetRef}
      className={classes.projectsContainer}
    >
      <motion.div className={classes.flex} style={{ x }}>
        {projects.map((project, index) => (
          <a className={classes.project} key={index} href={project.link}>
            <div>
              <h1 className={classes.title}>{project.title}</h1>
              <h3>{project.description}</h3>
              <div className={classes.imageContainer}>
                <img
                  className={classes.image}
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}

import classes from "./Projects.module.css";
import omnifoodImg from "../assets/omnifood.avif";
import nasdefektologImg from "../assets/nasdefektolog.avif";
import ScrollStack, { ScrollStackItem } from "./../ScrollStack/ScrollStack";
import ShinyText from "../ShinyText/ShinyText";

export default function Projects() {
  const projects = [
    {
      title: "Naš defektolog",
      description:
        "Site created for Almira Mujkic, defectologist and somatopedist.",
      image: nasdefektologImg,
      link: "http://nasdefektolog.com/",
    },
    {
      title: "Omnifood",
      description:
        "Omnifood is an AI-powered food description that will make you eat healthy again, 365 days per year.",
      image: omnifoodImg,
      link: "https://omnifood-mirzam.netlify.app/",
    },
  ];

  return (
    <section id="projects" className={classes.projectsContainer}>
      <h1 className={classes.projectsTitle}>
        <ShinyText text="PROJECTS" speed={5} className="custom-class titles" />
      </h1>
      <ScrollStack>
        {projects.map((project, index) => (
          <ScrollStackItem key={index}>
            <a href={project.link} className={classes.link}>
              <div className={classes.cardContainer}>
                <div className={classes.description}>
                  <h1 className={classes.name}>{project.title}</h1>
                  <h2>{project.description}</h2>
                </div>
                <div className={classes.imageContainer}>
                  <img
                    src={project.image}
                    alt={`Project ${index}`}
                    className={classes.image}
                  />
                </div>
              </div>
            </a>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}

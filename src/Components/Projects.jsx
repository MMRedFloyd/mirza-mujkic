import classes from "./Projects.module.css";
import omnifoodImg from "../assets/omnifood.png";
import nasdefektologImg from "../assets/nasdefektolog.png";
import weatherappImg from "../assets/weatherapp.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
        "App for weather forecast that fetches data from current location. User can search for desired city.",
      image: weatherappImg,
      link: "https://weatherappmirza.netlify.app/",
    },
  ];

  return (
    <section id="projects" className={classes.projectsContainer}>
      <Swiper
        direction={"horizontal"}
        slidesPerView={1}
        speed={800}
        spaceBetween={30}
        mousewheel={{
          sensitivity: 4,
          releaseOnEdges: true,
        }}
        modules={[Mousewheel, Pagination]}
      >
        <div className={classes.flex}>
          {projects.map((project, index) => (
            <SwiperSlide>
              <a className={classes.project} key={index} href={project.link}>
                <div className={classes.smallCon}>
                  <h1 className={classes.title}>{project.title}</h1>
                  <h3 className={classes.desc}>{project.description}</h3>
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.image}
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
}

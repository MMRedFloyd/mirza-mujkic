import classes from "./Projects.module.css";
import omnifoodImg from "../assets/omnifood.png";
import nasdefektologImg from "../assets/nasdefektolog.png";
import weatherappImg from "../assets/weatherapp.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

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
    // {
    //   title: "Weather App",
    //   description:
    //     "App for weather forecast that fetches data from current location. User can search for desired city.",
    //   image: weatherappImg,
    //   link: "https://weatherappmirza.netlify.app/",
    // },
  ];

  return (
    <section id="projects" className={classes.projectsContainer}>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={true}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <img src={project.image} alt={`Project ${index}`} />
            <a href={project.link} className={classes.link}>
              <h1>{project.title}</h1>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

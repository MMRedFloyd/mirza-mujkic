import classes from "./Experience.module.css";
import { motion } from "framer-motion";

export default function Experience() {
  const works = [
    {
      workTitle: "Abhyaz",
      workRole: "Web developer - Internship",
      workDesc:
        "Web Developer at Abhyaz Company for 4 months, where I gained experience in web development and programming, honing my technical skills.",
      workDuration: "December 2022 / April 2023",
    },
    {
      workTitle: "Projects",
      workRole: "Developing personal projects",
      workDesc:
        "Developed multiple websites as part of courses and for real clients, showcasing my ability to implement web solutions and create user-friendly interfaces.",
      workDuration: "2018 / present",
    },
  ];

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.3 }}
        id="experience"
        className={classes.expContainer}
      >
        <motion.h1 variants={item} className={classes.expTitle}>
          EXPERIENCE
        </motion.h1>
        {works.map((work, index) => (
          <motion.div className={classes.work} key={index}>
            <motion.h2 variants={item} className={classes.workTitle}>
              {work.workTitle}
            </motion.h2>
            <div>
              <motion.h2 variants={item}>{work.workRole}</motion.h2>
              <motion.p variants={item} className={classes.workDesc}>
                {work.workDesc}
              </motion.p>
            </div>
            <motion.h2 variants={item} className={classes.workDur}>
              {work.workDuration}
            </motion.h2>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

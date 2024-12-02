import classes from "./AboutMe.module.css";
import mainImage from "../assets/Mirza Mujkic.jpg";
import { motion } from "framer-motion";

export default function AboutMe() {
  const commonAnimationSettings = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.5 },
    variants: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
  };

  return (
    <>
      <div id="aboutme" className={classes.aboutmeContainer}>
        <motion.h1
          {...commonAnimationSettings}
          className={classes.aboutmeTitle}
        >
          ABOUT ME
        </motion.h1>
        <div className={classes.aboutmeContainerSmall}>
          <div className={classes.image}>
            <motion.img
              {...commonAnimationSettings}
              className={classes.mainImage}
              src={mainImage}
              alt="Mirza Mujkić"
            />
          </div>
          <div className={classes.aboutmeText}>
            <motion.div
              {...commonAnimationSettings}
              className={classes.heading}
            >
              I’m Mirza Mujkić, <em>frontend developer,</em> based in Brčko
            </motion.div>
            <div className={classes.mainText}>
              <motion.p {...commonAnimationSettings}>
                I'm Mirza Mujkić, a 27-year-old Frontend Developer from Brčko,
                Bosnia and Herzegovina. My passion lies in web development, with
                expertise in JavaScript and React. I've completed internships,
                numerous projects, and three web development courses to sharpen
                my skills. My journey doesn't stop here; I'm on a relentless
                quest for growth and self-improvement in the ever-evolving world
                of web development. I also hold a degree in Environmental and
                Bioresource Management, earned during my college years in
                Vienna, Austria. This diverse background informs my holistic
                approach to problem-solving and creativity. It's the fusion of
                these two worlds that fuels my innovative and well-rounded
                perspective in the digital realm.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import classes from "./AboutMe.module.css";
import mainImage from "../assets/Mirza Mujkic.avif";
import { motion } from "framer-motion";
import ShinyText from "../ShinyText/ShinyText";

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
          <ShinyText
            text="ABOUT ME"
            speed={5}
            className="custom-class titles"
          />
        </motion.h1>
        <div className={classes.aboutmeContainerSmall}>
          <div className={classes.image}>
            <motion.img
              {...commonAnimationSettings}
              className={classes.mainImage}
              src={mainImage}
              alt="Mirza Mujkić"
              fetchpriority="high"
              loading="eager"
            />
          </div>
          <div className={classes.aboutmeText}>
            <motion.p {...commonAnimationSettings} className={classes.heading}>
              <ShinyText
                text="I’m Mirza Mujkić,"
                speed={5}
                className="custom-class proba"
              />
              <ShinyText
                text=" full stack developer,"
                speed={5}
                className="custom-class proba italic"
              />
              <ShinyText
                text=" based in Brčko"
                speed={5}
                className="custom-class proba"
              />
            </motion.p>
            <div className={classes.mainText}>
              <motion.p {...commonAnimationSettings}>
                I'm Mirza Mujkić, a 27-year-old MERN developer from Brčko,
                Bosnia and Herzegovina. My passion lies in web development, with
                expertise in the MERN stack. I've completed internships,
                numerous projects, and four web development courses to sharpen
                my skills. My journey doesn't stop here — I'm on a relentless
                quest for growth and self-improvement in the ever-evolving world
                of web development. I also hold a degree in Environmental and
                Bioresource Management, earned during my college years in
                Vienna, Austria. This diverse background shapes my holistic
                approach to problem-solving and creativity. The fusion of these
                two worlds fuels my innovative and well-rounded perspective in
                the digital realm.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

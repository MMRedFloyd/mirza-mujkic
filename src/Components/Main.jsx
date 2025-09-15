import mainImg from "../assets/Mirza Mujkic.avif";
import classes from "./Main.module.css";
import { motion } from "framer-motion";
import ScrollTo from "react-scroll-into-view";
import ShinyText from "./../ShinyText/ShinyText";

export default function Main() {
  const item = {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        className={classes.mainContainer}
      >
        <div className={classes.firstContainer}>
          <div>
            <motion.h1 variants={item} className={classes.name}>
              <ShinyText text="MIRZA" speed={5} className="custom-class" />
            </motion.h1>
            <motion.h1 variants={item} className={classes.name}>
              <ShinyText text="MUJKIĆ" speed={5} className="custom-class" />
            </motion.h1>
          </div>
          <motion.img
            variants={item}
            src={mainImg}
            className={classes.mainImg}
            alt="Mirza Mujkić"
          />
        </div>
        <div className={classes.secondContainer}>
          <motion.p variants={item} className={classes.topText}>
            <ShinyText
              text="I'm Mirza Mujkić, MERN developer based in Brčko"
              speed={5}
              className="custom-class"
            />
          </motion.p>
          <div className={classes.line}></div>
          <motion.p variants={item} className={classes.moreText}>
            27-year-old MERN developer from Bosnia and Herzegovina. Passionate
            about web development and specializing in the MERN stack. Committed
            to continuous learning and creative problem-solving.
          </motion.p>
          <div className={classes.linkScrollDown}>
            <ScrollTo selector="#aboutme">
              <motion.a className={classes.cursor} variants={item}>
                Scroll down
              </motion.a>
            </ScrollTo>
          </div>
        </div>
      </motion.div>
    </>
  );
}

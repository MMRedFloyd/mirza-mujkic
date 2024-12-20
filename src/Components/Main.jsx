import mainImg from "../assets/Mirza Mujkic.jpg";
import classes from "./Main.module.css";
import { motion } from "framer-motion";
import ScrollTo from "react-scroll-into-view";

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
              MIRZA
            </motion.h1>
            <motion.h1 variants={item} className={classes.name}>
              MUJKIĆ
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
            I'm Mirza Mujkić, frontend developer based in Brčko
          </motion.p>
          <div className={classes.line}></div>
          <motion.p variants={item} className={classes.moreText}>
            Mirza Mujkić, a 27-year-old Frontend Developer from Bosnia and
            Herzegovina, passionate about web development, with expertise in
            JavaScript and React. Committed to continuous growth and skilled in
            creative problem-solving.
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

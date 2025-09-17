import classes from "./Contact.module.css";
import { motion } from "framer-motion";
import logo from "../assets/logo.avif";
import ScrollTo from "react-scroll-into-view";
import arrow from "../assets/arrowup.png";
import cv from "../assets/Mirza Mujkić CV.pdf";
import ShinyText from "../ShinyText/ShinyText";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  const commonAnimationSettings = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.5 },
    variants: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <div id="contact" className={classes.contact}>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.3 }}
          className={classes.contactTitleContainer}
        >
          <motion.h1 variants={item} className={classes.contactTitle}>
            <ShinyText
              text="GOT A PROJECT?"
              speed={5}
              className="custom-class"
            />
          </motion.h1>
          <motion.h1 variants={item} className={classes.contactTitle}>
            <ShinyText text="LET'S TALK!" speed={5} className="custom-class" />
          </motion.h1>
        </motion.div>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.3 }}
          className={classes.arrow}
        >
          <ScrollTo selector="#home">
            <motion.img variants={item} src={arrow} alt="Arrow Up" />
          </ScrollTo>
        </motion.div>
        <motion.div
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true, amount: 1 }}
          transition={{ staggerChildren: 0.3 }}
          className={classes.contactsLink}
        >
          <ScrollTo selector="#home">
            <motion.img
              className={classes.logo}
              variants={item}
              src={logo}
              alt="Logo"
            />
          </ScrollTo>
          <ul className={classes.ul}>
            <a
              className={classes.links}
              href="https://www.linkedin.com/in/mirza-mujki%C4%87-84b836252/"
            >
              <motion.li variants={item}>LinkedIn</motion.li>
            </a>
            <a
              className={classes.links}
              href="
            https://github.com/MMRedFloyd"
            >
              <motion.li variants={item}>GitHub</motion.li>
            </a>
          </ul>
          <a href={cv} download="Mirza Mujkić CV">
            <motion.button className={classes.cvbtn} variants={item}>
              Download my CV
            </motion.button>
          </a>
        </motion.div>
        <motion.div {...commonAnimationSettings}>
          <a className={classes.mail} href="mailto:mirza-m97@hotmail.com">
            mirza-m97@hotmail.com
          </a>
        </motion.div>
        <div className={classes.divider}></div>
        <motion.div {...commonAnimationSettings} className={classes.copyright}>
          <p> Copyright © {currentYear} | All rights reserved. </p>
        </motion.div>
      </div>
    </>
  );
}

import classes from "./NavigationBar.module.css";
import ScrollTo from "react-scroll-into-view";
import { motion } from "framer-motion";
import logo from "../assets/logo.avif";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";
import Modal from "./Modal";

export default function NavigationBar() {
  const item = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const mobileNav = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const [isActive, setIsActive] = useState(false);

  function closeModal() {
    setIsActive(false);
    document.body.style.overflowY = "auto";
  }

  return (
    <>
      <motion.nav
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        className={classes.navbar}
        id="home"
      >
        <ScrollTo selector="#home">
          <motion.img
            className={classes.logo}
            variants={item}
            src={logo}
            alt="Logo"
          />
        </ScrollTo>

        <div className={classes.ullist}>
          <ScrollTo selector="#aboutme">
            <motion.p className={classes.cursor} variants={item}>
              About me
            </motion.p>
          </ScrollTo>
          <ScrollTo selector="#experience">
            <motion.p className={classes.cursor} variants={item}>
              Experience
            </motion.p>
          </ScrollTo>
          <ScrollTo selector="#projects">
            <motion.p className={classes.cursor} variants={item}>
              Projects
            </motion.p>
          </ScrollTo>
          <ScrollTo selector="#contact">
            <motion.p className={classes.cursor} variants={item}>
              Contact
            </motion.p>
          </ScrollTo>
        </div>
      </motion.nav>
      <motion.nav
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.3 }}
        className={classes.mobileNav}
      >
        <ScrollTo selector="#home">
          <motion.img
            className={classes.logoMobile}
            variants={item}
            src={logo}
            alt="Logo"
          />
        </ScrollTo>
        <motion.div variants={item} className={classes.hamBtn}>
          <Hamburger
            size={30}
            direction="right"
            duration={0.8}
            toggled={isActive}
            toggle={setIsActive}
            onToggle={(toggled) => {
              if (toggled) {
                setIsActive(true);
                document.body.style.overflowY = "hidden";
              } else {
                setIsActive(false);
                document.body.style.overflowY = "auto";
              }
            }}
          />
        </motion.div>
        {isActive && (
          <Modal>
            <motion.ul
              initial={"hidden"}
              whileInView={"visible"}
              transition={{ staggerChildren: 0.4 }}
              className={`${classes.ullistMobile} ${
                isActive ? classes.active : ""
              }`}
            >
              <ScrollTo selector="#aboutme">
                <motion.li
                  className={classes.cursor}
                  variants={mobileNav}
                  onClick={closeModal}
                >
                  <div className={classes.sectionContainer}>
                    <p className={classes.smallNumb}>01</p>
                    ABOUT ME
                  </div>
                </motion.li>
              </ScrollTo>
              <ScrollTo selector="#experience">
                <motion.li
                  className={classes.cursor}
                  variants={mobileNav}
                  onClick={closeModal}
                >
                  <div className={classes.sectionContainer}>
                    <p className={classes.smallNumb}>02</p>
                    EXPERIENCE
                  </div>
                </motion.li>
              </ScrollTo>
              <ScrollTo selector="#projects">
                <motion.li
                  className={classes.cursor}
                  variants={mobileNav}
                  onClick={closeModal}
                >
                  <div className={classes.sectionContainer}>
                    <p className={classes.smallNumb}>03</p>
                    <p>PROJECTS</p>
                  </div>
                </motion.li>
              </ScrollTo>
              <ScrollTo selector="#contact">
                <motion.li
                  className={classes.cursor}
                  variants={mobileNav}
                  onClick={closeModal}
                >
                  <div className={classes.sectionContainer}>
                    <p className={classes.smallNumb}>04</p>
                    CONTACT
                  </div>
                </motion.li>
              </ScrollTo>
            </motion.ul>
          </Modal>
        )}
      </motion.nav>
    </>
  );
}

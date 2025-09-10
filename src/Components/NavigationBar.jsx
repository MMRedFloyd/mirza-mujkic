// import classes from "./NavigationBar.module.css";
// import ScrollTo from "react-scroll-into-view";
// import { motion } from "framer-motion";
// import logo from "../assets/logo.png";
// // import { Turn as Hamburger } from "hamburger-react";
// import { useState } from "react";
// // import Modal from "./Modal";
// import StaggeredMenu from "./../StaggeredMenu/StaggeredMenu";

// export default function NavigationBar() {
//   const item = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0 },
//     transition: { duration: 0.5 },
//   };

//   const mobileNav = {
//     hidden: { opacity: 0, x: 100 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const [isActive, setIsActive] = useState(false);

//   function closeModal() {
//     setIsActive(false);
//     document.body.style.overflowY = "auto";
//   }

//   const menuItems = [
//     { label: "Home", ariaLabel: "Go to home page", link: "/" },
//     { label: "About", ariaLabel: "Learn about us", link: "/about" },
//     { label: "Services", ariaLabel: "View our services", link: "/services" },
//     { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
//   ];

//   const socialItems = [
//     { label: "Twitter", link: "https://twitter.com" },
//     { label: "GitHub", link: "https://github.com" },
//     { label: "LinkedIn", link: "https://linkedin.com" },
//   ];

//   return (
//     <>
//       <motion.nav
//         initial={"hidden"}
//         whileInView={"visible"}
//         viewport={{ once: true }}
//         transition={{ staggerChildren: 0.3 }}
//         className={classes.navbar}
//         id="home"
//       >
//         <ScrollTo selector="#home">
//           <motion.img
//             className={classes.logo}
//             variants={item}
//             src={logo}
//             alt="Logo"
//           />
//         </ScrollTo>

//         <ul className={classes.ullist}>
//           <ScrollTo selector="#aboutme">
//             <motion.li className={classes.cursor} variants={item}>
//               About me
//             </motion.li>
//           </ScrollTo>
//           <ScrollTo selector="#experience">
//             <motion.li className={classes.cursor} variants={item}>
//               Experience
//             </motion.li>
//           </ScrollTo>
//           <ScrollTo selector="#projects">
//             <motion.li className={classes.cursor} variants={item}>
//               Projects
//             </motion.li>
//           </ScrollTo>
//           <ScrollTo selector="#contact">
//             <motion.li className={classes.cursor} variants={item}>
//               Contact
//             </motion.li>
//           </ScrollTo>
//         </ul>
//       </motion.nav>
//       <div style={{ height: "100vh", background: "#1a1a1a" }}>
//         <StaggeredMenu
//           position="right"
//           items={menuItems}
//           socialItems={socialItems}
//           displaySocials={true}
//           displayItemNumbering={true}
//           menuButtonColor="#fff"
//           openMenuButtonColor="#fff"
//           changeMenuColorOnOpen={true}
//           colors={["#B19EEF", "#5227FF"]}
//           logoUrl="/path-to-your-logo.svg"
//           accentColor="#ff6b6b"
//           onMenuOpen={() => console.log("Menu opened")}
//           onMenuClose={() => console.log("Menu closed")}
//         />
//       </div>
//       {/* <motion.nav
//         initial={"hidden"}
//         whileInView={"visible"}
//         viewport={{ once: true }}
//         transition={{ staggerChildren: 0.3 }}
//         className={classes.mobileNav}
//       >
//         <ScrollTo selector="#home">
//           <motion.img
//             className={classes.logoMobile}
//             variants={item}
//             src={logo}
//             alt="Logo"
//           />
//         </ScrollTo>
//         <motion.div variants={item} className={classes.hamBtn}>
//           <Hamburger
//             size={30}
//             direction="right"
//             duration={0.8}
//             toggled={isActive}
//             onToggle={(toggled) => {
//               if (toggled) {
//                 setIsActive(true);
//                 document.body.style.overflowY = "hidden";
//               } else {
//                 setIsActive(false);
//                 document.body.style.overflowY = "auto";
//               }
//             }}
//           />
//         </motion.div>
//         {isActive && (
//           <Modal>
//             (
//             <motion.ul
//               initial={"hidden"}
//               whileInView={"visible"}
//               transition={{ staggerChildren: 0.4 }}
//               className={`${classes.ullistMobile} ${
//                 isActive ? classes.active : ""
//               }`}
//             >
//               <ScrollTo selector="#aboutme">
//                 <motion.li
//                   className={classes.cursor}
//                   variants={mobileNav}
//                   onClick={closeModal}
//                 >
//                   About me
//                 </motion.li>
//               </ScrollTo>
//               <ScrollTo selector="#experience">
//                 <motion.li
//                   className={classes.cursor}
//                   variants={mobileNav}
//                   onClick={closeModal}
//                 >
//                   Experience
//                 </motion.li>
//               </ScrollTo>
//               <ScrollTo selector="#projects">
//                 <motion.li
//                   className={classes.cursor}
//                   variants={mobileNav}
//                   onClick={closeModal}
//                 >
//                   Projects
//                 </motion.li>
//               </ScrollTo>
//               <ScrollTo selector="#contact">
//                 <motion.li
//                   className={classes.cursor}
//                   variants={mobileNav}
//                   onClick={closeModal}
//                 >
//                   Contact
//                 </motion.li>
//               </ScrollTo>
//             </motion.ul>
//             )
//           </Modal>
//         )}
//       </motion.nav> */}
//     </>
//   );
// }

import classes from "./NavigationBar.module.css";
import ScrollTo from "react-scroll-into-view";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import StaggeredMenu from "./../StaggeredMenu/StaggeredMenu";

export default function NavigationBar() {
  const [isMobile, setIsMobile] = useState(false);

  // Provera da li je mobilni ekran
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 944); // 59em = 944px
    };

    // Proveri odmah
    checkScreenSize();

    // Dodaj event listener za resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const item = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const menuItems = [
    { label: "About me", ariaLabel: "Learn about me", link: "#aboutme" },
    {
      label: "Experience",
      ariaLabel: "View my experience",
      link: "#experience",
    },
    { label: "Projects", ariaLabel: "See my projects", link: "#projects" },
    { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
  ];

  const socialItems = [
    { label: "GitHub", link: "https://github.com/MMRedFloyd" },
    { label: "LinkedIn", link: "https://linkedin.com" },
    { label: "Email", link: "mailto:your-email@example.com" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
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

        <ul className={classes.ullist}>
          <ScrollTo selector="#aboutme">
            <motion.li className={classes.cursor} variants={item}>
              About me
            </motion.li>
          </ScrollTo>
          <ScrollTo selector="#experience">
            <motion.li className={classes.cursor} variants={item}>
              Experience
            </motion.li>
          </ScrollTo>
          <ScrollTo selector="#projects">
            <motion.li className={classes.cursor} variants={item}>
              Projects
            </motion.li>
          </ScrollTo>
          <ScrollTo selector="#contact">
            <motion.li className={classes.cursor} variants={item}>
              Contact
            </motion.li>
          </ScrollTo>
        </ul>
      </motion.nav>

      {/* Mobile Navigation - samo kada je isMobile true */}
      {isMobile && (
        <div className={classes.mobileNavContainer}>
          {/* <motion.div
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            className={classes.mobileNavHeader}
          > */}
          <ScrollTo selector="#home">
            <motion.img
              className={classes.logoMobile}
              variants={item}
              src={logo}
              alt="Logo"
            />
          </ScrollTo>
          {/* </motion.div> */}

          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={["#B19EEF", "#5227FF"]}
            logoUrl="./assets/logo.png"
            accentColor="#ff6b6b"
            onMenuOpen={() => console.log("Menu opened")}
            onMenuClose={() => console.log("Menu closed")}
          />
        </div>
      )}
    </>
  );
}

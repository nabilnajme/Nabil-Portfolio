import React from "react";
//import footer data
import { social } from "../data";
//import Logo
import Logo from "../assets/img/logo.svg";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <motion.div
        variants={fadeIn("up", 0, 3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto"
      >
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* socials icon */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* Logo */}
          <div>
            <a className="text-2xl font-semibold" href="#">
              Nabil Maizou
            </a>
          </div>
          {/* copyright */}
          <p>&copy: 2021 Nabil Maizou. All right Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

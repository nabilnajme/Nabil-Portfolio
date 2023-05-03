import React from "react";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const Project = ({ item }) => {
  return (
    <motion.div
      variants={fadeIn("down", 0, 3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      key={item.id}
      className="flex flex-col items-center text-center"
    >
      <div className="mb-8">
        <img className="rounded-2xl" src={item.image} alt="" />
      </div>
      <p className="text-accent caption-top text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl capitalize font-semibold mb-3">{item.name}</h3>
    </motion.div>
  );
};

export default Project;

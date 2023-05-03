import React from "react";
//import contavt data
import { contact } from "../data";
//import motion
import { motion } from "framer-motion";
//import variants
import { fadeIn } from "./variants";
const Contact = () => {
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        {/* section title */}
        <motion.div
          variants={fadeIn("down", 0, 6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            If you're interested in learning more about my work or collaborating
            on a project, I'd love to hear from you! Please feel free to contact
            me through my email address or my Instagramm, and I'll will answer
            back as soon as possible. You can also find me on LinkedIn, where I
            share updates on my latest projects and connect with other
            professionals in my field. Thank you for your interest, and I look
            forward to hearing from you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* info */}
          <motion.div
            variants={fadeIn("right", 0, 3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2"
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mb-4 mt-2 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-2">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn("left", 0, 3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-8 w-full amx-w-[780px]"
          >
            <div className="flex gap-8">
              <input className="input" type="text" placeholder="Your Name" />
              <input className="input" type="email" placeholder="Your Email" />
            </div>
            <input className="input" type="text" placeholder="Subject" />
            <textarea
              className="textarea"
              placeholder="Your Message"
            ></textarea>
            <button className="btn btn-lg bg-accent hover:bg-accent-hover">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

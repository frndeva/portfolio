import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  SmartPhone01Icon,
  Mail01Icon,
  Linkedin01Icon,
  Github01Icon,
} from "@hugeicons/core-free-icons";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-6 pt-10 pb-4 bg-ef-light-div  dark:bg-ef-dark-div">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="rounded-full p-4 cursor-pointer shadow-md transition-all bg-ef-light-bg dark:bg-ef-dark-bg"
      >
        <a href="/" className="block ">
          <span className="text-4xl font-gugi">EF</span>
        </a>
      </motion.div>

      <ul className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            className="text-lg tracking-[2px] cursor-pointer"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            className="text-lg tracking-[2px] cursor-pointer"
          >
            À propos de moi
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            className="text-lg tracking-[2px] cursor-pointer"
          >
            Mes projets
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            className="text-lg tracking-[2px] cursor-pointer"
          >
            Me contacter
          </Link>
        </li>
      </ul>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
        <a
          href="tel:0626695570"
          className="flex items-center gap-2 cursor-pointer"
        >
          <HugeiconsIcon
            icon={SmartPhone01Icon}
            size={40}
            className="p-2 rounded-full bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text"
          />
          <p>06 26 69 55 70</p>
        </a>
        <a
          href="mailto:ferrandevapro@gmail.com"
          className="flex items-center gap-2 cursor-pointer"
        >
          <HugeiconsIcon
            icon={Mail01Icon}
            size={40}
            className="p-2 rounded-full bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text"
          />
          <p>ferrandevapro@gmail.com</p>
        </a>
        <a
          href="https://www.linkedin.com/in/eva-ferrand/"
          className="flex items-center gap-2 cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <HugeiconsIcon
            icon={Linkedin01Icon}
            size={40}
            className="p-2 rounded-full bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text"
          />
          <p>Linkedin</p>
        </a>
        <a
          href="https://github.com/frndeva"
          className="flex items-center gap-2 cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          <HugeiconsIcon
            icon={Github01Icon}
            size={40}
            className="p-2 rounded-full bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text"
          />
          <p>GitHub</p>
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
        <a href="/mentions-legales" className="">
          Mentions légales
        </a>
        <a href="/cgu" className="">
          CGU
        </a>
        <a href="/politique-confidentialite" className="">
          Politique de Confidentialité
        </a>
      </div>

      <p className="px-10">Copyright © 2024 | Eva Ferrand</p>
    </div>
  );
};

export default Footer;

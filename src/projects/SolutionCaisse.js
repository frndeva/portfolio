import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import Logo from "../assets/images/projects/SolutionCaisse/logo.webp";
import Mockup from "../assets/images/projects/SolutionCaisse/mockup.webp";
import Maquette from "../assets/images/projects/SolutionCaisse/maquette.webp";

const SolutionCaisse = () => {
  useEffect(() => {
    document.title = "SolutionCaisse - Eva Ferrand";

    let metaDescription = document.querySelector("meta[name='description']");

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Maquette réalisée pour un client, SolutionCaisse est un site vitrine avec demande de devis. L'entreprise propose une gamme variée de caisses adaptées aux besoins des commerçants, alliant simplicité et performance."
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content =
        "Maquette réalisée pour un client, SolutionCaisse est un site vitrine avec demande de devis. L'entreprise propose une gamme variée de caisses adaptées aux besoins des commerçants, alliant simplicité et performance.";
      document.head.appendChild(metaDescription);
    }
  });
  return (
    <div className="mx-10 md:mx-[400px] relative pt-28 md:pt-0">
      {/* Présentation entreprise */}
      <section
        id="presentation"
        className="md:h-screen flex flex-col items-center justify-center gap-10 relative"
      >
        {/* Logo */}
        <div className="flex flex-col items-center justify-center bg-ef-light-div dark:bg-ef-dark-div shadow-md rounded-lg w-full">
          <img src={Logo} alt="Logo SolutionCaisse" className="w-1/3 py-10" />
        </div>

        {/* Présentation */}
        <div>
          <h3 className="font-gugi text-4xl text-center md:text-left">
            Solution Caisse
          </h3>
          <div className="w-full h-0.5 bg-black-secondary dark:bg-white-primary"></div>
          <div className="flex flex-col md:flex-row items-center mt-6">
            <div className="w-full md:w-1/2 flex flex-row md:flex-col">
              <div className="w-full flex flex-col md:flex-row items-left md:items-center justify-between text-center md:text-left pb-4 md:pb-0">
                <h4 className="font-gugi text-2xl">Categorie</h4>
                <p className="mr-0 md:mr-12 2xl:mr-32">Maquettage</p>
              </div>
              <div className="w-full flex flex-col md:flex-row items-left md:items-center justify-between text-center md:text-left pb-4 md:pb-0">
                <h4 className="font-gugi text-2xl">Annee</h4>
                <p className="mr-0 md:mr-12 2xl:mr-32">2024</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p>
                <strong>Solution Caisse</strong> est une entreprise située à la
                Flèche (72200) et est depuis 15 ans au service des commerçants.
                Ils proposent des solutions d'encaissement, de pesage et toutes
                autres solutions de point de vente adaptées et performantes.
              </p>
            </div>
          </div>
        </div>

        {/* Lien vers la maquette */}
        <a
          href="https://www.figma.com/design/KDp7LQrGy7X6k1MOdjda4H/Solution-Caisse?node-id=0-1&t=9G1A7EGaWsH7047X-1"
          target="_blank"
          rel="noreferrer"
          className="border-2 py-2 px-20 mt-2 rounded-full cursor-pointer text-center border-ef-light-text text-ef-light-text 
             hover:bg-ef-light-text hover:text-ef-light-div dark:border-ef-dark-text dark:text-ef-dark-text hover:dark:bg-ef-dark-text hover:dark:text-ef-light-text
       transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Voir la maquette
        </a>

        {/* Arrow down */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="hidden md:flex items-center justify-center transition-all absolute bottom-10"
        >
          <Link
            to="colors"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowDown01Icon} size={32} />
          </Link>
        </motion.div>
      </section>

      {/* Couleurs */}
      <section
        id="colors"
        className="md:h-screen flex flex-col items-center justify-center gap-10 relative mt-10 md:mt-0"
      >
        {/* Arrow up */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="hidden md:flex items-center justify-center transition-all absolute top-10"
        >
          <Link
            to="presentation"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowUp01Icon} size={32} />
          </Link>
        </motion.div>

        {/* Titre */}
        <h3 className="text-xl md:text-4xl tracking-[4px] md:tracking-[8px]">
          -Palette de couleurs-
        </h3>

        {/* Palette de couleurs */}
        <div className="w-full px-4 md:px-10 bg-ef-light-div dark:bg-ef-dark-div shadow-md rounded-lg ">
          <div
            className="flex items-center justify-center mx-auto w-full md:w-3/4 my-10 md:my-20 
      rounded-full border-2 border-ef-light-text dark:border-ef-dark-text overflow-hidden"
          >
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#A3195B] text-[12px] md:text-2xl text-ef-light-div">
              #A3195B
            </div>
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#3C3C3B] text-[12px] md:text-2xl text-ef-light-div">
              #3C3C3B
            </div>
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#1D1D1B] text-[12px] md:text-2xl text-ef-light-div">
              #1D1D1B
            </div>
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#F1F1F1] text-[12px] md:text-2xl text-ef-light-text">
              #F1F1F1
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="hidden md:flex items-center justify-center transition-all absolute bottom-10"
        >
          <Link
            to="typo"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowDown01Icon} size={32} />
          </Link>
        </motion.div>
      </section>

      {/* Typo */}
      <section
        id="typo"
        className="md:h-screen flex flex-col items-center justify-center gap-10 relative mt-10 md:mt-0"
      >
        {/* Arrow up */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="hidden md:flex items-center justify-center transition-all absolute top-10"
        >
          <Link
            to="colors"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowUp01Icon} size={32} />
          </Link>
        </motion.div>

        {/* Titre */}
        <h3 className="text-xl md:text-4xl tracking-[4px] md:tracking-[8px]">
          -Typographie-
        </h3>

        {/* Typographie */}
        <div className="w-full px-10 bg-ef-light-div dark:bg-ef-dark-div shadow-md rounded-lg">
          <div className=" flex flex-col md:flex-row items-center text-center md:justify-evenly py-20">
            <div className="mb-4 md:mb-0">
              <p>Titre : Roboto Condensed</p>
              <p className="font-roboto-condensed font-medium">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="font-roboto-condensed font-medium">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="font-roboto-condensed font-medium">1234567890</p>
            </div>
            <div className="">
              <p>Paragraphes : Roboto</p>
              <p className="font-roboto">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-roboto">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-roboto">1234567890</p>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="hidden md:flex items-center justify-center transition-all absolute bottom-10"
        >
          <Link
            to="mockup"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowDown01Icon} size={32} />
          </Link>
        </motion.div>
      </section>

      {/* Mockup */}
      <section
        id="mockup"
        className="md:h-screen flex flex-col items-center justify-center gap-10 relative mt-10 md:mt-0"
      >
        {/* Arrow up */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="hidden md:flex items-center justify-center transition-all absolute top-10"
        >
          <Link
            to="typo"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowUp01Icon} size={32} />
          </Link>
        </motion.div>

        {/* Titre */}
        <h3 className="text-xl md:text-4xl tracking-[4px] md:tracking-[8px]">
          -Mockup-
        </h3>

        {/* Mockup */}
        <div className="md:px-10 bg-ef-light-div dark:bg-ef-dark-div shadow-md rounded-lg">
          <img
            src={Mockup}
            alt="Mockup SolutionCaisse"
            className=" flex items-center justify-center mx-auto"
          />
        </div>

        {/* Arrow down */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="hidden md:flex items-center justify-center transition-all absolute bottom-10"
        >
          <Link
            to="site"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowDown01Icon} size={32} />
          </Link>
        </motion.div>
      </section>

      {/* Maquette */}
      <section
        id="site"
        className="pt-10 md:pt-40 flex flex-col items-center justify-center gap-10 relative mb-20"
      >
        {/* Arrow up */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.2 }}
          className="hidden md:flex items-center justify-center transition-all absolute top-10"
        >
          <Link
            to="mockup"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowUp01Icon} size={32} />
          </Link>
        </motion.div>

        {/* Titre */}
        <h3 className="text-xl md:text-4xl tracking-[4px] md:tracking-[8px]">
          -Maquette-
        </h3>

        {/* Maquette */}
        <div className="px-10 bg-ef-light-div dark:bg-ef-dark-div shadow-md rounded-lg">
          <img
            src={Maquette}
            alt="Maquette de SolutionCaisse"
            className="flex items-center justify-center mx-auto py-10"
          />
        </div>
      </section>
    </div>
  );
};

export default SolutionCaisse;

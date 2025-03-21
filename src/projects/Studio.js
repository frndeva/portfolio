import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import Logo from "../assets/images/projects/Studio/logo.webp";
import Mockup from "../assets/images/projects/Studio/mockup.webp";
import Site from "../assets/images/projects/Studio/SiteEkod2.webp";

const Studio = () => {
  useEffect(() => {
    document.title = "Studio - Eva Ferrand";

    let metaDescription = document.querySelector("meta[name='description']");

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Projet réalisé en formation, Studio est un site vitrine conçu pour une association engagée dans l’éducation à travers le monde. Son objectif : faciliter l'accès aux ressources et promouvoir les initiatives éducatives internationales."
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content =
        "Projet réalisé en formation, Studio est un site vitrine conçu pour une association engagée dans l’éducation à travers le monde. Son objectif : faciliter l'accès aux ressources et promouvoir les initiatives éducatives internationales.";
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
          <img src={Logo} alt="Logo Studio" className=" py-10" />
        </div>

        {/* Présentation */}
        <div>
          <h3 className="font-gugi text-4xl text-center md:text-left">
            Studio
          </h3>
          <div className="w-full h-0.5 bg-black-secondary dark:bg-white-primary"></div>
          <div className="flex flex-col md:flex-row items-center mt-6">
            <div className="w-full md:w-1/2 flex flex-row md:flex-col">
              <div className="w-full flex flex-col md:flex-row items-left md:items-center justify-between text-center md:text-left pb-4 md:pb-0">
                <h4 className="font-gugi text-2xl">Categorie</h4>
                <p className="mr-0 md:mr-12 2xl:mr-32">Site vitrine</p>
              </div>
              <div className="w-full flex flex-col md:flex-row items-left md:items-center justify-between text-center md:text-left pb-4 md:pb-0">
                <h4 className="font-gugi text-2xl">Annee</h4>
                <p className="mr-0 md:mr-12 2xl:mr-32">2024</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p>
                Ce projet a été conçu dans le cadre d'un travail en groupe lors
                de ma formation. <strong>Studio</strong> est un site vitrine
                pour une association.
              </p>
            </div>
          </div>
        </div>

        {/* Lien vers la maquette*/}

        <a
          href="https://www.figma.com/design/BQV92OwFaq7grs5PkSbrBF/Studio?node-id=0-1&t=0hNPnXYRjBA2OC0E-1"
          target="_blank"
          rel="noreferrer"
          className="border-2 py-2 w-60 mt-2 rounded-full cursor-pointer text-center border-ef-light-text text-ef-light-text 
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
        <div className="w-full px-4 md:px-10 bg-ef-light-div dark:bg-ef-dark-div shadow-md rounded-lg">
          <div className="border-2 border-ef-light-text dark:border-ef-dark-text overflow-hidden my-10 rounded-full">
            <div
              className="flex items-center justify-center mx-auto w-full 
        "
            >
              <div className="flex items-center justify-center w-1/4 h-20 md:h-40 bg-[#00B1BF] text-[12px] md:text-2xl rounded-ss-full text-ef-light-div ">
                #00B1BF
              </div>
              <div className="flex items-center justify-center w-1/4 h-20 md:h-40 bg-[#0085B6] text-[12px] md:text-2xl text-ef-light-div">
                #0085B6
              </div>
              <div className="flex items-center justify-center w-1/4 h-20 md:h-40 bg-[#FF005D] text-[12px] md:text-2xl text-ef-light-div">
                #FF005D
              </div>
              <div className="flex items-center justify-center w-1/4 h-20 md:h-40 bg-[#9747FF] text-[12px] md:text-2xl rounded-se-full text-ef-light-div">
                #9747FF
              </div>
            </div>

            <div className="flex items-center justify-center mx-auto w-full">
              <div className="flex items-center justify-center w-1/4 h-20 md:h-40 bg-[#00D49D] text-[12px] md:text-2xl rounded-es-full text-ef-light-div">
                #00D49D
              </div>
              <div className="flex items-center justify-center w-1/4 h-20 md:h-40 bg-[#FEDF03] text-[12px] md:text-2xl text-ef-light-div">
                #FEDF03
              </div>
              <div className="flex items-center justify-center w-1/4 h-20 md:h-40 bg-[#252525] text-[12px] md:text-2xl text-ef-light-div">
                #252525
              </div>
              <div className="flex items-center justify-center w-1/4 h-20 md:h-40 bg-[#F1F1F1] text-[12px] md:text-2xl rounded-ee-full text-ef-light-text">
                #F1F1F1
              </div>
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
              <p>Titre : Short Stack</p>
              <p className="font-short-stack font-medium">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="font-short-stack font-medium">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="font-short-stack font-medium">1234567890</p>
            </div>
            <div className="">
              <p>Paragraphes : Poppins</p>
              <p className="font-poppins">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-poppins">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-poppins">1234567890</p>
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
            alt="Mockup Studio"
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

      {/* Site */}
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
          -Site Web-
        </h3>

        {/* Site web */}
        <div className="px-10 bg-ef-light-div dark:bg-ef-dark-div shadow-md rounded-lg">
          <img
            src={Site}
            alt="Capture d'écran du site Studio"
            className="flex items-center justify-center mx-auto py-10"
          />
        </div>
      </section>
    </div>
  );
};

export default Studio;

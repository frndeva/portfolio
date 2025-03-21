import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import Mockup from "../assets/images/projects/CosyPlaid/mockup.webp";
import Site from "../assets/images/projects/CosyPlaid/site.webp";

const Cosyplaid = () => {
  useEffect(() => {
    document.title = "CosyPlaid - Eva Ferrand";

    let metaDescription = document.querySelector("meta[name='description']");

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Développeuse web passionnée, je conçois des sites modernes et performants en React, Next.js et WordPress. Découvrez mon portfolio et mes projets, dont CosyPlaid, une boutique en ligne conçue lors de ma formation."
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content =
        "Développeuse web passionnée, je conçois des sites modernes et performants en React, Next.js et WordPress. Découvrez mon portfolio et mes projets, dont CosyPlaid, une boutique en ligne conçue lors de ma formation.";
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
        {/* Présentation */}
        <div>
          <h3 className="font-gugi text-4xl text-center md:text-left">
            CosyPlaid
          </h3>
          <div className="w-full h-0.5 bg-black-secondary dark:bg-white-primary"></div>
          <div className="flex flex-col md:flex-row items-center mt-6">
            <div className="w-full md:w-1/2 flex flex-row md:flex-col">
              <div className="w-full flex flex-col md:flex-row items-left md:items-center justify-between text-center md:text-left pb-4 md:pb-0">
                <h4 className="font-gugi text-2xl">Categorie</h4>
                <p className="mr-0 md:mr-12 2xl:mr-32">Site e-commerce</p>
              </div>
              <div className="w-full flex flex-col md:flex-row items-left md:items-center justify-between text-center md:text-left pb-4 md:pb-0">
                <h4 className="font-gugi text-2xl">Annee</h4>
                <p className="mr-0 md:mr-12 2xl:mr-32">2024</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p>
                Ce projet a été conçu dans le cadre d'un travail lors de ma
                formation. <strong>CosyPlaid</strong> est un site e-commerce de
                plaid.
              </p>
            </div>
          </div>
        </div>

        {/* Lien vers le site */}
        <a
          href="https://www.ekodcms.com/evaf/"
          target="_blank"
          rel="noreferrer"
          className="border-2 py-2 w-60 mt-2 rounded-full cursor-pointer text-center border-ef-light-text text-ef-light-text 
             hover:bg-ef-light-text hover:text-ef-light-div dark:border-ef-dark-text dark:text-ef-dark-text hover:dark:bg-ef-dark-text hover:dark:text-ef-light-text
       transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Voir le site
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
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#403531] text-[12px] md:text-2xl text-ef-light-div">
              #403531
            </div>
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#BF9E85] text-[12px] md:text-2xl text-ef-light-text">
              #BF9E85
            </div>
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#EADCD1] text-[12px] md:text-2xl text-ef-light-text">
              #EADCD1
            </div>
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#FFFFFF] text-[12px] md:text-2xl text-ef-light-text">
              #FFFFFF
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
              <p>Titre : Comfortaa</p>
              <p className="font-comfortaa font-medium">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="font-comfortaa font-medium">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="font-comfortaa font-medium">1234567890</p>
            </div>
            <div className="">
              <p>Paragraphes : Open Sans</p>
              <p className="font-open-sans">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="font-open-sans">abcdefghijklmnopqrstuvwxyz</p>
              <p className="font-open-sans">1234567890</p>
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
            alt="Mockup CosyPlaid"
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
            alt="Capture d'écran du site CosyPlaid"
            className="flex items-center justify-center mx-auto py-10"
          />
        </div>
      </section>
    </div>
  );
};

export default Cosyplaid;

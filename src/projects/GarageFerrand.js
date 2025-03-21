import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import Logo from "../assets/images/projects/GarageFerrand/logo.webp";
import Site from "../assets/images/projects/GarageFerrand/site.webp";
import Mockup from "../assets/images/projects/GarageFerrand/mockup.webp";

const GarageFerrand = () => {
  useEffect(() => {
    document.title = "Garage Ferrand - Eva Ferrand";

    let metaDescription = document.querySelector("meta[name='description']");

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Conception et développement du site web du Garage Ferrand, optimisé pour le référencement et l'expérience utilisateur. Site vitrine moderne mettant en avant les services et l'expertise du garage."
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content =
        "Conception et développement du site web du Garage Ferrand, optimisé pour le référencement et l'expérience utilisateur. Site vitrine moderne mettant en avant les services et l'expertise du garage.";
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
          <img src={Logo} alt="Logo Garage Ferrand" className=" py-10" />
        </div>

        {/* Présentation */}
        <div>
          <h3 className="font-gugi text-4xl text-center md:text-left">
            Garage Ferrand
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
                Le <strong>Garage Ferrand</strong> est bien plus qu'un simple
                lieu de réparation automobile. Spécialisé dans le dépannage
                autoroute, l'entretien de véhicules toutes marques et le
                diagnostic automobile, il offre une gamme complète de services
                pour répondre aux besoins variés des conducteurs.
              </p>
            </div>
          </div>
        </div>

        {/* Lien vers la maquette et le site */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <a
            href="https://www.figma.com/design/Sx7bjwBEwkOWx7UPB5KTWi/Garage-Ferrand?node-id=0-1&t=0TNqrX6UMY9MWWZ4-1"
            target="_blank"
            rel="noreferrer"
            className="border-2 py-2 w-60 mt-2 rounded-full cursor-pointer text-center border-ef-light-text text-ef-light-text 
             hover:bg-ef-light-text hover:text-ef-light-div dark:border-ef-dark-text dark:text-ef-dark-text hover:dark:bg-ef-dark-text hover:dark:text-ef-light-text
       transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Voir la maquette
          </a>
          <a
            href="https://garageferrand.fr/"
            target="_blank"
            rel="noreferrer"
            className="border-2 py-2 w-60 mt-2 rounded-full cursor-pointer text-center border-ef-light-text text-ef-light-text 
             hover:bg-ef-light-text hover:text-ef-light-div dark:border-ef-dark-text dark:text-ef-dark-text hover:dark:bg-ef-dark-text hover:dark:text-ef-light-text
       transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Voir le site
          </a>
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
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#003253] text-[12px] md:text-2xl text-ef-light-div">
              #003253
            </div>
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#4C90CD] text-[12px] md:text-2xl text-ef-light-div">
              #4C90CD
            </div>
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#000] text-[12px] md:text-2xl text-ef-light-div">
              #000000
            </div>
            <div className="flex items-center justify-center w-1/4 h-40 md:h-64 bg-[#FFF] text-[12px] md:text-2xl text-ef-light-text">
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
              <p>Titre : Poppins</p>
              <p className="font-poppins font-medium">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </p>
              <p className="font-poppins font-medium">
                abcdefghijklmnopqrstuvwxyz
              </p>
              <p className="font-poppins font-medium">1234567890</p>
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
            alt="Mockup Garage Ferrand"
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

      {/* Site web */}
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
            alt="Capture d'écran du site Garage Ferrand"
            className="flex items-center justify-center mx-auto py-10"
          />
        </div>
      </section>
    </div>
  );
};

export default GarageFerrand;

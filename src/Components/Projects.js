import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Mockup Projects
import MockupSolutionCaisse from "../assets/images/projects/SolutionCaisse/mockup.webp";
import MockupGarageFerrand from "../assets/images/projects/GarageFerrand/mockup.webp";
import MockupStudio from "../assets/images/projects/Studio/mockup.webp";
import MockupLaGuibollRun from "../assets/images/projects/LaGuibollRun/mockup.webp";
import MockupLesGlacesDesCourbetons from "../assets/images/projects/LesGlacesDesCourbetons/mockup.webp";
import MockupCosyPlaid from "../assets/images/projects/CosyPlaid/mockup.webp";
import MockupSMichue from "../assets/images/projects/SMichue/mockup.webp";
import MockupEdicreer from "../assets/images/projects/Edicreer/mockup.webp";
import MockupNovaart from "../assets/images/projects/Novaart/mockup.webp";
import MockupPoopoopidoo from "../assets/images/projects/Poopoopidoo/mockup.webp";

const projectsData = [
  {
    id: 1,
    title: "Garage Ferrand",
    category: "React",
    imageUrl: MockupGarageFerrand,
    lien: "/garage-ferrand",
  },
  {
    id: 2,
    title: "SMichue",
    category: "e-commerce",
    imageUrl: MockupSMichue,
    lien: "/smichue",
  },
  {
    id: 3,
    title: "Novaart",
    category: "UX/UI",
    imageUrl: MockupNovaart,
    lien: "/novaart",
  },
  {
    id: 4,
    title: "Edicreer",
    category: "UX/UI",
    imageUrl: MockupEdicreer,
    lien: "/edicreer",
  },
  {
    id: 5,
    title: "SolutionCaisse",
    category: "UX/UI",
    imageUrl: MockupSolutionCaisse,
    lien: "/solution-caisse",
  },
  {
    id: 6,
    title: "Les Glaces Des Courbetons",
    category: "UX/UI",
    imageUrl: MockupLesGlacesDesCourbetons,
    lien: "/les-glaces-des-courbetons",
  },
  {
    id: 7,
    title: "CosyPlaid",
    category: "e-commerce",
    imageUrl: MockupCosyPlaid,
    lien: "/cosyplaid",
  },
  {
    id: 8,
    title: "Studio",
    category: "wordpress",
    imageUrl: MockupStudio,
    lien: "/studio",
  },
  {
    id: 9,
    title: "La Guiboll'Run",
    category: "wordpress",
    imageUrl: MockupLaGuibollRun,
    lien: "/la-guiboll-run",
  },
  {
    id: 10,
    title: "Poopoopidoo",
    category: "UX/UI",
    imageUrl: MockupPoopoopidoo,
    lien: "/poopoopidoo",
  },
];

const Projects = () => {
  const [category, setCategory] = useState("Tout");
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0);
    }
  }, [category, swiperInstance]);

  const filteredProjects = projectsData.filter((project) => {
    return category === "Tout" || project.category === category;
  });

  return (
    <section
      id="projects"
      className="pt-32 md:pt-0 md:mt-0 md:h-screen flex flex-col items-center justify-center relative"
    >
      <div className="z-10 flex flex-col items-center gap-4">
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
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowUp01Icon} size={32} />
          </Link>
        </motion.div>

        {/* Content */}
        <h3 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
          -MES PROJETS-
        </h3>
        <div className="flex gap-10 items-center justify-center mb-4 2xl:mb-10">
          <div className="shadow-md rounded-full bg-ef-light-div dark:bg-ef-dark-div text-sm md:text-base">
            <button
              className={`${
                category === "Tout"
                  ? "bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text"
                  : ""
              } px-2 md:px-4 py-2 rounded-full`}
              onClick={() => setCategory("Tout")}
            >
              Tout
            </button>
            <button
              className={`${
                category === "UX/UI"
                  ? "bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text"
                  : ""
              } px-2 md:px-4 py-2 rounded-full`}
              onClick={() => setCategory("UX/UI")}
            >
              UX/UI
            </button>
            <button
              className={`${
                category === "wordpress"
                  ? "bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text"
                  : ""
              } px-2 md:px-4 py-2 rounded-full`}
              onClick={() => setCategory("wordpress")}
            >
              Wordpress
            </button>
            <button
              className={`${
                category === "e-commerce"
                  ? "bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text"
                  : ""
              } px-2 md:px-4 py-2 rounded-full`}
              onClick={() => setCategory("e-commerce")}
            >
              E-commerce
            </button>
            <button
              className={`${
                category === "React"
                  ? "bg-gradient-to-t from-ef-blue to-ef-purple dark:text-ef-light-text"
                  : ""
              } px-2 md:px-4 py-2 rounded-full`}
              onClick={() => setCategory("React")}
            >
              React
            </button>
          </div>
        </div>

        <div className="container min-w-[300px] w-[200px] lg:w-[800px] flex items-center justify-center bg-ef-light-div dark:bg-ef-dark-div rounded-xl shadow-md py-8 mx-auto relative">
          <Swiper
            key={category}
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            loop={true}
            onSwiper={setSwiperInstance}
            className="mySwiper"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="flex flex-col items-center">
                  <h4 className="font-gugi text-xl md:text-2xl">
                    {project.title}
                  </h4>
                  <a
                    href={project.lien}
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-[500px] mx-auto 2xl:w-full object-contain rounded-lg"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
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
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            className="bg-ef-light-div dark:bg-ef-dark-div rounded-full p-2 cursor-pointer shadow-md hover:shadow-lg"
          >
            <HugeiconsIcon icon={ArrowDown01Icon} size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

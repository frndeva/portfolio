import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Setup from "../assets/images/others/setup.webp";
import LogoFigma from "../assets/images/others/figma.webp";
import LogoAdobe from "../assets/images/others/adobe.webp";
import LogoHtml from "../assets/images/others/html.webp";
import LogoCss from "../assets/images/others/css.webp";
import LogoJavascript from "../assets/images/others/js.webp";
import LogoPhp from "../assets/images/others/php.webp";
import LogoReact from "../assets/images/others/react.webp";
import LogoWordpress from "../assets/images/others/wordpress.webp";

const About = () => (
  <section
    id="about"
    className="pt-32 md:pt-0 md:mt-0 md:h-screen flex flex-col items-center justify-center relative gap-4"
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
          to="home"
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
        -À PROPOS DE MOI-
      </h3>
      <p className="mx-10 md:mx-40 lg:mx-72 2xl:mx-96 px-0 2xl:px-64 text-center font-montserrat">
        Formation Web Concepteur en cours... Je suis <strong>passionnée</strong>{" "}
        par la programmation informatique depuis 6 ans. Je suis quelqu'un de
        très <strong>patiente</strong> et <strong>motivée</strong> pour mener à
        bien vos projets.
      </p>
      <img
        src={Setup}
        alt="Photographie de mon setup"
        className="w-[240px] md:w-[300px] lg:w-[220px] 2xl:w-[350px] setup my-4"
      />
      <div className="container min-w-[300px] w-[200px] lg:w-[800px] flex items-center justify-center bg-ef-light-div dark:bg-ef-dark-div rounded-xl shadow-md py-4 2xl:py-8 mx-auto relative">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 5,
            },
          }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 text-center flex flex-col items-center justify-center bg-gradient-to-t from-ef-blue to-ef-purple rounded-full shadow-md">
                <img src={LogoFigma} alt="Logo Figma" className="w-2/4" />
              </div>
              <p className="text-center mt-2 text-xl lg:text-2xl">Figma</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 text-center flex flex-col items-center justify-center bg-gradient-to-t from-ef-blue to-ef-purple rounded-full shadow-md">
                <img src={LogoAdobe} alt="Logo Adobe" className="w-2/4" />
              </div>
              <p className="text-center mt-2 text-xl lg:text-2xl">Adobe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 text-center flex flex-col items-center justify-center bg-gradient-to-t from-ef-blue to-ef-purple rounded-full shadow-md">
                <img src={LogoHtml} alt="Logo HTML" className="w-2/4" />
              </div>
              <p className="text-center mt-2 text-xl lg:text-2xl">HTML</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 text-center flex flex-col items-center justify-center bg-gradient-to-t from-ef-blue to-ef-purple rounded-full shadow-md">
                <img src={LogoCss} alt="Logo CSS" className="w-2/4" />
              </div>
              <p className="text-center mt-2 text-xl lg:text-2xl">CSS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 text-center flex flex-col items-center justify-center bg-gradient-to-t from-ef-blue to-ef-purple rounded-full shadow-md">
                <img
                  src={LogoJavascript}
                  alt="Logo JavaScript"
                  className="w-2/4"
                />
              </div>
              <p className="text-center mt-2 text-xl lg:text-2xl">JavaScript</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 text-center flex flex-col items-center justify-center bg-gradient-to-t from-ef-blue to-ef-purple rounded-full shadow-md">
                <img src={LogoPhp} alt="Logo PHP" className="w-2/4" />
              </div>
              <p className="text-center mt-2 text-xl lg:text-2xl">PHP</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 text-center flex flex-col items-center justify-center bg-gradient-to-t from-ef-blue to-ef-purple rounded-full shadow-md">
                <img src={LogoReact} alt="Logo React" className="w-2/4" />
              </div>
              <p className="text-center mt-2 text-xl lg:text-2xl">React</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 text-center flex flex-col items-center justify-center bg-gradient-to-t from-ef-blue to-ef-purple rounded-full shadow-md">
                <img
                  src={LogoWordpress}
                  alt="Logo WordPress"
                  className="w-2/4"
                />
              </div>
              <p className="text-center mt-2 text-xl lg:text-2xl">WordPress</p>
            </div>
          </SwiperSlide>
        </Swiper>
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
          to="projects"
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

export default About;

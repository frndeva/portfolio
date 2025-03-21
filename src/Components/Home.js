import { motion } from "framer-motion";
import Picto from "../assets/images/others/pictogramme.webp";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Link } from "react-scroll";

const Home = () => (
  <section
    id="home"
    className="h-screen flex flex-col items-center justify-center relative"
  >
    <motion.div
      initial={{ opacity: 0.4, scale: 1 }}
      animate={{ opacity: [0, 0.4, 0], scale: [1, 1.1, 1] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] 2xl:w-[800px] 2xl:h-[800px]  
             bg-gradient-to-t from-ef-blue to-ef-purple 
             rounded-full blur-2xl shadow-lg ring-2 ring-white
             dark:blur-md opacity-100 dark:opacity-60 dark:drop-shadow-[0_0px_40px_rgba(150,100,255,0.5)] dark:ring-0"
    />

    <div className="z-10 flex flex-col items-center gap-4">
      <h1 className="font-league-gothic text-6xl md:text-8xl tracking-[6px] md:tracking-[12px]">
        EVA FERRAND
      </h1>
      <h2 className="font-montserrat text-xl md:text-2xl text-center">
        Bienvenue sur mon portfolio, où
        <br /> <strong>design</strong> et <strong>code</strong> se rencontrent !
      </h2>
      <div className="bg-ef-light-bg dark:bg-ef-dark-bg rounded-full p-8 md:p-12">
        <img
          src={Picto}
          alt="Pictogramme Développeuse"
          className="w-32 h-32 md:w-64 md:h-64 object-contain"
        />
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2 }}
        className="flex items-center justify-center transition-all md:absolute bottom-10"
      >
        <Link
          to="about"
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

export default Home;

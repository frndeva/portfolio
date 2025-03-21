import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Events, scrollSpy } from "react-scroll";
import { HugeiconsIcon } from "@hugeicons/react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import {
  Home04Icon,
  UserFullViewIcon,
  WebDesign01Icon,
  ContactBookIcon,
  Sun01Icon,
  Moon02Icon,
  FavouriteIcon,
  Menu03Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { database, ref, get, set, update } from "../firebaseConfig";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [likes, setLikes] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  const addLike = () => {
    const likesRef = ref(database, "likes");
    setLikes((prevLikes) => prevLikes + 1);
    update(likesRef, { likes: likes + 1 });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(savedTheme);
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    const likesRef = ref(database, "likes");
    get(likesRef).then((snapshot) => {
      if (snapshot.exists()) {
        setLikes(snapshot.val().likes);
      } else {
        set(likesRef, { likes: 0 });
      }
    });
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("begin", (to) => {
      setActiveSection(to);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      // Supprime le "#" de l'URL et scrolle à la section
      const sectionId = location.hash.replace("#", "");
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
      });
    }
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Désactive le scroll
    } else {
      document.body.style.overflow = "auto"; // Réactive le scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Nettoyage au démontage
    };
  }, [isOpen]);

  const menuItems = [
    { id: "home", icon: Home04Icon, title: "Accueil" },
    { id: "about", icon: UserFullViewIcon, title: "À propos de moi" },
    { id: "projects", icon: WebDesign01Icon, title: "Mes projets" },
    { id: "contact", icon: ContactBookIcon, title: "Me contacter" },
  ];

  return (
    <div>
      {/* Bouton menu mobile */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-8 right-5 z-50 bg-ef-light-div dark:bg-ef-dark-div p-2 rounded-full shadow-md"
        >
          <HugeiconsIcon icon={isOpen ? Cancel01Icon : Menu03Icon} size={32} />
        </button>
      )}

      {/* Menu mobile */}
      {isMobile && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isOpen ? "0%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`fixed inset-0 bg-ef-light-bg dark:bg-ef-dark-bg flex flex-col items-center justify-center z-40`}
        >
          <div className="flex flex-col gap-8">
            {menuItems.map((item) =>
              isHomePage ? (
                <Link
                  key={item.id}
                  to={item.id}
                  onClick={toggleSidebar}
                  activeClass="active"
                  className="text-xl font-semibold flex items-center gap-4 cursor-pointer"
                >
                  <HugeiconsIcon icon={item.icon} size={28} />
                  {item.title.toUpperCase()}
                </Link>
              ) : (
                // 🔹 Utilisation de <a> si on est sur une autre page
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={toggleSidebar}
                  className="text-xl font-semibold flex items-center gap-4 cursor-pointer"
                >
                  <HugeiconsIcon icon={item.icon} size={28} />
                  {item.title.toUpperCase()}
                </a>
              )
            )}
            {/* Ligth / Dark */}
            <button onClick={toggleTheme} className="flex items-center gap-4">
              {isDarkMode ? (
                <HugeiconsIcon icon={Sun01Icon} size={32} />
              ) : (
                <HugeiconsIcon icon={Moon02Icon} size={32} />
              )}
              <p className="text-xl font-semibold gap-4">LIGHT / DARK</p>
            </button>

            {/* Likes */}
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={addLike}
            >
              <HugeiconsIcon icon={FavouriteIcon} size={32} />

              <p className="text-xl font-semibold gap-4">{likes ?? 0} LIKES</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed left-5 top-5 rounded-full p-4 cursor-pointer shadow-md transition-all z-50 bg-ef-light-div dark:bg-ef-dark-div"
      >
        <a href="/" className="block ">
          <span className="text-4xl font-gugi">EF</span>
        </a>
      </motion.div>

      {/* Menu desktop */}
      {!isMobile && (
        <div className="fixed left-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-50 bg-ef-light-div dark:bg-ef-dark-div py-8 px-4 rounded-3xl shadow-md">
          <div className="flex flex-col gap-6">
            {menuItems.map((item) =>
              isHomePage ? (
                // 🔹 Utilisation de react-scroll si on est sur la page d'accueil
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onSetActive={() => setActiveSection(item.id)}
                  activeClass="active"
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center justify-center w-12 h-12 transition-all ${
                      activeSection === item.id
                        ? "bg-ef-purple rounded-full text-ef-black dark:text-white"
                        : ""
                    }`}
                  >
                    <HugeiconsIcon icon={item.icon} size={32} />
                  </motion.div>
                </Link>
              ) : (
                // 🔹 Utilisation de <a> si on est sur une autre page
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-12 h-12 transition-all"
                  >
                    <HugeiconsIcon icon={item.icon} size={32} />
                  </motion.div>
                </a>
              )
            )}
          </div>

          <div className="mt-auto z-50">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-12 h-12 text-ef-black"
            >
              {isDarkMode ? (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="transition-all"
                >
                  <HugeiconsIcon icon={Sun01Icon} size={32} />
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="transition-all"
                >
                  <HugeiconsIcon icon={Moon02Icon} size={32} />
                </motion.div>
              )}
            </button>
          </div>

          <div
            className="mt-auto flex flex-col items-center justify-center cursor-pointer z-50"
            onClick={addLike}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="transition-all"
            >
              <HugeiconsIcon icon={FavouriteIcon} size={32} />
            </motion.div>
            <p className="text-sm mt-1">{likes ?? 0}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

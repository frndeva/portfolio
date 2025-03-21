import { useEffect } from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  useEffect(() => {
    document.title = "Page introuvable - Eva Ferrand";
    let metaRobots = document.querySelector("meta[name='robots']");
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.name = "robots";
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", "noindex, follow");
  }, []);
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen text-center">
      <h1 className="text-8xl font-bold font-league-gothic">404</h1>
      <h2 className="text-2xl font-semibold">
        Oups ! Cette page n'existe pas.
      </h2>
      <p className="text-gray-600">
        La page que vous recherchez est introuvable.
      </p>
      <Link
        to="/"
        className="border-2 py-2 w-60 mt-2 rounded-full cursor-pointer text-center border-ef-light-text text-ef-light-text 
             hover:bg-ef-light-text hover:text-ef-light-div dark:border-ef-dark-text dark:text-ef-dark-text hover:dark:bg-ef-dark-text hover:dark:text-ef-light-text
       transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default Page404;

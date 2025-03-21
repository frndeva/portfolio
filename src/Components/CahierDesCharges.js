import React from "react";
import Pictogramme from "../assets/images/others/pictogramme.webp";
import { HugeiconsIcon } from "@hugeicons/react";
import { Download04Icon } from "@hugeicons/core-free-icons";
import PdfCahierDesCharge from "../CahierDesCharges.pdf";

const CahierDesCharge = () => {
  return (
    <div
      name="Cahier"
      className="flex flex-col-reverse lg:flex-row items-center my-20 container min-w-[300px] w-[300px] lg:w-[800px] mx-auto"
    >
      <div className="w-2/3 lg:w-1/3 mt-4 lg:mt-0">
        <img src={Pictogramme} alt="Pictogramme Développeuse" />
      </div>

      <div className="w-full lg:w-2/3 pl-0 lg:pl-20 text-center lg:text-left">
        <h3 className="text-2xl pb-10">Vous savez déjà ce qu'il vous faut ?</h3>
        <p className="pb-5">
          Si vous souhaitez obtenir un devis, vous devez remplir le cahier des
          charges avec le maximum d'informations. Merci de prendre le temps de
          le remplir correctement, car qui mieux que vous peut parler de votre
          entreprise.
        </p>
        <p className="pb-10">
          On peut également le remplir ensemble lors d'un premier rendez-vous.
        </p>

        <a
          href={PdfCahierDesCharge}
          download
          className="xl:w-64 border-2 py-2 px-8 mt-2 rounded-full cursor-pointer 
               border-ef-light-text text-ef-light-text 
               hover:bg-ef-light-text hover:text-ef-light-div 
               dark:border-ef-dark-text dark:text-ef-dark-text 
               hover:dark:bg-ef-dark-text hover:dark:text-ef-light-text
               transition-all duration-300 ease-in-out transform hover:scale-105 
               flex items-center justify-center gap-4 text-center"
        >
          Cahier des charges
          <HugeiconsIcon icon={Download04Icon} size={24} />
        </a>
      </div>
    </div>
  );
};

export default CahierDesCharge;

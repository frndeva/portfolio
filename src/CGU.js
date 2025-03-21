import { useEffect } from "react";

const CGU = () => {
  useEffect(() => {
    document.title = "Conditions Générales d'Utilisation - Garage Ferrand";

    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Consultez les conditions générales d'utilisation du site Garage Ferrand."
    );
  }, []);

  return (
    <div className="py-32 lg:py-24 flex flex-col gap-4 items-center mx-10 lg:mx-96 text-center">
      <h1 className="font-league-gothic text-4xl tracking-[6px] md:tracking-[12px]">
        CONDITIONS GÉNÉRALES D'UTILISATION
      </h1>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        1. OBJET
      </h2>
      <p>
        Les présentes Conditions Générales d'Utilisation définissent les règles
        d'accès et d'utilisation du site <strong>Eva Ferrand</strong>.
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        2. ACCÈS AU SITE
      </h2>
      <p>
        Le site est accessible gratuitement depuis tout appareil disposant d'une
        connexion Internet.
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        3. PROPRIÉTÉ INTELLECTUELLE
      </h2>
      <p>
        Tout le contenu du site (textes, images, logos, etc.) est protégé par le
        droit de la propriété intellectuelle. Toute reproduction sans
        autorisation est interdite.
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        4. RESPONSABILITÉ
      </h2>
      <p>
        Eva Ferrand ne peut être tenu responsable des erreurs ou
        indisponibilités du site.
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        5. CONTACT
      </h2>
      <p>
        Pour toute question, vous pouvez me contacter à{" "}
        <strong>ferrandevapro@gmail.com</strong>
      </p>
    </div>
  );
};

export default CGU;

import { useEffect } from "react";

const PolitiqueDeConfidentialite = () => {
  useEffect(() => {
    document.title = "Politique De Confidentialité - Eva Ferrand";

    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Consultez la politique de confidentialité du site Eva Ferrand : éditeur, hébergeur, accès au site et protection des données personnelles."
    );
  }, []);
  return (
    <div className="py-32 lg:py-24 flex flex-col gap-4 items-center mx-10 lg:mx-96 text-center">
      <h1 className="font-league-gothic text-4xl tracking-[6px] md:tracking-[12px]">
        -POLITIQUE DE CONFIDENTIALITÉ-
      </h1>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        1. COLLECTE DES DONNÉES PERSONNELLES
      </h2>
      <p>
        Le site <strong>evaferrand.fr</strong> ne collecte aucune donnée
        personnelle <strong>sans votre consentement</strong>. Les seules données
        que je peux collecter sont celles que vous fournissez volontairement via
        le <strong>formulaire de contact</strong> :
      </p>
      <ul>
        <li>Nom</li>
        <li>Adresse e-mail</li>
        <li>Téléphone</li>
        <li>Site web (si fourni)</li>
        <li>Message</li>
      </ul>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        2. FINALITÉ DU TRAITEMENT DES DONNÉES
      </h2>
      <p>
        Les données collectées via le formulaire de contact sont utilisées
        uniquement pour répondre à votre message et échanger avec vous sur une
        demande de projet.
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        3. BASE LÉGALE DU TRAITEMENT
      </h2>
      <p>
        Le traitement de vos données repose sur votre{" "}
        <strong>consentement</strong> donné lorsque vous remplissez et envoyez
        le formulaire de contact.
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        4. DURÉE DE CONSERVATION DES DONNÉES
      </h2>
      <p>
        Les messages envoyés via le formulaire de contact sont conservés
        <strong>pendant 6 mois</strong> après le dernier échange. Passé ce
        délai, ils sont supprimés automatiquement.
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        5. DROITS DES UTILISATEURS
      </h2>
      <p>
        Conformément au{" "}
        <strong>Règlement Général sur la Protection des Données (RGPD)</strong>,
        vous disposez des droits suivants :
      </p>
      <ul>
        <li>
          <strong>Droit d'accès</strong> : demander quelles données sont
          conservées.
        </li>
        <li>
          <strong>Droit de rectification</strong> : demander la correction d'une
          information erronée.
        </li>
        <li>
          <strong>Droit à l'effacement</strong> : demander la suppression de vos
          données.
        </li>
        <li>
          <strong>Droit d'opposition</strong> : refuser le traitement de vos
          données.
        </li>
      </ul>
      <p>
        Pour exercer ces droits, contactez-moi à{" "}
        <strong>ferrandevapro@gmail.com</strong>.
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        6. COOKIES
      </h2>
      <p>
        Aucun <strong>cookie de suivi</strong> (Google Analytics, publicité,
        etc.) n'est utilisé sur ce site. Seuls des cookies techniques{" "}
        <strong>peuvent être utilisés</strong> pour assurer le bon
        fonctionnement du site.
      </p>
    </div>
  );
};

export default PolitiqueDeConfidentialite;

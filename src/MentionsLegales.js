import { useEffect } from "react";

const MentionsLegales = () => {
  useEffect(() => {
    document.title = "Mentions Légales - Eva Ferrand";

    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Consultez les mentions légales du site Eva Ferrand : éditeur, hébergeur, accès au site et protection des données personnelles."
    );
  }, []);
  return (
    <div className="py-32 lg:py-24 flex flex-col gap-4 items-center mx-10 lg:mx-96 text-center">
      <h1 className="font-league-gothic text-4xl tracking-[6px] md:tracking-[12px]">
        -MENTIONS LÉGALES DU SITE-
      </h1>
      <p>
        Conformément aux dispositions des Articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique,
        dite L.C.E.N., il est porté à la connaissance des utilisateurs et
        visiteurs
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        ARTICLE 1 - L'EDITEUR
      </h2>
      <p>
        Le site evaferrand.fr est édité par Eva Ferrand, domiciliée 6 impasse
        des violettes, dont le numéro de téléphone est 06 26 69 55 70, et
        l'adresse e-mail ferrandevapro@gmail.com
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        ARTICLE 2 - L'HEBERGEUR
      </h2>
      <p>
        L'hébergeur du Site est la société OVH, dont le siège social est situé
        au 2 rue Kellermann - 59100 Roubaix - France,SAS au capital de 10 069
        020 € RCS Lille Métropole 424 761 419 00045 Code APE 2620Z N° TVA : FR
        22 424 761 419
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        ARTICLE 3 - ACCES AU SITE
      </h2>
      <p>
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d'une
        nécessité de maintenance. En cas de modification, interruption ou
        suspension du Site, l'Editeur ne saurait être tenu responsable.
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        ARTICLE 4 - COLLECTE DES DONNEES
      </h2>
      <p>
        Pour l'instant, je ne collecte aucune donnée personnelle sur ce site, à
        l'exception des informations que vous choisissez de me fournir
        volontairement via le formulaire disponible. Ces données seront
        utilisées uniquement dans le but spécifié au moment de la soumission du
        formulaire et ne seront pas partagées avec des tiers sans votre
        consentement explicite. Je m'engage à respecter votre vie privée et à
        prendre toutes les mesures nécessaires pour protéger vos informations
        personnelles.
      </p>

      <h2 className="text-xl md:text-2xl 2xl:text-4xl tracking-[4px] md:tracking-[8px]">
        ARTICLE 5 - PROPRIÉTÉ INTELLECTUELLE
      </h2>
      <p>
        Les marques et les logotypes figurant sur le site constituent des signes
        déposés par l'Editeur ou par des tiers/partenaires et sont protégés au
        titre du droit des marques. Toute reproduction, imitation ou usage,
        total ou partiel, de ces signes distinctifs sans l'autorisation expresse
        de l'Editeur constitue une violation des droits de propriété
        intellectuelle et engage la responsabilité de leur auteur au titre
        d'actes de contrefaçon. En cas de violation de ces droits, l'Editeur se
        réserve le droit d'engager des poursuites judiciaires et de demander
        réparation pour tout préjudice subi, conformément aux dispositions
        légales en vigueur, y compris des dommages et intérêts ainsi que des
        frais de justice.
      </p>
    </div>
  );
};

export default MentionsLegales;

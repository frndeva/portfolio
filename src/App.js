import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Portfolio from "./Portfolio";

import GarageFerrand from "./projects/GarageFerrand";
import SMichue from "./projects/SMichue";
import Novaart from "./projects/Novaart";
import Edicreer from "./projects/Edicreer";
import SolutionCaisse from "./projects/SolutionCaisse";
import LesGlacesDesCourbetons from "./projects/LesGlacesDesCourbetons";
import Cosyplaid from "./projects/Cosyplaid";
import Studio from "./projects/Studio";
import LaGuibollRun from "./projects/LaGuibollRun";
import Poopoopidoo from "./projects/Poopoopidoo";
import MentionsLegales from "./MentionsLegales";
import Page404 from "./Page404";
import CGU from "./CGU";
import PolitiqueDeConfidentialite from "./PolitiqueDeConfidentialite";

function App() {
  return (
    <div className="bg-ef-light-bg dark:bg-ef-dark-bg text-ef-light-text dark:text-ef-dark-text transition-theme">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/garage-ferrand" element={<GarageFerrand />} />
          <Route path="/smichue" element={<SMichue />} />
          <Route path="/novaart" element={<Novaart />} />
          <Route path="/edicreer" element={<Edicreer />} />
          <Route path="/solution-caisse" element={<SolutionCaisse />} />
          <Route
            path="/les-glaces-des-courbetons"
            element={<LesGlacesDesCourbetons />}
          />
          <Route path="/cosyplaid" element={<Cosyplaid />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/la-guiboll-run" element={<LaGuibollRun />} />
          <Route path="/poopoopidoo" element={<Poopoopidoo />} />

          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/cgu" element={<CGU />} />
          <Route
            path="/politique-confidentialite"
            element={<PolitiqueDeConfidentialite />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

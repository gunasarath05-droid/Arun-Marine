import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ReferEarn from './pages/ReferEarn';
import RegistrationServices from './pages/RegistrationServices';
import EngineeringServices from './pages/EngineeringServices';
import MarineTourism from './pages/MarineTourism';
import TourismServices from './pages/TourismServices';
import MaintenanceServices from './pages/MaintenanceServices';
import YachtCharterBlog from './pages/blogs/YachtCharterBlog';
import DubaiCaptainsNews from './pages/blogs/DubaiCaptainsNews';
import LuxuriousYachtingBlog from './pages/blogs/LuxuriousYachtingBlog';
import DubaiFromSeaBlog from './pages/blogs/DubaiFromSeaBlog';
import LuxuryDinnerCruise from './pages/yachts/LuxuryDinnerCruise';
import BuMubarak from './pages/yachts/BuMubarak';
import Mahboob from './pages/yachts/Mahboob';
import MrgPackage from './pages/yachts/MrgPackage';
import HatterasPackage from './pages/yachts/HatterasPackage';
import NoraPackage from './pages/yachts/NoraPackage';
import RegalPackage from './pages/yachts/RegalPackage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/refer-earn" element={<ReferEarn />} />
            <Route path="/services/registration" element={<RegistrationServices />} />
            <Route path="/services/engineering" element={<EngineeringServices />} />
            <Route path="/yachts" element={<MarineTourism />} />
            <Route path="/services/tourism" element={<TourismServices />} />
            <Route path="/services/maintenance" element={<MaintenanceServices />} />
            <Route path="/blog/yacht-charter" element={<YachtCharterBlog />} />
            <Route path="/blog/dubai-captains" element={<DubaiCaptainsNews />} />
            <Route path="/blog/luxurious-yachting" element={<LuxuriousYachtingBlog />} />
            <Route path="/blog/dubai-from-sea" element={<DubaiFromSeaBlog />} />

            {/* Yacht Routes */}
            <Route path="/yacht/luxury-dinner-cruise" element={<LuxuryDinnerCruise />} />
            <Route path="/yacht/bu-mubarak" element={<BuMubarak />} />
            <Route path="/yacht/mahboob" element={<Mahboob />} />
            <Route path="/yacht/mrg-package" element={<MrgPackage />} />
            <Route path="/yacht/hatteras-package" element={<HatterasPackage />} />
            <Route path="/yacht/nora-package" element={<NoraPackage />} />
            <Route path="/yacht/regal-package" element={<RegalPackage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

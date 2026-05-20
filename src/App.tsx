/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import CertificateSection from "./components/CertificateSection";
import GarudaSection from "./components/GarudaSection";
import BenefitsSection from "./components/BenefitsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-slate-800 bg-white selection:bg-blue-200">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <CertificateSection />
        <GarudaSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

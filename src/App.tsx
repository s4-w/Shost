/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fees from "@/components/Fees";
import RevenueEstimator from "@/components/RevenueEstimator";
import Frustrations from "@/components/Frustrations";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { LanguageProvider } from "@/src/context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen selection:bg-accent selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Fees />
          <RevenueEstimator />
          <Frustrations />
          <Process />
          <FAQ />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}


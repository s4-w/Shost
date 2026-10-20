import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fees from "@/components/Fees";
import RevenueEstimator from "@/components/RevenueEstimator";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Fees />
      <RevenueEstimator />
      <Process />
      <FAQ />
      <About />
      <Contact />
    </>
  );
}

import React from "react";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export default function ServicesPage() {
  return (
    <div data-header-theme="light" className="pt-28 md:pt-32 pb-16 bg-surface">
      <Services />
      <Process />
      <Contact />
    </div>
  );
}

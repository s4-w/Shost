import React from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function AboutPage() {
  return (
    <div data-header-theme="light" className="pt-28 md:pt-32 pb-16 bg-surface">
      <About isStandalonePage={true} />
      <Contact />
    </div>
  );
}

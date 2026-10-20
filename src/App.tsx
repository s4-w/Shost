import React from "react";
import { RouterProvider, useRouter } from "@/src/context/RouterContext";
import { LanguageProvider } from "@/src/context/LanguageContext";
import { CookieProvider } from "@/src/context/CookieContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import CookiePreferencesModal from "@/components/CookiePreferencesModal";
import MobileFloatingBar from "@/components/MobileFloatingBar";
import SectionNavigator from "@/components/SectionNavigator";

import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import TarifsPage from "@/pages/TarifsPage";
import AboutPage from "@/pages/AboutPage";
import SectorPage from "@/pages/SectorPage";
import BlogIndexPage from "@/pages/BlogIndexPage";
import BlogPostPage from "@/pages/BlogPostPage";
import LegalPage from "@/pages/LegalPage";
import NotFoundPage from "@/pages/NotFoundPage";

function PageRouter() {
  const { path } = useRouter();

  // Normalize path by removing trailing slash if not root
  const cleanPath = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;

  let pageContent = <HomePage />;

  if (cleanPath === "/" || cleanPath === "") {
    pageContent = <HomePage />;
  } else if (cleanPath === "/services") {
    pageContent = <ServicesPage />;
  } else if (cleanPath === "/tarifs") {
    pageContent = <TarifsPage />;
  } else if (cleanPath === "/qui-sommes-nous") {
    pageContent = <AboutPage />;
  } else if (cleanPath === "/conciergerie-airbnb-grenoble") {
    pageContent = <SectorPage slug="conciergerie-airbnb-grenoble" />;
  } else if (cleanPath === "/secteur-voiron") {
    pageContent = <SectorPage slug="secteur-voiron" />;
  } else if (cleanPath === "/secteur-echirolles") {
    pageContent = <SectorPage slug="secteur-echirolles" />;
  } else if (cleanPath === "/secteur-meylan") {
    pageContent = <SectorPage slug="secteur-meylan" />;
  } else if (cleanPath === "/secteur-saint-martin-d-heres") {
    pageContent = <SectorPage slug="secteur-saint-martin-d-heres" />;
  } else if (cleanPath === "/secteur-gresivaudan") {
    pageContent = <SectorPage slug="secteur-gresivaudan" />;
  } else if (cleanPath === "/blog") {
    pageContent = <BlogIndexPage />;
  } else if (cleanPath.startsWith("/blog/")) {
    const slug = cleanPath.replace("/blog/", "");
    pageContent = <BlogPostPage slug={slug} />;
  } else if (cleanPath === "/mentions-legales") {
    pageContent = <LegalPage slug="mentions-legales" />;
  } else if (cleanPath === "/politique-de-confidentialite") {
    pageContent = <LegalPage slug="politique-de-confidentialite" />;
  } else if (cleanPath === "/politique-cookies") {
    pageContent = <LegalPage slug="politique-cookies" />;
  } else if (cleanPath === "/cgv") {
    pageContent = <LegalPage slug="cgv" />;
  } else {
    pageContent = <NotFoundPage />;
  }

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white flex flex-col justify-between pb-14 md:pb-0">
      <Navbar />
      <main id="main-content" className="flex-grow">
        {pageContent}
      </main>
      <Footer />
      <CookieBanner />
      <CookiePreferencesModal />
      <MobileFloatingBar />
      <SectionNavigator />
    </div>
  );
}

export default function App({ initialPath }: { initialPath?: string }) {
  return (
    <LanguageProvider>
      <RouterProvider initialPath={initialPath}>
        <CookieProvider>
          <PageRouter />
        </CookieProvider>
      </RouterProvider>
    </LanguageProvider>
  );
}

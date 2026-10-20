import React, { createContext, useContext, useEffect, useState } from "react";
import { SEO_DATA, BASE_URL } from "@/src/data/seoData";

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ initialPath?: string; children: React.ReactNode }> = ({
  initialPath,
  children,
}) => {
  const [path, setPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname || "/";
    }
    return initialPath || "/";
  });

  const scrollToElementWithOffset = (el: Element) => {
    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.getBoundingClientRect().height : 80;
    const buffer = 20;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - (navHeight + buffer);

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
  };

  const navigate = (to: string) => {
    if (typeof window === "undefined") return;

    // Handle hash links on same page
    if (to.startsWith("#")) {
      const el = document.querySelector(to);
      if (el) {
        scrollToElementWithOffset(el);
      }
      return;
    }

    // Handle relative anchor on home page if currently not on home page
    if (to.startsWith("/#")) {
      const hash = to.replace("/", "");
      if (path !== "/") {
        window.history.pushState(null, "", to);
        setPath("/");
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) scrollToElementWithOffset(el);
        }, 150);
      } else {
        const el = document.querySelector(hash);
        if (el) scrollToElementWithOffset(el);
      }
      return;
    }

    if (to !== path) {
      window.history.pushState(null, "", to);
      setPath(to);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || "/");
      if (window.location.hash) {
        setTimeout(() => {
          const el = document.querySelector(window.location.hash);
          if (el) scrollToElementWithOffset(el);
        }, 100);
      }
    };

    window.addEventListener("popstate", handlePopState);

    // If initial URL contains a hash, scroll nicely with header offset
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash);
        if (el) scrollToElementWithOffset(el);
      }, 350);
    }

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Sync document head metadata on path change
  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentMeta = SEO_DATA[path] || SEO_DATA["/404"];
    if (currentMeta) {
      document.title = currentMeta.title;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", currentMeta.description);

      // Update canonical link
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", currentMeta.canonical);

      // Open Graph
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", currentMeta.title);

      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", currentMeta.description);

      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", currentMeta.canonical);

      // Twitter
      const twTitle = document.querySelector('meta[property="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", currentMeta.title);

      const twDesc = document.querySelector('meta[property="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", currentMeta.description);
    }
  }, [path]);

  // Global link interception for clean internal navigation
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleGlobalClick = (e: MouseEvent) => {
      // Don't intercept if modified click
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.defaultPrevented) return;

      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Skip external links, tel:, mailto:, download links
      if (
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        target.hasAttribute("download") ||
        target.getAttribute("target") === "_blank"
      ) {
        return;
      }

      // If it's a hash anchor on the current page
      if (href.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          scrollToElementWithOffset(el);
          window.history.pushState(null, "", href);
        }
        return;
      }

      // If it's an internal route
      if (href.startsWith("/")) {
        e.preventDefault();
        navigate(href);
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, [path]);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
};

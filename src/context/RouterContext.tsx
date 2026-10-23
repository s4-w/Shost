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

  // Sync document head metadata on path change (title, description, canonical, og:*, twitter:*)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentMeta = SEO_DATA[path] || SEO_DATA["/404"];
    if (currentMeta) {
      // 1. Document title
      document.title = currentMeta.title;

      // Helper to update or create meta tags by multiple possible selectors
      const setMetaTag = (selectors: string[], defaultAttr: "name" | "property", attrName: string, contentValue: string) => {
        let el: HTMLMetaElement | null = null;
        for (const sel of selectors) {
          el = document.querySelector<HTMLMetaElement>(sel);
          if (el) break;
        }
        if (!el) {
          el = document.createElement("meta");
          el.setAttribute(defaultAttr, attrName);
          document.head.appendChild(el);
        }
        el.setAttribute("content", contentValue);
      };

      // 2. Meta description
      setMetaTag(['meta[name="description"]'], "name", "description", currentMeta.description);

      // 3. Canonical link
      let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", currentMeta.canonical);

      // 4. Open Graph tags
      setMetaTag(['meta[property="og:title"]', 'meta[name="og:title"]'], "property", "og:title", currentMeta.title);
      setMetaTag(['meta[property="og:description"]', 'meta[name="og:description"]'], "property", "og:description", currentMeta.description);
      setMetaTag(['meta[property="og:url"]', 'meta[name="og:url"]'], "property", "og:url", currentMeta.canonical);

      // 5. Twitter Card tags
      setMetaTag(['meta[name="twitter:title"]', 'meta[property="twitter:title"]'], "name", "twitter:title", currentMeta.title);
      setMetaTag(['meta[name="twitter:description"]', 'meta[property="twitter:description"]'], "name", "twitter:description", currentMeta.description);
      setMetaTag(['meta[name="twitter:url"]', 'meta[property="twitter:url"]'], "name", "twitter:url", currentMeta.canonical);
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

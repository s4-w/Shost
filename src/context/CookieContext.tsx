import React, { createContext, useContext, useEffect, useState } from "react";

export interface CookiePreferences {
  necessary: boolean; // Always true
  analytics: boolean;
  marketing: boolean;
}

interface CookieContextType {
  consentGiven: boolean;
  preferences: CookiePreferences;
  isBannerOpen: boolean;
  isPreferencesModalOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: Partial<CookiePreferences>) => void;
  openPreferencesModal: () => void;
  closePreferencesModal: () => void;
}

const COOKIE_STORAGE_KEY = "shost_cookie_consent_v1";

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState<boolean>(true); // initially true to avoid flash on SSR
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [isBannerOpen, setIsBannerOpen] = useState<boolean>(false);
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences({ ...defaultPreferences, ...parsed });
        setConsentGiven(true);
        setIsBannerOpen(false);
      } else {
        setConsentGiven(false);
        setIsBannerOpen(true);
      }
    } catch {
      setConsentGiven(false);
      setIsBannerOpen(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(allAccepted));
    } catch {}
    setPreferences(allAccepted);
    setConsentGiven(true);
    setIsBannerOpen(false);
    setIsPreferencesModalOpen(false);
  };

  const rejectAll = () => {
    const allRejected: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(allRejected));
    } catch {}
    setPreferences(allRejected);
    setConsentGiven(true);
    setIsBannerOpen(false);
    setIsPreferencesModalOpen(false);
  };

  const savePreferences = (custom: Partial<CookiePreferences>) => {
    const finalPrefs: CookiePreferences = {
      necessary: true,
      analytics: !!custom.analytics,
      marketing: !!custom.marketing,
    };
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(finalPrefs));
    } catch {}
    setPreferences(finalPrefs);
    setConsentGiven(true);
    setIsBannerOpen(false);
    setIsPreferencesModalOpen(false);
  };

  const openPreferencesModal = () => {
    setIsPreferencesModalOpen(true);
  };

  const closePreferencesModal = () => {
    setIsPreferencesModalOpen(false);
  };

  return (
    <CookieContext.Provider
      value={{
        consentGiven,
        preferences,
        isBannerOpen,
        isPreferencesModalOpen,
        acceptAll,
        rejectAll,
        savePreferences,
        openPreferencesModal,
        closePreferencesModal,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCookies must be used within a CookieProvider");
  }
  return context;
};

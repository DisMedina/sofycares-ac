import { createContext, useContext, useState, type ReactNode } from "react";
import { translations } from "./translations";
import type { Language, TranslationSchema } from "./types";

interface LanguageContextValue {
  lang: Language;
  t: TranslationSchema;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "es" ? "es" : "en";
  });

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
